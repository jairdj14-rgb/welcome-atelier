import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import ProcessSection from "../../components/ProcessSection";
import EditorialGallery from "../../components/EditorialGallery";
import Testimonials from "../../components/Testimonials";
import RevealOnScroll from "../../components/RevealOnScroll";
import { Heart, Calendar, Sparkles, Users, GlassWater } from "lucide-react";

export const metadata = {
  title: "Atelier | Experiencias y eventos personalizados",
  description:
    "Diseñamos celebraciones únicas: bodas, eventos infantiles, giveaways y experiencias gastronómicas.",
  openGraph: {
    title: "Atelier Eventos",
    description:
      "Celebraciones diseñadas con elegancia y atención a cada detalle.",
    images: ["/heroes/moments.webp"],
  },
};

export default function AlmaMoments() {

  
  const images = [
    "/gallery/moments/1.webp",
    "/gallery/moments/2.webp",
    "/gallery/moments/3.webp",
    "/gallery/moments/4.webp",
    "/gallery/moments/5.webp",
    "/gallery/moments/6.webp"
  ];

  return (
    <>
      <Navbar />

      <ServiceHero
        title="Alma Moments"
        subtitle="Bodas y celebraciones diseñadas con elegancia"
        image="/heroes/moments.webp"
      />

      <EditorialGallery images={images} />

   {/* SERVICIOS */}

<RevealOnScroll>
<section className="bg-white py-24">

  <div className="max-w-6xl mx-auto px-6 text-center">

    {/* TITULO */}

    <h2 className="text-3xl mb-4">
      Experiencias únicas para pedidas de mano y bodas
    </h2>

    <div className="w-16 h-[2px] bg-[var(--sage)] mx-auto mb-6"></div>

    <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-16">
      Ofrecemos experiencias únicas para pedidas de mano, creando el ambiente perfecto
      para uno de los momentos más importantes de su historia. Además acompañamos a
      nuestras parejas en cada etapa de su celebración con diferentes servicios
      de planeación y coordinación.
    </p>

    {/* TARJETAS SERVICIOS */}

    <div className="grid md:grid-cols-2 gap-10 mb-24 text-left">

      <div className="group bg-[var(--cream)] p-8 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <Heart className="mb-4 text-[var(--sage)] transition-colors duration-300 group-hover:text-black" size={26} />
        <h3 className="text-lg mb-2">Planeación completa de boda</h3>
        <p className="text-gray-600 leading-relaxed">
          Diseñamos y organizamos cada aspecto de su celebración, guiándolos
          en todo el proceso para que disfruten el camino hacia su gran día.
        </p>
      </div>

      <div className="group bg-[var(--cream)] p-8 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <Calendar className="mb-4 text-[var(--sage)] transition-colors duration-300 group-hover:text-black" size={26} />
        <h3 className="text-lg mb-2">Media planeación</h3>
        <p className="text-gray-600 leading-relaxed">
          Perfecta para parejas que ya han avanzado en la organización de su boda
          y desean apoyo profesional para perfeccionar cada detalle.
        </p>
      </div>

      <div className="group bg-[var(--cream)] p-8 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <Sparkles className="mb-4 text-[var(--sage)] transition-colors duration-300 group-hover:text-black" size={26} />
        <h3 className="text-lg mb-2">Coordinación del día del evento</h3>
        <p className="text-gray-600 leading-relaxed">
          Nos aseguramos de que todo fluya de manera impecable para que ustedes
          solo se dediquen a vivir y disfrutar su boda.
        </p>
      </div>

      <div className="group bg-[var(--cream)] p-8 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <Users className="mb-4 text-[var(--sage)] transition-colors duration-300 group-hover:text-black" size={26} />
        <h3 className="text-lg mb-2">Ice Breaking & Experiencias</h3>
        <p className="text-gray-600 leading-relaxed">
          Actividades y dinámicas diseñadas para crear conexión entre los invitados
          y enriquecer la experiencia del evento.
        </p>
      </div>

      <div className="group bg-[var(--cream)] p-8 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:col-span-2">
        <GlassWater className="mb-4 text-[var(--sage)] transition-colors duration-300 group-hover:text-black" size={26} />
        <h3 className="text-lg mb-2">Experiencias pre y post boda</h3>
        <p className="text-gray-600 leading-relaxed">
          Como brunch después de la boda, despedidas especiales o encuentros
          íntimos que prolongan la celebración junto a sus seres queridos.
        </p>
      </div>

    </div>

  </div>

</section>
</RevealOnScroll>



{/* PROCESO */}

<RevealOnScroll>
<section className="bg-[var(--cream)] py-24">

  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-3xl mb-4">
      Nuestro proceso
    </h2>

    <div className="w-16 h-[2px] bg-[var(--sage)] mx-auto mb-12"></div>

    <div className="grid md:grid-cols-3 gap-10">

      <div>
        <h3 className="text-lg mb-2">Diseño del evento</h3>
        <p className="text-gray-600 leading-relaxed">
          Todo comienza con la inspiración. Conocemos a la pareja,
          su historia y el estilo que desean transmitir para diseñar
          el concepto completo del evento.
        </p>
      </div>

      <div>
        <h3 className="text-lg mb-2">Planeación</h3>
        <p className="text-gray-600 leading-relaxed">
          Coordinamos proveedores, logística, tiempos y cada detalle
          necesario para que la celebración fluya de forma impecable.
        </p>
      </div>

      <div>
        <h3 className="text-lg mb-2">Ejecución</h3>
        <p className="text-gray-600 leading-relaxed">
          El día del evento supervisamos cada momento para que ustedes
          solo se dediquen a disfrutar su celebración.
        </p>
      </div>

    </div>

  </div>

</section>

</RevealOnScroll>

    <RevealOnScroll>
        <Testimonials />
    </RevealOnScroll>

      {/* CTA */}

      <RevealOnScroll>
        <section className="bg-[var(--sage)] text-[var(--ivory)] py-24">

    <div className="max-w-2xl mx-auto px-6">

    <div className="w-16 h-[1px] bg-white/70 mx-auto mb-6"></div>

    <h2 className="text-3xl mb-6">
      Hablemos de tu evento
    </h2>

    <p className="opacity-90 mb-10 leading-relaxed">
      Cuéntanos tu idea y juntos diseñaremos una experiencia
      única pensada para celebrar momentos inolvidables.
    </p>

    <a
      href="https://wa.me/5212212136039?text=Hola%20me%20gustaría%20información%20sobre%20Alma%20Moments"
      target="_blank"
      className="inline-block bg-white text-[#333] px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition"
    >
      Solicitar información por WhatsApp
    </a>

  </div>

</section>
</RevealOnScroll>

      <Footer />
    </>
  );
}