import * as actionType from "../actions/actionTypes";
import * as About from "../../services/AboutService";
export const about_us = data => {
  return {
    type: actionType.ABOUT_US_PAGE,
    data: data
  };
};
export const fetchData = () => {
  return async dispatch => {
    const { data } = await About.getAbout();
    dispatch(about_us(data));
  };
};
