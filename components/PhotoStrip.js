import Image from "next/image";

export default function PhotoStrip() {

  const images = [
    "/gallery/bites1.webp",
    "/gallery/1.webp",
    "/gallery/2.webp",
    "/gallery/3.webp", 
    "/gallery/bites2.webp",
    "/gallery/4.webp",
    "/gallery/5.webp",
    "/gallery/bites3.webp",
    "/gallery/6.webp",
  ];

  return (

    <section className="py-20 bg-[var(--cream)] overflow-hidden">

      {/* TITULO */}
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl tracking-wide">
          Momentos que cuentan historias
        </h2>
      </div>

      {/* CONTENEDOR FULL WIDTH */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden group">

        {/* FADE IZQUIERDA */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[var(--cream)] to-transparent z-10" />

        {/* FADE DERECHA */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[var(--cream)] to-transparent z-10" />

        {/* CINTA */}
        <div className="flex gap-6 animate-scroll photo-strip px-6">

          {[...images, ...images].map((src, i) => (

            <div
              key={i}
              className="min-w-[320px] rounded-xl overflow-hidden shadow-md"
            >

              <Image
                src={src}
                alt="Evento Atelier"
                width={400}
                height={500}
                className="object-cover w-full h-[360px]"
              />

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}