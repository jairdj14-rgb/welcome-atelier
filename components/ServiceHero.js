"use client";

import Image from "next/image";

export default function ServiceHero({ title, subtitle, image }) {

  return (

    <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center text-center">

     {/* Imagen animada */}

      <div className="absolute inset-0 hero-zoom">

        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
        />

      </div>

      {/* Overlay oscuro */}

      <div className="absolute inset-0 bg-black/50"></div>

       {/* Contenido */}

      <div className="relative text-[var(--ivory)] z-10 max-w-3xl mx-auto px-6">

        <h1 className="text-3xl md:text-5xl font-light mb-6 tracking-wide">
          {title}
        </h1>

        <p className="text-base md:text-lg opacity-90 leading-relaxed">
          {subtitle}
        </p>
        
         {/* Línea decorativa */}
          <div className="w-16 h-[1px] bg-[var(--ivory)]/80 mx-auto mt-6"></div>
        
      </div>

    </section>
  );
}