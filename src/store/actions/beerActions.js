import { helpFetchBeer } from "../helpers";
import { FETCH_BEER } from "./types";

export const fetchBeer = () => async (dispatch) => {
  const response = await helpFetchBeer();
  dispatch({
    type: FETCH_BEER,
    payload: response.data,
  });
};
