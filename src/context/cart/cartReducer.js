const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: { amount: state.cart.amount + 1 },
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: { amount: state.cart.amount - 1 },
      };
    default:
      return state;
  }
};

export default cartReducer;
