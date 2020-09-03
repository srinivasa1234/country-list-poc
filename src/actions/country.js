import api from "../utils/api";
import { GET_COUNTRYS, NO_COUNTRYS } from "./types";

// Get users
export const getCountrys = () => async (dispatch) => {
  try {
    const res = await api.get("https://jsonplaceholder.typicode.com/users");

    dispatch({
      type: GET_COUNTRYS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: NO_COUNTRYS,
    });
  }
};
