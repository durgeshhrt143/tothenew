import * as actionType from "../actions/actionTypes";
import * as ContactUs from "../../services/ContactService";
export const contactUs = data => {
  return {
    type: actionType.CONTACT_US_PAGE,
    data: data
  };
};
export const fetchData = () => {
  return async dispatch => {
    const { data } = await ContactUs.getContact();
    dispatch(contactUs(data));
  };
};
