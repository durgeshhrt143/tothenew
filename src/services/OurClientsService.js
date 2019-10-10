import http from "./HttpService";
import { apiEndPoint } from "../config.json";
export function getOurClients() {
  return http.get(`${apiEndPoint}/our-clients`);
}
