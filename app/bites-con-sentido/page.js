import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import ProcessSection from "../../components/ProcessSection";
import EditorialGallery from "../../components/EditorialGallery";
import Testimonials from "../../components/Testimonials";
import RevealOnScroll from "../../components/RevealOnScroll";
import { Sandwich, Table } from "lucide-react";

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

export default function BitesSentido() {

  const images = [
  "/gallery/bites/1a.webp",
  "/gallery/bites/2.webp",
  "/gallery/bites/3.webp",
  "/gallery/bites/4.webp",
  "/gallery/bites/5a.webp",
  "/gallery/bites/6.webp"
];

  return (
    <>
      <Navbar />

      <ServiceHero
        title="Bites Con Sentido"
        subtitle="Sabores diseñados para acompañar tus eventos"
        image="/heroes/bites1.webp"
    />

     <EditorialGallery images={images} />
     
          
            {/* SERVICIOS */}

<RevealOnScroll>

<section className="bg-white py-24">

  <div className="max-w-6xl mx-auto px-6 text-center">

    {/* TITULO */}

    <h2 className="text-3xl mb-4">
      Experiencias únicas en cada bocado.
    </h2>

    <div className="w-16 h-[2px] bg-[var(--sage)] mx-auto mb-6"></div>

    <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-16">
      Nuestro concepto se centra en ofrecer opciones frescas, 
      versátiles y visualmente atractivas, perfectas para compartir y disfrutar durante el evento.
    </p>

    </div>
    </section>
    </RevealOnScroll>

   {/* TARJETAS SERVICIOS */}

   <RevealOnScroll>

<div className="grid md:grid-cols-2 gap-10 mb-24 text-left">

  <div className="group bg-[var(--cream)] p-8 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
    <Sandwich className="mb-4 text-[var(--sage)] transition-colors duration-300 group-hover:text-black" size={26} />
    
    <h3 className="text-lg font-semibold mb-4">
      Entre nuestras opciones de catering se encuentran:
    </h3>

    <ul className="space-y-2 text-gray-600 leading-relaxed">
      <li>- Canapés elegantes y creativos</li>
      <li>- Crudités con presentaciones frescas y coloridas</li>
      <li>- Tablas de quesos y charcutería cuidadosamente seleccionadas</li>
      <li>- Estaciones y bocados gourmet ideales para eventos sociales o corporativos</li>
    </ul>
  </div>

  <div className="group bg-[var(--cream)] p-8 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
    <Table className="mb-4 text-[var(--sage)] transition-colors duration-300 group-hover:text-black" size={26} />
    
    <h3 className="text-lg font-semibold mb-4">
      Contamos con carritos de snacks. 
    </h3>

    <ul className="space-y-2 text-gray-600 leading-relaxed">
      Una opción divertida y dinámica que se convierte
      en un punto especial dentro del evento. Ofrecemos alternativas tanto para 
      adultos como para los más pequeños, adaptando cada experiencia al estilo de la celebración.
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
        <h3 className="text-lg mb-2">Selección del Menú</h3>
        <p className="text-gray-600 leading-relaxed">
          Te compartimos nuestro catálogo de opciones gastronómicas, donde podrás elegir entre canapés, 
          crudités, tablas de quesos, estaciones y carritos de snacks. 
          De acuerdo con tu evento, podrás seleccionar las opciones que mejor se adapten a tu celebración.
        </p>
      </div>

      <div>
        <h3 className="text-lg mb-2">Cotización y Confirmación</h3>
        <p className="text-gray-600 leading-relaxed">
        Con base en las selecciones realizadas, el número de invitados y la fecha del evento, 
        nuestro equipo prepara una cotización personalizada. Una vez aprobada, 
        comenzamos con la planificación y preparación del servicio.
        </p>
      </div>

      <div>
        <h3 className="text-lg mb-2">Montaje el Día del Evento</h3>
        <p className="text-gray-600 leading-relaxed">
          El día de la celebración nuestro equipo se encarga de llegar al lugar del evento, 
          realizar el montaje de las estaciones y dejar todo listo, 
          asegurando una presentación impecable para que tú y tus invitados disfruten de la experiencia gastronómica.
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
           href="https://wa.me/5212212136039?text=Hola%20me%20gustaría%20información%20sobre%20Bites%20con%20Sentido"
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