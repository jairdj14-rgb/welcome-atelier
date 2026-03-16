import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import ProcessSection from "../../components/ProcessSection";
import EditorialGallery from "../../components/EditorialGallery";
import Testimonials from "../../components/Testimonials";
import RevealOnScroll from "../../components/RevealOnScroll";
import { Coffee, Gift } from "lucide-react";

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

export default function WelcomeAtelier() {

  const images = [
  "/gallery/giveaways/1.webp",
  "/gallery/giveaways/2.webp",
  "/gallery/giveaways/3.webp",
  "/gallery/giveaways/4.webp",
  "/gallery/giveaways/5.webp",
  "/gallery/giveaways/6.webp",
  "/gallery/giveaways/7.webp",
  "/gallery/giveaways/8.webp",
  "/gallery/giveaways/9.webp"
    ];

  return (
    <>
      <Navbar />

      <ServiceHero
        title="Welcome Atelier"
        subtitle="Detalles personalizados para cada celebración"
        image="/heroes/atelier.webp"
    />

    <EditorialGallery images={images} />
    
                 {/* SERVICIOS */}

<RevealOnScroll>

<section className="bg-white py-24">

  <div className="max-w-6xl mx-auto px-6 text-center">

    {/* TITULO */}

    <h2 className="text-3xl mb-4">
      Experiencias únicas en cada recuerdo.
    </h2>

    <div className="w-16 h-[2px] bg-[var(--sage)] mx-auto mb-6"></div>

    <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-16">
      Ofrecemos una amplia variedad de recursos personalizados, que pueden adaptarse al estilo y concepto de cada evento. 
      Desde piezas funcionales hasta detalles creativos, cada elemento está pensado para complementar la experiencia de los invitados.

      En Welcome Atelier, creemos que los pequeños detalles son los que hacen que un evento sea verdaderamente inolvidable. 
    </p>

    </div>
    </section>
    </RevealOnScroll>

   {/* TARJETAS SERVICIOS */}

   <RevealOnScroll>

<div className="grid md:grid-cols-2 gap-10 mb-24 text-left">

  <div className="group bg-[var(--cream)] p-8 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
    <Coffee className="mb-4 text-[var(--sage)] transition-colors duration-300 group-hover:text-black" size={26} />
    
    <h3 className="text-lg font-semibold mb-4">
      Entre nuestras opciones de recuerdos memorables encontrarás:
    </h3>

    <ul className="space-y-2 text-gray-600 leading-relaxed">
      <li>- Sombreros personalizados</li>
      <li>- Tazas para café</li>
      <li>- Accesorios y recuerdos diseñados especialmente para cada evento</li>
      <li>- Una gran variedad de artículos personalizados disponibles en nuestro catálogo</li>
    </ul>
  </div>

  <div className="group bg-[var(--cream)] p-8 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
    <Gift className="mb-4 text-[var(--sage)] transition-colors duration-300 group-hover:text-black" size={26} />
    
    <h3 className="text-lg font-semibold mb-4">
      Giveaways ideales para bodas y eventos corporativos. 
    </h3>

    <ul className="space-y-2 text-gray-600 leading-relaxed">
      Donde cada detalle se convierte en una oportunidad para sorprender a los invitados y crear una experiencia memorable.

      Te invitamos a solicitar nuestro catálogo para descubrir la variedad de productos 
      y opciones de personalización que podemos ofrecer para tu evento.
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
        <h3 className="text-lg mb-2">Selección de Productos</h3>
        <p className="text-gray-600 leading-relaxed">
          Revisa nuestro catálogo de giveaways personalizados y elige los artículos que más te gusten. 
          Una vez que tengas una idea de lo que buscas, compártenos la fecha del evento, la cantidad de piezas 
          y la ciudad de entrega, para poder preparar tu propuesta.
        </p>
      </div>

      <div>
        <h3 className="text-lg mb-2">Cotización y Confirmación</h3>
        <p className="text-gray-600 leading-relaxed">
       Nuestro equipo preparará una cotización personalizada de acuerdo con los productos seleccionados 
       y los detalles de tu evento. Una vez aprobada, comenzamos con la producción de tus artículos.
        </p>
      </div>

      <div>
        <h3 className="text-lg mb-2">Entrega de tus Giveaways</h3>
        <p className="text-gray-600 leading-relaxed">
         Recibirás tus artículos listos y cuidadosamente preparados, unos días antes de tu evento, 
         para que puedas entregarlos a tus invitados sin preocupaciones y con la tranquilidad de que cada detalle está listo para sorprender.
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
          href="https://wa.me/5212212136039?text=Hola%20me%20gustaría%20información%20sobre%20Giveaways%20Welcome%20Atelier"
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