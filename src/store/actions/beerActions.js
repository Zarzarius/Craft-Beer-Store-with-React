import { helpFetchBeer } from "../helpers";

export const fetchBeer = () => async (dispatch) => {
  const response = await helpFetchBeer();
  dispatch({
    type: "FETCH_BEER",
    payload: response.data,
  });
};
