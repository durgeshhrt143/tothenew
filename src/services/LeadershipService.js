import http from "./HttpService";
import { apiEndPoint } from "../config.json";
export function getLeadership() {
  return http.get(`${apiEndPoint}/leadership`);
}
