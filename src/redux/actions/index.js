import axios from "axios";

export const getCharacters =
  (page, filterStatus, filterSpecies, filterGender) => (dispatch) => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character?page=${page}&status=${filterStatus}&gender=${filterGender}&species=${filterSpecies}`
      )
      .then((response) => response.data)
      .then((result) => {
        const payload = [result.results, result.info.pages];
        dispatch({ type: "GET_CHARACTERS", payload: payload });
      })
      .catch((error) => {
        dispatch({
          type: "GET_CHARACTERS_ERROR",
          payload: "Characters could not be get from API",
        });
      });
  };

export const getCharacterDetails = (id) => (dispatch) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) =>
      dispatch({ type: "GET_CHARACTER_DETAIL", payload: res.data })
    )
    .catch((err) =>
      dispatch({
        type: "GET_CHARACTER_DETAIL_ERROR",
        payload: "Character could not be get from API",
      })
    );
};
