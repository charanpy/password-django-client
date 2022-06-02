import { errorToaster } from './toast';
import { getItem } from './token';

const getHeaders = (method, isAuth = false) => {
  const headers = {};
  if (isAuth) headers['Authorization'] = `Token ${getItem()}`;
  if (method === 'GET') return headers;

  if (method === 'POST') {
    headers['Content-Type'] = 'application/json';
  }
  return headers;
};

export const apiURL =
  process.env.REACT_APP_BASE_URL || 'http://localhost:8000/api/v1/';

const request = async (
  endpoint,
  method,
  body,
  isAuth = false,
  showError = true
) => {
  const headers = getHeaders(method, isAuth);

  const res =
    method === 'GET'
      ? await fetch(`${apiURL}${endpoint}`, {
          headers,
        })
      : await fetch(`${apiURL}${endpoint}`, {
          headers,
          body: JSON.stringify(body),
          method,
        });

  const data = await res.json();

  if (!res?.ok) {
    if (showError) errorToaster(data?.message || 'Something went wrong');
    throw new Error(data?.message || data?.[0] || 'Something went wrong');
  }
  return data;
};

export default request;
