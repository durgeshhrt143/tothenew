import * as actionType from "../actions/actionTypes";
import * as EventsService from "../../services/EventsService";
export const events = data => {
  return {
    type: actionType.EVENTS_PAGE,
    data: data
  };
};
export const fetchData = () => {
  return async dispatch => {
    const { data } = await EventsService.getEvents();
    dispatch(events(data));
  };
};
