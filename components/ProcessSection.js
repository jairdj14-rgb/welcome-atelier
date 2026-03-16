export default function ProcessSection({ steps }) {
  return (

    <section className="py-24 bg-white">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl mb-12">
          Nuestro proceso
        </h2>

        <div className="grid md:grid-cols-3 gap-12">

          {steps.map((step, index) => (

            <div key={index}>

              <h3 className="text-lg mb-2">
                {step.title}
              </h3>

              <p className="text-[#3a3a3a]/70">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}