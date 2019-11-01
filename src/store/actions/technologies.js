import * as actionTypes from "./actionTypes";
import * as Technologies from "../../services/technologiesService";
export const technologies = data => {
  return {
    type: actionTypes.TECHNOLOGIES_PAGE,
    data: data
  };
};
export const fetchData = () => {
  return async dispatch => {
    const { data } = await Technologies.getTechnologies();
    dispatch(technologies(data));
  };
};
