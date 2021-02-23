import { FETCH_BEER } from "../actions/types";
import { Random } from "../helpers/index";
const initState = { beerItems: [] };

export const beerReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_BEER:
      const fetchedData = {
        ...state,
        beerItems: [...state.beerItems, ...action.payload],
      };

      const fetchedDataAssignedPriceQty = {
        ...state,
        beerItems: fetchedData.beerItems.map((beer) =>
          Object.assign(beer, { price: Random(), quantity: 1 })
        ),
      };
      return fetchedDataAssignedPriceQty;

    default:
      return state;
  }
};
