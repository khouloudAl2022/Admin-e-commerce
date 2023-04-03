const initialState = {};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case type:
      return { ...state, ...payload };

    default:
      return state;
  }
};
export default productReducer;
