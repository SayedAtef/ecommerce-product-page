const galleryReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return { bool: !state.bool };
    default:
      return state;
  }
};

export default galleryReducer;
