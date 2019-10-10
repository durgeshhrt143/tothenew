import * as actionType from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialStore = {
  data: {}
};
const home = (state = initialStore, action) => {
  switch (action.type) {
    case actionType.HOME:
      return updateObject(state, { data: state.data });
    default:
      return state;
  }
};

export default home;
