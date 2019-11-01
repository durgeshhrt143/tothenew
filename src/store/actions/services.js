import * as actionTypes from "./actionTypes";
import * as Services from "../../services/ServicesService";
export const services = data => {
  return {
    type: actionTypes.SERVICES_PAGE,
    data: data
  };
};
export const fetchData = () => {
  return async dispatch => {
    const { data } = await Services.getServices();
    dispatch(services(data));
  };
};
