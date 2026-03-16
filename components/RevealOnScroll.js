"use client";

import { useEffect, useRef } from "react";

export default function RevealOnScroll({ children }) {

  const ref = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("show");
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();

  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );

}