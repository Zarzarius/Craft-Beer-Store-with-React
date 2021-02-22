const initState = { beerItems: [] };

export const beerReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_BEER":
      const Random = () => {
        let maxNumber = 6;
        let minNumber = 3.5;
        let randomNumber =
          Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
        return randomNumber;
      };
      return {
        ...state,
        beerItems: [
          ...state.beerItems.map((beer) =>
            Object.assign(beer, { price: Random() }, { quantity: 1 })
          ),
          ...action.payload,
        ],
      };
    default:
      return state;
  }
};
