"use client";

import { useEffect, useState } from "react";

export default function Loader() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);

  }, []);

  if (!loading) return null;

  return (

    <div className="fixed inset-0 bg-[var(--cream)] flex items-center justify-center z-[100]">

      <h1 className="text-3xl tracking-widest text-[var(--sage)] animate-pulse">
        WELCOME ATELIER
      </h1>

    </div>

  );

}