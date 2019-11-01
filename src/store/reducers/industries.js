import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialState = {
  data: {}
};
const industries = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INDUSTRIES_PAGE:
      const newData = action.data;
      console.log(newData);
      return updateObject(state, { data: newData });
    default:
      return state;
  }
};

export default industries;
