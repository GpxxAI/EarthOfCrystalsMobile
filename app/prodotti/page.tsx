import MobileShell from "@/components/MobileShell";
import EmptyState from "@/components/EmptyState";
import { Filter, Plus } from "lucide-react";
import Link from "next/link";

export default function Page(){
  return (
    <MobileShell title="Prodotti">
      <section className="section">
        <div className="flex gap-2">
          <input placeholder="Cerca prodotti..." className="input flex-1" />
          <button className="btn-ghost"><Filter size={16} /> Filtri</button>
          <Link href="/prodotti/nuovo" className="btn"><Plus size={16}/> Nuovo</Link>
        </div>
      </section>
      <section className="section">
        <div className="text-sm text-neutral-500 mb-2">0 prodotti trovati</div>
        <EmptyState title="Nessun prodotto trovato" subtitle="Inizia aggiungendo il tuo primo prodotto" action={<Link href="/prodotti/nuovo" className="btn">Aggiungi Prodotto</Link>} />
      </section>
    </MobileShell>
  )
}
