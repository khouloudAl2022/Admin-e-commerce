import { LOADING, FAIL, LOGIN } from "JS/actionTypes/admUserTypes";

const initialState = {
  user: null,
  load: true,
  auth: false,
  errors: [],
};

const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, user: payload.founduser, load: false, auth: true };
    case LOADING:
      return { ...state, load: false };
    case FAIL:
      return { ...state, errors: payload.errors };

    default:
      return state;
  }
};
export default auth;
