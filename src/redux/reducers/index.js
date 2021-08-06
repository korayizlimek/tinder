const INITIAL_STATE = {
  characters: [],
  pages: 0,
  characterDetails: {},
  characterDetailsError: "",
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_CHARACTERS":
      return {
        ...state,
        characters: action.payload[0],
        pages: action.payload[1],
      };

    case "GET_CHARACTERS_ERROR_NOT_FOUND":
      return { ...state, characters: action.payload };

    case "GET_CHARACTER_DETAIL":
      console.log("calisti");
      return { ...state, characterDetails: action.payload };

    case "GET_CHARACTER_DETAIL_ERROR":
      return { ...state, characterDetailsError: action.payload };
    default:
      return state;
  }
};
