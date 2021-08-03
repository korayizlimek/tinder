import React from "react";
import NotResult from "../../components/NotResult";

import { useSelector } from "react-redux";
import MainSection from "../../components/MainSection";

const Home = () => {
  const characters = useSelector((state) => state.characters);

  return <div>{characters ? <MainSection /> : <NotResult />}</div>;
};

export default Home;
