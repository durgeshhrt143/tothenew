import * as actionType from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialState = {
  data: {}
};
const media_coverage = (state = initialState, action) => {
  switch (action.type) {
    case actionType.MEDIA_COVERAGE_PAGE:
      const newData = action.data;
      return updateObject(state, { data: newData });
    default:
      return state;
  }
};

export default media_coverage;
