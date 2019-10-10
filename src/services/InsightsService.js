import http from "./HttpService";
import { apiEndPoint } from "../config.json";
export function getInsights() {
  return http.get(`${apiEndPoint}/insights`);
}
