// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
export default function debounce(func: () => void, wait = 166) {
  let timeout: NodeJS.Timeout;
  function debounced() {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  }

  debounced.clear = () => {
    clearTimeout(timeout);
  };

  return debounced;
}
