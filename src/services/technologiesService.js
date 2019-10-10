import http from "./HttpService";
import { apiEndPoint } from "../config.json";
export function getTechnologies() {
  return http.get(`${apiEndPoint}/technologies`);
}
