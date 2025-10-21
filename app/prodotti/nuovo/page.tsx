"use client";
import MobileShell from "@/components/MobileShell";
import { useState } from "react";

export default function NuovoProdottoPage() {
  const [form, setForm] = useState({ name: "", category: "", price: "", desc: "", available: true });
  const [msg, setMsg] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMsg(`Prodotto "${form.name}" aggiunto localmente.`);
  };

  return (
    <MobileShell title="Nuovo Prodotto">
      <form onSubmit={onSubmit} className="section grid gap-3">
        <input className="input" placeholder="Nome prodotto" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})}/>
        <input className="input" placeholder="Categoria" value={form.category} onChange={(e)=>setForm({...form,category:e.target.value})}/>
        <input className="input" type="number" placeholder="Prezzo (€)" value={form.price} onChange={(e)=>setForm({...form,price:e.target.value})}/>
        <textarea className="input h-28" placeholder="Descrizione" value={form.desc} onChange={(e)=>setForm({...form,desc:e.target.value})}/>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={form.available} onChange={(e)=>setForm({...form,available:e.target.checked})}/>
          Disponibile
        </label>
        <button className="btn">Salva</button>
        {msg && <div className="text-sm text-green-600">{msg}</div>}
      </form>
    </MobileShell>
  );
}
