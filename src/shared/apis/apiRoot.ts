import Axios, { AxiosError } from 'axios';

export const gitApi = Axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 10 * 1000, //seconds
});

gitApi.interceptors.response.use(function handleData(response) {
  return response;
}, handleError);

function handleError(baseError: AxiosError) {
  console.log('Error', baseError.message);
  throw baseError;
}
