import * as actionTypes from "../actions/actionTypes";
import * as Solutions from "../../services/SolutionsService";
export const solutions = data => {
  return {
    type: actionTypes.SOLUTIONS_PAGE,
    data: data
  };
};
export const fetchData = () => {
  return async dispatch => {
    const { data } = await Solutions.getSolutions();
    dispatch(solutions(data));
  };
};
