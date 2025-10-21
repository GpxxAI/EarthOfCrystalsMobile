import MobileShell from "@/components/MobileShell";
import StatCard from "@/components/StatCard";

export default function Page(){
  return (
    <MobileShell title="Analytics">
      <section className="section grid grid-cols-2 gap-3">
        <StatCard title="Prodotti Totali" value="0" />
        <StatCard title="Valore Totale" value="€0" />
        <StatCard title="Disponibili" value="0" />
        <StatCard title="Categorie Usate" value="0" />
      </section>
      <section className="section">
        <div className="card p-8 text-center">
          <div className="text-5xl mb-3">📉</div>
          <div className="font-medium">Nessun dato disponibile</div>
          <div className="text-sm text-neutral-500">Aggiungi alcuni prodotti per vedere le statistiche</div>
        </div>
      </section>
    </MobileShell>
  )
}
