import axios from "axios";
import React, { useEffect, useState } from "react";

function Episode({ episode }) {
  const [episodeName, setEpisodeName] = useState();
  useEffect(() => {
    axios
      .get(episode)
      .then((res) => setEpisodeName(res.data.name))
      .catch((err) => console.log("Episode Card Detail Error : ", err));
    axios.get();
    console.log(episode);
  }, [episode]);

  return <div>{episodeName}</div>;
}

export default Episode;
