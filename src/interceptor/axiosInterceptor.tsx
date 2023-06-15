import axios from "axios";
import { getValidationErrors } from "../util/getValidationError";

export const AxiosInterceptor = () => {
  axios.interceptors.request.use((request) => {
    console.log("starting request", request);
    return request;
  });
  axios.interceptors.response.use(
    (response) => {
      console.log("Resolved Response", { response });
      return response;
    },
    (error) => {
      console.log({ error }, getValidationErrors(error.code));
      return Promise.reject(error);
    }
  );
};
