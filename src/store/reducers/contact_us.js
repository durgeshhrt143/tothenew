import * as actionType from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialStore = {
  data: {}
};
const contact_us = (state = initialStore, action) => {
  switch (action.type) {
    case actionType.CONTACT_US_PAGE:
      const newData = action.data;
      return updateObject(state, { data: newData });
    default:
      return state;
  }
};
export default contact_us;
