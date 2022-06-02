export const setItem = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key) => {
  const value = window.localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }
};
