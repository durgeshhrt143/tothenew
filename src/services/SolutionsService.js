import http from "./HttpService";
import { apiEndPoint } from "../config.json";
export function getSolutions() {
  return http.get(`${apiEndPoint}/solutions`);
}
