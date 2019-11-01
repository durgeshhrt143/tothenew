import * as actionType from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialState = {
  data: {}
};
const awards = (state = initialState, action) => {
  switch (action.type) {
    case actionType.AWARDS_PAGE:
      const newData = action.data;
      return updateObject(state, { data: newData });
    default:
      return state;
  }
};

export default awards;
