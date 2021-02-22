export const addToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: productId,
  };
};

export const addQuantity = (productId, quantity) => {
  return {
    type: "ADD_QUANTITY",
    payload: {
      id: productId,
      quantity: quantity++,
    },
  };
};
