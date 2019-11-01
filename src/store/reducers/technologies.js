import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialState = {
  data: {}
};
const technologies = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TECHNOLOGIES_PAGE:
      const updateData = action.data;
      return updateObject(state, { data: updateData });
    default:
      return state;
  }
};

export default technologies;
