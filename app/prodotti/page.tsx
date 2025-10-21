"use client";
import MobileShell from "@/components/MobileShell";
import Link from "next/link";
import { useState } from "react";

export default function ProdottiPage() {
  const [items] = useState([
    { id: 1, name: "Quarzo Rosa", category: "Cristallo", price: 29, available: true },
    { id: 2, name: "Ametista", category: "Cristallo", price: 34, available: true },
  ]);

  return (
    <MobileShell title="Prodotti">
      <section className="section">
        <div className="flex gap-2">
          <input placeholder="Cerca prodotti..." className="input flex-1" />
          <Link href="/prodotti/nuovo" className="btn">Nuovo</Link>
        </div>
      </section>
      <section className="section">
        <div className="text-sm text-neutral-500 mb-2">{items.length} prodotti</div>
        <div className="grid gap-3">
          {items.map((p) => (
            <div key={p.id} className="card p-4 flex items-center justify-between">
              <div>
                <div className="font-medium">{p.name}</div>
                <div className="text-xs text-neutral-600">
                  {p.category} · {p.available ? "Disponibile" : "Non disponibile"}
                </div>
              </div>
              <div className="text-sm font-semibold">€{p.price}</div>
            </div>
          ))}
        </div>
      </section>
    </MobileShell>
  );
}
