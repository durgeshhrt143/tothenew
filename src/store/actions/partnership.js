import * as actionType from "../actions/actionTypes";
import * as PartnershipService from "../../services/PartnershipService";
export const partnership = data => {
  return {
    type: actionType.PARTNERSHIP_PAGE,
    data: data
  };
};
export const fetchData = () => {
  return async dispatch => {
    const { data } = await PartnershipService.getPartnership();
    dispatch(partnership(data));
  };
};
