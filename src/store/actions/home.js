import * as actionTypes from "./actionTypes";
import * as Home from "../../services/HomeService";
export const home = data => {
  return {
    type: actionTypes.HOME_PAGE,
    data: data
  };
};
export const fetchData = () => {
  return async dispatch => {
    const { data } = await Home.getHome();
    dispatch(home(data));
  };
};
