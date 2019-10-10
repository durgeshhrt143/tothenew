import http from "./HttpService";
import { apiEndPoint } from "../config.json";
export function getCareer() {
  return http.get(`${apiEndPoint}/jobs`);
}
