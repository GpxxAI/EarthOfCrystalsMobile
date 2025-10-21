"use client";
import MobileShell from "@/components/MobileShell";
import Guard from "@/components/Guard";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Product = {
  id: string;
  name: string;
  category: string | null;
  price: number | null;
  available: boolean | null;
  created_at: string;
  description: string | null;
};

export default function Page(){
  const [items, setItems] = useState<Product[] | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });
      setItems(data as Product[] | null);
    })();
  }, []);

  return (
    <Guard>
      <MobileShell title="Prodotti">
        <section className="section">
          <div className="flex gap-2">
            <input placeholder="Cerca prodotti..." className="input flex-1" />
            <Link href="/prodotti/nuovo" className="btn">Nuovo</Link>
          </div>
        </section>
        <section className="section">
          <div className="text-sm text-neutral-500 mb-2">{items?.length ?? 0} prodotti trovati</div>
          {!items || items.length === 0 ? (
            <div className="card p-8 text-center">
              <div className="text-5xl mb-3">📦</div>
              <div className="font-medium">Nessun prodotto trovato</div>
              <div className="text-sm text-neutral-500">Aggiungi il primo prodotto</div>
              <div className="mt-4"><Link href="/prodotti/nuovo" className="btn">Aggiungi Prodotto</Link></div>
            </div>
          ) : (
            <div className="grid gap-3">
              {items.map((p) => (
                <div key={p.id} className="card p-4 flex items-center justify-between">
                  <div>
                    <div className="font-medium">{p.name}</div>
                    <div className="text-xs text-neutral-600">
                      {p.category ?? "—"} · {p.available ? "Disponibile" : "Non disponibile"}
                    </div>
                  </div>
                  <div className="text-sm font-semibold">€{p.price ?? 0}</div>
                </div>
              ))}
            </div>
          )}
        </section>
      </MobileShell>
    </Guard>
  );
}
