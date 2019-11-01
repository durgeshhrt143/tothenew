import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialState = {
  data: {}
};
const insights = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INSIGHTS_PAGE:
      const newData = action.data;
      return updateObject(state, { data: newData });
    default:
      return state;
  }
};

export default insights;
