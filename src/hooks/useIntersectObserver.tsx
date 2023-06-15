import { useEffect, useRef, useState } from "react";

const useIntersectObserver = (
  fn: () => void
): { setLastElement: (element: HTMLDivElement | null) => void } => {
  const [lastElement, setLastElement] = useState<HTMLDivElement | null>(null);

  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        fn();
      }
    })
  );

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;
    if (currentElement) {
      currentObserver.observe(currentElement);
    }
    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  return { setLastElement };
};

export default useIntersectObserver;
