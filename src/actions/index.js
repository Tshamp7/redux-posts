import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = (response) => {
  // const response = await jsonPlaceholder.get("/posts");
  return async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response });
  };
};
