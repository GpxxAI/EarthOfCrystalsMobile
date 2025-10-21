import MobileShell from "@/components/MobileShell";
import StatCard from "@/components/StatCard";
import EmptyState from "@/components/EmptyState";
import Link from "next/link";
import { Box, Eye, DollarSign, TrendingUp, Plus } from "lucide-react";

export default function Page(){
  return (
    <MobileShell title="Dashboard">
      <section className="section">
        <h1 className="text-2xl font-bold">Benvenuto in Earth of Crystals</h1>
        <p className="text-neutral-600">Gestisci il tuo catalogo di gemme e cristalli</p>
      </section>
      <section className="section grid grid-cols-2 gap-3">
        <StatCard title="Prodotti" value="0" icon={<Box size={16} />} />
        <StatCard title="Disponibili" value="0" icon={<Eye size={16} />} />
        <StatCard title="Valore Tot." value="€0" icon={<DollarSign size={16} />} />
        <StatCard title="Categorie" value="0" icon={<TrendingUp size={16} />} />
      </section>
      <section className="section">
        <h2 className="font-semibold mb-2">Azioni Rapide</h2>
        <div className="grid gap-3">
          <Link href="/prodotti/nuovo" className="btn"><Plus size={16}/> Aggiungi Prodotto</Link>
          <Link href="/prodotti" className="btn-ghost">Gestisci Prodotti</Link>
          <Link href="/analytics" className="btn-ghost">Vedi Analytics</Link>
        </div>
      </section>
      <section className="section">
        <EmptyState
          title="Nessun prodotto ancora"
          subtitle="Inizia aggiungendo il tuo primo prodotto al catalogo"
          action={<Link href="/prodotti/nuovo" className="btn"><Plus size={16}/> Aggiungi Primo Prodotto</Link>}
        />
      </section>
    </MobileShell>
  )
}
