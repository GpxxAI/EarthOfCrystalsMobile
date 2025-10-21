import MobileShell from "@/components/MobileShell";
import { supabaseServer } from "@/lib/supabaseServer";
import Link from "next/link";

export default async function Page(){
  const supabase = supabaseServer();
  const { data: products } = await supabase.from("products").select("*").order("created_at", { ascending: false });

  return (
    <MobileShell title="Prodotti">
      <section className="section">
        <div className="flex gap-2">
          <input placeholder="Cerca prodotti..." className="input flex-1" />
          <Link href="/prodotti/nuovo" className="btn">Nuovo</Link>
        </div>
      </section>
      <section className="section">
        <div className="text-sm text-neutral-500 mb-2">{products?.length ?? 0} prodotti trovati</div>
        {!products || products.length === 0 ? (
          <div className="card p-8 text-center">
            <div className="text-5xl mb-3">📦</div>
            <div className="font-medium">Nessun prodotto trovato</div>
            <div className="text-sm text-neutral-500">Aggiungi il primo prodotto</div>
            <div className="mt-4"><Link href="/prodotti/nuovo" className="btn">Aggiungi Prodotto</Link></div>
          </div>
        ) : (
          <div className="grid gap-3">
            {products.map((p:any) => (
              <div key={p.id} className="card p-4 flex items-center justify-between">
                <div>
                  <div className="font-medium">{p.name}</div>
                  <div className="text-xs text-neutral-600">{p.category} · {p.available ? "Disponibile" : "Non disponibile"}</div>
                </div>
                <div className="text-sm font-semibold">€{p.price}</div>
              </div>
            ))}
          </div>
        )}
      </section>
    </MobileShell>
  )
}
