import axios from "axios";
import { FAIL, LOGIN, LOADING } from "JS/actionTypes/admUserTypes";

const register = (user, navigate) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.post("http://localhost:3000/api/user/login", user);
    dispatch({ type: LOGIN, payload: res.data });
    navigate("/dashboard");
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export default register;
