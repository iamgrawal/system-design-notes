/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait, option = { leading: false, trailing: true }) {
  let lastArgs = null;
  let timer = null;

  // if both leading and trailing are false then do nothing.
  if (!option.leading && !option.trailing) return () => null;

  const conditionCheck = () => {
    if (lastArgs && option.trailing) {
      func.apply(this, lastArgs);
    }
    lastArgs = null;
    timer = null;
  };

  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    if (!timer && option.leading) {
      func.apply(this, args);
    }
    lastArgs = args;
    timer = setTimeout(conditionCheck, wait);
  };
}
