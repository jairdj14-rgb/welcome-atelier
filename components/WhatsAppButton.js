"use client";

import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function WhatsAppButton() {

  const phone = "5212212136039"; // tu número
  const pathname = usePathname();
   const [showTip, setShowTip] = useState(false);

   useEffect(() => {

    // aparece después de 5s
    const showTimer = setTimeout(() => {
      setShowTip(true);
    }, 5000);

    // desaparece después de 10s
    const hideTimer = setTimeout(() => {
      setShowTip(false);
    }, 15000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };

  }, []);

  let message = "Hola, me gustaría información sobre los servicios de Welcome Atelier.";

  if (pathname.includes("alma-moments")) {
    message = "Hola, me gustaría información sobre Alma Moments.";
  }

  if (pathname.includes("alma-bubble")) {
    message = "Hola, me gustaría información sobre Alma Bubble.";
  }

  if (pathname.includes("giveaways-atelier")) {
    message = "Hola, me gustaría información sobre Giveaways.";
  }

  if (pathname.includes("-con-sentido")) {
  message = "Hola, me gustaría información sobre Bites con sentido.";
  }
  
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (

     <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Mensaje flotante */}

      {showTip && (

        <div
          className="bg-white text-gray-700 px-4 py-2 rounded-xl shadow-md text-sm animate-fadeIn whitespace-nowrap"
          onClick={() => window.open(url, "_blank")}
        >
          ¿Te ayudamos con tu evento?
        </div>

    )}

     {/* Botón */}

    <a
        href={url}
        target="_blank"
        className="bg-[#25D366] text-white
        w-14 h-14 flex items-center justify-center
        rounded-full shadow-lg
        hover:scale-110 transition"
      >
        <MessageCircle size={26} />
        </a>

        </div>

  );

}