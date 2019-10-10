import http from "./HttpService";
import { apiEndPoint } from "../config.json";
export function getEvents() {
  return http.get(`${apiEndPoint}/events`);
}
