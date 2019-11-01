import * as actionTypes from "./actionTypes";
import * as Industries from "../../services/IndustriesService";
export const industries = data => {
  return {
    type: actionTypes.INDUSTRIES_PAGE,
    data: data
  };
};
export const fetchData = () => {
  return async dispatch => {
    const { data } = await Industries.getIndustries();
    dispatch(industries(data));
  };
};
