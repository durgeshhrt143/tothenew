import http from "./HttpService";
import { apiEndPoint } from "../config.json";
export function getPressReleasesService() {
  return http.get(`${apiEndPoint}/press-releases`);
}
