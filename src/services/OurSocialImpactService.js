import http from "./HttpService";
import { apiEndPoint } from "../config.json";
export function getOurSocialImpact() {
  return http.get(`${apiEndPoint}/csr`);
}
