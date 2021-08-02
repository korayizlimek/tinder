import React from "react";
import "./Cards.css";
import { Cards, NotResult } from "..";

import { useSelector } from "react-redux";

const Home = () => {
  const characters = useSelector((state) => state.characters);

  return <div>{characters ? <Cards /> : <NotResult />}</div>;
};

export default Home;
