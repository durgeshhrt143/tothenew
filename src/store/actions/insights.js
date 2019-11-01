import * as actionTypes from "../actions/actionTypes";
import * as Insights from "../../services/InsightsService";
export const insights = data => {
  return {
    type: actionTypes.INSIGHTS_PAGE,
    data: data
  };
};
export const fetchData = () => {
  return async dispatch => {
    const { data } = await Insights.getInsights();
    dispatch(insights(data));
  };
};
