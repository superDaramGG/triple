import { useEffect, useRef } from "react";

export default function useFadeIn(
  direction = "up",
  duration = 0.7,
  delay = 0.1
) {
  const dom = useRef();

  const handleDirection = (name) => {
    switch (name) {
      case "up":
        return "translate3d(0, 50%, 0)";
      case "center":
        return "translate3d(0, 0, 0)";
      default:
        return;
    }
  };

  useEffect(() => {
    if (dom.current) {
      const { current } = dom;

      current.style.transitionProperty = "all";
      current.style.transitionDuration = `${duration}s`;
      current.style.transitionDelay = `${delay}s`;
      current.style.opacity = 1;
      current.style.transform = "none";
    }
  }, [duration, delay]);

  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: handleDirection(direction),
    },
  };
}
