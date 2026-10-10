import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const [value, setValue] = useState(false);

  useEffect(() => {
    function check() {
      setValue(window.matchMedia(query).matches);
    }

    check();
    const result = window.matchMedia(query);
    result.addEventListener("change", check);

    return () => result.removeEventListener("change", check);
  }, [query]);

  return value;
}
