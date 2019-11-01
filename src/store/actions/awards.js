import * as actionType from "../actions/actionTypes";
import * as AwardsService from "../../services/AwardsService";
const awards = data => {
  return {
    type: actionType.AWARDS_PAGE,
    data: data
  };
};
export const fetchData = () => {
  return async dispatch => {
    const { data } = await AwardsService.getAwards();
    dispatch(awards(data));
  };
};
