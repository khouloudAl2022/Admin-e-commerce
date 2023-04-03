import axios from "axios";
import { FAIL, LOADING } from "../actionTypes/admUserTypes";
import { ADD_PRODUCT, DELETE_PRODUCT } from "../actionTypes/ProductTypes";

export const AddProduct = (newProduct) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.get("/api/product/add", newProduct);
    dispatch({ type: ADD_PRODUCT, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const DeleteProduct = () => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCT });
  } catch (error) {
    dispatch({ type: FAIL });
  }
};
