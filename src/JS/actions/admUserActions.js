import axios from "axios";
import { FAIL, LOADING, GET_USERS } from "JS/actionTypes/admUserTypes";

export const getAllUser = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.get("http://localhost:3000/api/user/getusers");
    dispatch({ type: GET_USERS, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const deleteuser = (id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.delete(`http://localhost:3000/api/user/delete/${id}`);
    console.log(res);
    dispatch(getAllUser());
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
// export const searchUser = (query) => async (dispatch) => {
//   try {
//     const res = await axios.get(`http://localhost:3000/api/user/search/${query}`);
//     dispatch({ type: SEARCH_USER, payload: res.data });
//   } catch (error) {
//     dispatch({ type: FAIL, payload: error.response.data });
//   }
// };
