import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import ProcessSection from "../../components/ProcessSection";
import EditorialGallery from "../../components/EditorialGallery";
import Testimonials from "../../components/Testimonials";
import RevealOnScroll from "../../components/RevealOnScroll";
import { PartyPopperIcon, Package } from "lucide-react";

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

export default function AlmaBubble() {

  const images = [
  "/gallery/bubble/1.webp",
  "/gallery/bubble/2.webp",
  "/gallery/bubble/3.webp",
  "/gallery/bubble/4.webp",
  "/gallery/bubble/7.webp",
  "/gallery/bubble/5.webp"
];

  return (
    <>
      <Navbar />

      <ServiceHero
        title="Alma Bubble"
        subtitle="Eventos infantiles llenos de diversión"
        image="/heroes/bubble1.webp"
        
    />
    <EditorialGallery images={images} />
   
        {/* SERVICIOS */}

<RevealOnScroll>

<section className="bg-white py-24">

  <div className="max-w-6xl mx-auto px-6 text-center">

    {/* TITULO */}

    <h2 className="text-3xl mb-4">
      Experiencias únicas para eventos infantiles
    </h2>

    <div className="w-16 h-[2px] bg-[var(--sage)] mx-auto mb-6"></div>

    <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-16">
      Ofrecemos planificación completa para eventos infantiles, acompañándote desde la idea inicial 
      hasta la ejecución del evento, para que puedas disfrutar cada momento sin preocupaciones.
    </p>

    </div>
    </section>
    </RevealOnScroll>

   {/* TARJETAS SERVICIOS */}

   <RevealOnScroll>

<div className="grid md:grid-cols-2 gap-10 mb-24 text-left">

  <div className="group bg-[var(--cream)] p-8 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
    <PartyPopperIcon className="mb-4 text-[var(--sage)] transition-colors duration-300 group-hover:text-black" size={26} />
    
    <h3 className="text-lg font-semibold mb-4">
      Diseñamos celebraciones como:
    </h3>

    <ul className="space-y-2 text-gray-600 leading-relaxed">
      <li>🎈 Cumpleaños infantiles</li>
      <li>🎀 Revelaciones de género</li>
      <li>🍼 Baby showers</li>
      <li>🎉 Eventos especiales para niños</li>
    </ul>
  </div>

  <div className="group bg-[var(--cream)] p-8 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
    <Package className="mb-4 text-[var(--sage)] transition-colors duration-300 group-hover:text-black" size={26} />
    
    <h3 className="text-lg font-semibold mb-4">
      Contamos con paquetes personalizados que incluyen:
    </h3>

    <ul className="space-y-3 text-gray-600 leading-relaxed">
      <li>✨ Mamparas tematizadas diseñadas para cada celebración</li>
      <li>✨ Bubble House, experiencia divertida e interactiva</li>
      <li>✨ Decoración creativa según la temática elegida</li>
    </ul>

  </div>

</div>
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
        <h3 className="text-lg mb-2">Concepto y Diseño</h3>
        <p className="text-gray-600 leading-relaxed">
          Todo comienza con la idea. En esta primera etapa conocemos lo que imaginan para la celebración. 
          Pueden elegir uno de nuestros paquetes diseñados o bien crear junto a nosotros 
          un concepto completamente personalizado desde cero, adaptado a la temática, el espacio 
          y la experiencia que desean para su evento.
        </p>
      </div>

      <div>
        <h3 className="text-lg mb-2">Planeación y Logística</h3>
        <p className="text-gray-600 leading-relaxed">
         Una vez definido el concepto, comenzamos con la planificación del evento. 
         Coordinamos la logística, los proveedores, la decoración, las mamparas tematizadas, 
         la Bubble House y todos los elementos que formarán parte de la celebración, 
         asegurando que cada detalle esté perfectamente organizado.
        </p>
      </div>

      <div>
        <h3 className="text-lg mb-2">Detalles Finales y Ejecución</h3>
        <p className="text-gray-600 leading-relaxed">
          En la etapa final revisamos los últimos detalles y llevamos todo a la realidad el día del evento. 
          Nuestro equipo se encarga del montaje, supervisión y coordinación para que la celebración 
          se desarrolle de manera impecable y ustedes puedan disfrutar cada momento.
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
         href="https://wa.me/5212212136039?text=Hola%20me%20gustaría%20información%20sobre%20Alma%20Bubble"
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