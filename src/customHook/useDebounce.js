import { useCallback, useRef } from "react";

export default function useDebounce(callback, deley) {
  const timer = useRef(null);

  const debouncedCallback = useCallback(
    (...args) => {
      if (timer.current) clearTimeout(timer.current);

      timer.current = setTimeout(() => callback(...args), deley);
    },
    [callback, deley]
  );

  return debouncedCallback;
}
