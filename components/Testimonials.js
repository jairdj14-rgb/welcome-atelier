export default function Testimonials() {

  const testimonials = [
    {
      name: "María G.",
      text: "El evento fue increíble, cuidaron cada detalle."
    },
    {
      name: "Carlos R.",
      text: "Superó todas nuestras expectativas, totalmente recomendado."
    },
    {
      name: "Fernanda L.",
      text: "Una experiencia hermosa y muy profesional."
    }
  ];

  return (

    <section className="bg-white py-24">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl mb-12">
          Lo que dicen nuestros clientes
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {testimonials.map((t, i) => (

            <div
              key={i}
              className="bg-[var(--cream)] p-8 rounded-xl shadow-sm"
            >

              <p className="text-gray-600 mb-6 italic">
                “{t.text}”
              </p>

              <p className="font-semibold text-[var(--sage)]">
                — {t.name}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}