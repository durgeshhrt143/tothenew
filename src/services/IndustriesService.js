import http from "./HttpService";
import { apiEndPoint } from "../config.json";
export function getIndustries() {
  return http.get(`${apiEndPoint}/industries`);
}
