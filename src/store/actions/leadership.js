import * as actionType from "../actions/actionTypes";
import * as LeaderService from "../../services/LeadershipService";
export const leadership = data => {
  return {
    type: actionType.LEADERSHIP_PAGE,
    data: data
  };
};
export const fetchData = () => {
  return async dispatch => {
    const { data } = await LeaderService.getLeadership();
    dispatch(leadership(data));
  };
};
