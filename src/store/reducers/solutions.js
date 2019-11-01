import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialState = {
  data: {}
};
const solution = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SOLUTIONS_PAGE:
      const newData = action.data;
      return updateObject(state, { data: newData });
    default:
      return state;
  }
};

export default solution;
