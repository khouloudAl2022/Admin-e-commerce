import { DELETE_USER, GET_USERS } from "JS/actionTypes/admUserTypes";

const initialState = {
  user: [],
  load: true,
  auth: false,
  errors: [],
};

const admUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_USER:
      return {
        ...state,
        user: state.user.filter((el) => el._id !== payload.id),
        load: false,
        auth: true,
      };
    case GET_USERS:
      return {
        ...state,
        user: payload.users,
        load: false,
        auth: true,
      };

    default:
      return state;
  }
};
export default admUserReducer;
