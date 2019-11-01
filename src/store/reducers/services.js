import * as actionType from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialStore = {
  data: {}
};
const services = (state = initialStore, action) => {
  switch (action.type) {
    case actionType.SERVICES_PAGE:
      const newData = action.data;
      return updateObject(state, { data: newData });
    default:
      return state;
  }
};

export default services;
