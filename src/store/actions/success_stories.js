import * as actionTypes from "../actions/actionTypes";
import * as SuccessStories from "../../services/SuccessStoriesService";
export const success_stories = data => {
  return {
    type: actionTypes.SUCCESS_STORIES_PAGE,
    data: data
  };
};
export const fetchData = dispatch => {
  return async dispatch => {
    const { data } = await SuccessStories.getSuccessStories();
    dispatch(success_stories(data));
  };
};
