"use client";
import Link from "next/link";
import { services } from "../data/services";
import { Instagram, Facebook, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {

    const pathname = usePathname();

let instagram = "https://instagram.com/alma_moments.co";
let facebook = "https://facebook.com/profile.php?id=61586212440480";

const phone = "+522212136039";


if (pathname.includes("alma-moments")) {
  instagram = "https://instagram.com/alma_moments.co";
}

if (pathname.includes("alma-bubble")) {
  instagram = "https://instagram.com/alma.bubble";
}

if (pathname.includes("giveaways-atelier")) {
  instagram = "https://instagram.com/#";
}

if (pathname.includes("bites")) {
  instagram = "https://instagram.com/#";
}


 return (

<footer className="bg-[var(--white)] mt-28 text-[var(--sage)] border-t border-gray-100">

  <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12 text-center md:text-left">

    {/* Marca */}

    <div>

      <h3 className="text-xl tracking-wide mb-4 font-medium">
        Welcome Atelier
      </h3>

      <p className="text-sm text-gray-500 leading-relaxed max-w-sm mx-auto md:mx-0">
        Transformamos momentos especiales en recuerdos
        inolvidables para cada celebración.
      </p>

    </div>

    {/* Servicios */}

    <div>

      <h4 className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-5">
        Servicios
      </h4>

      <ul className="space-y-3 text-sm text-gray-600">

        {services.map((service) => (

          <li key={service.slug}>

            <Link
              href={`/${service.slug}`}
              className="hover:text-[var(--sage)] transition-colors duration-300"
            >
              {service.name}
            </Link>

          </li>

        ))}

      </ul>

    </div>

    {/* Redes */}

    <div>

      <h4 className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-5">
        Síguenos
      </h4>

      <div className="flex justify-center md:justify-start gap-6">

        <a
          href={instagram}
          target="_blank"
          className="hover:-translate-y-1 hover:text-black transition-all duration-300"
        >
          <Instagram size={22} />
        </a>

        <a
          href={facebook}
          target="_blank"
          className="hover:-translate-y-1 hover:text-black transition-all duration-300"
        >
          <Facebook size={22} />
        </a>

      </div>

    </div>

  </div>

  {/* Copyright */}

  <div className="border-t border-gray-100 py-6 text-center">

    <p className="text-xs text-gray-400 tracking-wide">
      © {new Date().getFullYear()} Welcome Atelier. Todos los derechos reservados.
    </p>

  </div>

</footer>

);
}