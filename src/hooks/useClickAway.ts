import { useEffect, useRef } from "react";

type Event = MouseEvent | TouchEvent;

export const useClickAway = (
  callback: () => void,
  excludeRefs: React.RefObject<HTMLElement>[] = []
): React.RefObject<HTMLElement> => {
  const wrapperRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node) &&
        excludeRefs.every((ref) => !ref.current?.contains(event.target as Node))
      ) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [callback, excludeRefs]);

  return wrapperRef;
};
