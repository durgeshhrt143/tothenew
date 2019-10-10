import http from "./HttpService";
import { apiEndPoint } from "../config.json";
export function getSuccessStories() {
  return http.get(`${apiEndPoint}/success-stories`);
}
