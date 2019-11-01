import * as actionType from "../actions/actionTypes";
import * as Career from "../../services/CareerService";
export const career = data => {
  return {
    type: actionType.CAREER_PAGE,
    data: data
  };
};
export const fetchData = () => {
  return async dispatch => {
    const { data } = await Career.getCareer();
    dispatch(career(data));
  };
};
