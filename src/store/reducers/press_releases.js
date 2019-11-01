import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialState = {
  data: {}
};
const press_releases = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRESSRELEASES_PAGE:
      const newData = action.data;
      return updateObject(state, { data: newData });
    default:
      return state;
  }
};

export default press_releases;
