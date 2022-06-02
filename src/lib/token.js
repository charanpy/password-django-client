export const setItem = (value, key = 'auth_token') =>
  localStorage.setItem(key, value);

export const getItem = (key = 'auth_token') => localStorage.getItem(key);
export const removeItem = (key = 'auth_token') => localStorage.removeItem(key);
