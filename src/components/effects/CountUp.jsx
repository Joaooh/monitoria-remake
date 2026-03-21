import React, { useEffect, useRef } from "react";
import { animate, useIsomorphicLayoutEffect } from "framer-motion";

export default function CountUp({ to, duration = 2, delay = 0 }) {
  const nodeRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    node.textContent = "0";

    const controls = animate(0, to, {
      duration: duration,
      delay: delay,
      ease: "easeOut",
      onUpdate(value) {
        node.textContent = Math.round(value);
      },
    });

    return () => controls.stop();
  }, [to, duration, delay]);

  return <span ref={nodeRef}>0</span>;
}
