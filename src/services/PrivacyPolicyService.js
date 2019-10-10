import http from "./HttpService";
import { apiEndPoint } from "../config.json";
export function getPrivacyPolicy() {
  return http.get(`${apiEndPoint}/privacy-policy`);
}
