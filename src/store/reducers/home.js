import * as actionType from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialStore = {
  data: {}
};
const home = (state = initialStore, action) => {
  switch (action.type) {
    case actionType.HOME_PAGE:
      const newData = action.data;
      return updateObject(state, { data: newData });
    default:
      return state;
  }
};

export default home;
