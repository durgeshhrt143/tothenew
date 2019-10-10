import http from "./HttpService";
import { apiEndPoint } from "../config.json";
export function getHome() {
  return http.get(`${apiEndPoint}/home`);
}
