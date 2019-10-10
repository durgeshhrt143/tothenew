import http from "./HttpService";
import { apiEndPoint } from "../config.json";
export function getBlog() {
  return http.get(`${apiEndPoint}/blog`);
}
