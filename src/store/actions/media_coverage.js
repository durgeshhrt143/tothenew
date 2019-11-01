import * as actionType from "../actions/actionTypes";
import * as MediaCoverageService from "../../services/MediaCoverageService";
export const media_coverage = data => {
  return {
    type: actionType.MEDIA_COVERAGE_PAGE,
    data: data
  };
};
export const fetchData = () => {
  return async dispatch => {
    const { data } = await MediaCoverageService.getMediaCoverage();
    dispatch(media_coverage(data));
  };
};
