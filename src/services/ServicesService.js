import http from "./HttpService";
import { apiEndPoint } from "../config.json";
export function getServices() {
  return http.get(`${apiEndPoint}/services`);
}
