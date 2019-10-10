import http from "./HttpService";
import { apiEndPoint } from "../config.json";
export function getAwards() {
  return http.get(`${apiEndPoint}/awards`);
}
