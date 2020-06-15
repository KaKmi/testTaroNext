import { useState, useEffect } from 'react'
export default function useDebounce(value:any, delay:number) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    },[value]
  );

  return debouncedValue;
}
