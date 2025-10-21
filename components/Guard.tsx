"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

/**
 * Protegge una pagina: se non c'è sessione → redirect a /login.
 * Mostra un mini stato di caricamento per evitare flash non autenticati.
 */
export default function Guard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.replace("/login");
      } else {
        if (mounted) setReady(true);
      }
    })();
    return () => { mounted = false; };
  }, [router]);

  if (!ready) {
    return <div className="p-6 text-sm text-neutral-500">Verifica accesso…</div>;
  }

  return <>{children}</>;
}
