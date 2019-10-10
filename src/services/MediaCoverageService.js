import http from "./HttpService";
import { apiEndPoint } from "../config.json";
export function getMediaCoverage() {
  return http.get(`${apiEndPoint}/media-coverage`);
}
