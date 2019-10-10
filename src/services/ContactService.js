import http from "./HttpService";
import { apiEndPoint } from "../config.json";
export function getContact() {
  return http.get(`${apiEndPoint}/contact-us`);
}
