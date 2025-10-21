import MobileShell from "@/components/MobileShell";
import CategoryList from "@/components/CategoryList";

export default function Page(){
  return (
    <MobileShell title="Impostazioni">
      <section className="section">
        <div className="card p-4">
          <div className="font-semibold">Earth of Crystals Admin</div>
          <div className="grid grid-cols-2 gap-2 text-sm text-neutral-600 mt-2">
            <div>Versione: <b>1.0.0</b></div>
            <div>Prodotti: <b>0</b></div>
            <div>Categorie: <b>7</b></div>
            <div>Ultimo aggiornamento: <b>21/10/2025</b></div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="mb-2 font-semibold">Gestione Categorie</div>
        <div className="grid gap-3">
          <div className="flex gap-2">
            <input placeholder="Nome categoria" className="input" />
            <input type="color" className="w-12 h-10 rounded-xl border border-black/10" defaultValue="#C9A227" />
            <button className="btn">+</button>
          </div>
          <CategoryList />
        </div>
      </section>
    </MobileShell>
  )
}
