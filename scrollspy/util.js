export const throttle = (func, delay) => {
  let throttled = false;
  return (...args) => {
    if (!throttled) {
      throttled = true;
      setTimeout(() => {
        func(...args);
        throttled = false;
      }, delay);
    }
  };
};

export const debounce = (func, delay) => {
  let timoutId = null;
  return (...args) => {
    clearTimeout(timoutId);
    timoutId = setTimeout(func.bind(null, ...args), delay);
  };
};
