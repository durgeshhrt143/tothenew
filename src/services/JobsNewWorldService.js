import http from "./HttpService";
import { apiEndPoint } from "../config.json";
export function getJobNewersWorld() {
  return http.get(`${apiEndPoint}/job-newers-world`);
}
