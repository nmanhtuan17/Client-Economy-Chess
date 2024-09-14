import axios from "axios";

const URL_API = 'http://127.0.0.1:8000'

class ApiService {
  axiosInstance = axios.create({
    baseURL: API_URL,
  });

  async post(endpoint, data, options = {}) {
    return this.callApi("POST", endpoint, data, options);
  }

  async get(endpoint, data, config = {}) {
    return this.callApi("GET", endpoint, data, config);
  }

  async put(endpoint, data, options = {}) {
    return this.callApi("PUT", endpoint, data, options);
  }

  async delete(endpoint, data) {
    return this.callApi("DELETE", endpoint, data);
  }

  async callApi(method, endpoint, data = {}, config) {
    try {
      const tokens = store.getState().auth.tokens;
      const r = await this.axiosInstance({
        method,
        url: endpoint,
        ...config,
        data: method.toLowerCase() === "get" ? undefined : data,
        headers: {
          Authorization: tokens?.accessToken ? `Bearer ${tokens.accessToken}` : undefined,
          ...(config?.headers || {})
        },
      });
      return r.data;
    } catch (e) {
      if (e.response) {
        if (e.response.data) throw e.response.data;
        throw e.response;
      } else {
        throw e;
      }
    }
  }
}

export default new ApiService();