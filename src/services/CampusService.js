import http from "./HttpService";
import { apiEndPoint } from "../config.json";
export function getCampus() {
  return http.get(`${apiEndPoint}/job-campus`);
}
