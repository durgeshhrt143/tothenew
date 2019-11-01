import * as actionTypes from "../actions/actionTypes";
import * as PressReleasesService from "../../services/PressReleasesService";
export const press_releases = data => {
  return {
    type: actionTypes.PRESSRELEASES_PAGE,
    data: data
  };
};
export const fetchData = () => {
  return async dispatch => {
    const { data } = await PressReleasesService.getPressReleasesService();
    return dispatch(press_releases(data));
  };
};
