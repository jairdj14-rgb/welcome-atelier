import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";
import PhotoStrip from "../components/PhotoStrip";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { services } from "../data/services";

export default function Home() {

  return (

    <>
    
      {/* HERO + SERVICIOS */}

      <main className="bg-[var(--cream)]">

        <Navbar />

        {/* HERO */}

        <section
          className="relative h-screen bg-cover bg-center flex items-center justify-center text-center px-6"
          style={{ backgroundImage: "url('/portada.jpeg')" }}
        >

          {/* overlay */}

          <div className="absolute inset-0 bg-black/55"></div>

          {/* contenido */}

          <div className="relative text-[var(--ivory)] max-w-2xl">

            <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide drop-shadow-lg">
              Welcome Atelier
            </h1>

            <p className="text-lg md:text-xl opacity-90 drop-shadow-md mb-6">
              Experiencias que celebran cada momento
            </p>
            <div className="mt-10 animate-bounce text-[var(--ivory)] text-2xl">
              ↓
            </div>

          </div>

        </section>


        {/* SERVICIOS */}

        <section id="servicios" className="-mt-55 relative z-10">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 max-w-6xl mx-auto">

             {services.map((service) => (

              <ServiceCard
              key={service.slug}
              href={`/${service.slug}`}
              title={service.name}
              description={service.description}
               />

            ))}

        </div>

        </section>

      </main>


      {/* GALERIA FULL WIDTH */}

      <PhotoStrip />


      {/* OTRA SECCION OPCIONAL */}

     <section className="bg-[var(--cream)] pt-0 pb-24">

  <div className="max-w-3xl mx-auto px-6 text-center">

    {/* línea decorativa */}
    <div className="w-16 h-[2px] bg-[var(--sage)] mx-auto mb-6"></div>

    {/* título */}
    <h2 className="text-3xl md:text-4xl tracking-wide font-light mb-6">
      Diseñamos experiencias únicas
    </h2>

    {/* texto */}
    <p className="text-[#3a3a3a]/75 leading-relaxed">
      En Welcome Atelier creemos que cada celebración merece ser especial. 
      Diseñamos momentos pensados en cada detalle para que tu evento
      se convierta en un recuerdo inolvidable.
    </p>

  </div>

</section>

<div className="flex items-center justify-center py-12 bg-[var(--cream)]">
  <div className="w-12 h-[2px] bg-[var(--sage)]/70"></div>
  <div className="w-2 h-2 bg-[var(--sage)] rounded-full mx-3"></div>
  <div className="w-12 h-[2px] bg-[var(--sage)]/70"></div>
</div>

<section className="bg-white py-24">

  <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    {/* FOTO */}

   <div className="flex justify-center">

  <div className="relative w-[320px]">

    {/* marco */}

    <div className="absolute inset-0 bg-[var(--sage)]/60 rounded-xl"></div>

    {/* foto */}

    <img
      src="/about.webp"
      alt="Fundadora Atelier"
      className="relative translate-x-4 translate-y-4 rounded-xl shadow-lg object-cover w-[320px] transition duration-500 hover:scale-[1.03]"
    />

  </div>

</div>

    {/* TEXTO */}

    <div>

      <div className="w-16 h-[2px] bg-[var(--sage)] mb-6"></div>

      <h2 className="text-3xl mb-6">
        Quién está detrás de Welcome Atelier
      </h2>

      <p className="text-[#3a3a3a]/75 leading-relaxed mb-4">
        Soy Camila Obando, y mi pasión es diseñar experiencias que se
        convierten en recuerdos inolvidables.
      </p>

      <p className="text-[#3a3a3a]/75 leading-relaxed">
        Cada evento que creamos está pensado con atención a los
        detalles para transformar momentos especiales en
        celebraciones únicas.
      </p>
      <div className="mt-8">

  <p className="text-lg italic text-[#3a3a3a]">
    — Camila Obando
  </p>

  <p className="text-sm text-[#3a3a3a]/60">
    Fundadora de Welcome Atelier
  </p>

</div>

    </div>

  </div>

</section>

<div className="w-16 h-[2px] bg-white/60 mx-auto mb-6"></div>

<section className="bg-[var(--sage)] text-[var(--ivory)] py-24 text-center">

  <div className="max-w-2xl mx-auto px-6">

    <h2 className="text-3xl md:text-4xl mb-6 tracking-wide">
      Hablemos de tu evento
    </h2>

    <p className="opacity-90 mb-10 leading-relaxed">
      Cuéntanos tu idea y juntos diseñaremos una experiencia
      única pensada para celebrar momentos inolvidables.
    </p>

    <a
      href="https://wa.me/5212212136039"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white text-[#3a3a3a] px-8 py-3 rounded-full
      shadow-lg hover:scale-105 hover:shadow-xl transition inline-block"
    >
      Escribir por WhatsApp
    </a>

  </div>

</section>



<Footer />

<WhatsAppButton />

    </>

  );

}