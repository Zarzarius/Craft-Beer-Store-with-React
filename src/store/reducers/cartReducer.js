const initState = { cartItems: [] };

export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const localStorageItems = JSON.parse(localStorage.getItem("cartItems"));
      const updatedLocalStorageItems = [...localStorageItems, action.payload];
      const updatedLocalStorageItemsJSON = JSON.stringify(
        updatedLocalStorageItems
      );
      localStorage.setItem("cartItems", updatedLocalStorageItemsJSON);
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "REMOVE_FROM_CART":
      const unfilteredItems = JSON.parse(localStorage.getItem("cartItems"));
      const filteredItems = unfilteredItems.filter(
        (item) => item.id === action.payload
      );
      const filteredItemsJSON = JSON.stringify(filteredItems);
      console.log(filteredItems);

      localStorage.setItem("cartItems", filteredItemsJSON);

      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "ADD_QUANTITY":
      const initialQuantity = JSON.parse(localStorage.getItem("cartItems"));
      const addBeer = [...initialQuantity, action.payload];
      const addBeerJSON = JSON.stringify(addBeer);
      console.log("addbeer", addBeer);
      localStorage.setItem("cartItems", addBeerJSON);

      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    default:
      return state;
  }
};
