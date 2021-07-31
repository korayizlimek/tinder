import axios from "axios";

export const getEpisode = ({ episode }) => {
  axios
    .get(episode)
    .then((res) => {
      const result = res.data.name;
      return result;
    })
    .catch((err) => {
      return err;
    });
};
