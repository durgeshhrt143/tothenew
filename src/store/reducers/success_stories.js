import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialState = {
  data: {}
};
const success_stories = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SUCCESS_STORIES_PAGE:
      const newData = action.data;
      return updateObject(state, { data: newData });
    default:
      return state;
  }
};

export default success_stories;
