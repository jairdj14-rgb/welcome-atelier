"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function EditorialGallery({ images = [] }) {

  const [active, setActive] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {

    const items = containerRef.current?.querySelectorAll(".reveal") || [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();

  }, []);

  return (
    <>
      <section className="bg-[var(--cream)] pt-28 pb-16 -mt-40 relative z-20">

        <div className="max-w-6xl mx-auto px-6">

          <div
            ref={containerRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >

            {images.map((src, i) => (

              <div
                key={i}
                className={`overflow-hidden rounded-xl shadow-md cursor-pointer reveal
                ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                onClick={() => setActive(src)}
              >

                <Image
                  src={src}
                  alt={`gallery-${i}`}
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover transition duration-500 hover:scale-[1.03]"
                />

              </div>

            ))}

          </div>

        </div>

      </section>

      {active && (

        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setActive(null)}
        >

          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setActive(null)}
          >
            <X size={32} />
          </button>

          <div className="max-w-4xl w-full px-6">

            <Image
              src={active}
              alt="lightbox"
              width={1600}
              height={1200}
              className="w-full h-auto rounded-xl"
            />

          </div>

        </div>

      )}

    </>
  );

}