import http from "./HttpService";
import { apiEndPoint } from "../config.json";
export function getPartnership() {
  return http.get(`${apiEndPoint}/partnership`);
}
