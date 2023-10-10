export const addItem = (key, value) => {
  localStorage.setItem(key, value);
};

export const removeItem = (key) => {
  localStorage.removeItem(key);
};

export const getItem = (key) => {
  return localStorage.getItem(key);
};
