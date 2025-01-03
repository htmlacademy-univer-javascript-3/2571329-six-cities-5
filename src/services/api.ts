import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { getToken } from './token';
// import { StatusCodes } from 'http-status-codes';
// import { processErrorHandle } from './process-error-handle';

// const StatusCodeMapping: Record<number, boolean> = {
//   [StatusCodes.BAD_REQUEST]: true,
//   [StatusCodes.UNAUTHORIZED]: true,
//   [StatusCodes.NOT_FOUND]: true,
// };

// const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

const BACKEND_URL = 'https://14.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{message: string}>) => {
      // if (error.response && shouldDisplayError(error.response)) {
      //   processErrorHandle(error.response.data.message);
      // }

      throw error;
    }
  );

  return api;
};
