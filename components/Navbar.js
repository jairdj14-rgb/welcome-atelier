"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { services } from "../data/services";

export default function Navbar() {

  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled
        ? "bg-[var(--cream)]/95 backdrop-blur-md shadow-sm"
        : "bg-transparent"
      }`}
    >

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          href="/"
          className="text-xl tracking-wide text-[var(--sage)]"
        >
          Welcome Atelier
        </Link>

        <div className="hidden md:flex gap-8 text-sm">

          {services.map((service) => {

            const isActive = pathname.includes(service.slug);

            return (

              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className={`relative transition
                ${isActive
                  ? "text-[var(--sage)]"
                  : "text-[var(--ivory)] hover:opacity-70"
                }`}
              >

                {service.name}

                {isActive && (
                  <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[var(--sage)]"></span>
                )}

              </Link>

            );

          })}

        </div>

      </div>

    </nav>

  );

}