import http from "./HttpService";
import { apiEndPoint } from "../config.json";
export function getAbout() {
  return http.get(`${apiEndPoint}/about-us`);
}
