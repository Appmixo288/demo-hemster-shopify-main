import axios from "axios";
import { getSessionToken } from "@shopify/app-bridge-utils";
import createApp from "@shopify/app-bridge";

var host = null;

if (typeof window !== "undefined") {
  host = window.location.hostname;
}

var baseUrl = "https://" + host + "/api/";

var tempURL = "http://localhost:8081/api/";

var url = host && host.includes("localhost") ? tempURL : baseUrl;

const BaseService = axios.create({
  baseURL: url,
});

// intercept all requests on this axios instance

if (typeof window !== undefined) {
  BaseService.interceptors.request.use(function (config) {
    const app = createApp({
      apiKey: API_KEY,
      host: window.host,
    });

    return getSessionToken(app) // requires an App Bridge instance
      .then((token) => {
        // append your request headers with an authenticated token
        config.headers["Authorization"] = `Bearer ${token}`;
        return config;
      });
  });
}
// export your axios instance to use within your app

export default BaseService;
