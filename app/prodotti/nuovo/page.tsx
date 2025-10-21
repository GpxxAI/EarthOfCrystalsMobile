"use client";
import MobileShell from "@/components/MobileShell";
import Guard from "@/components/Guard";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function NuovoProdottoPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number | "">("");
  const [available, setAvailable] = useState(true);
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null); setOk(null);
    if (!name) return setErr("Nome richiesto");
    const { error } = await supabase.from("products").insert({
      name,
      price: price === "" ? 0 : Number(price),
      available,
      category,
      description: desc
    });
    if (error) return setErr(error.message);
    setOk("Prodotto aggiunto!");
    setTimeout(() => router.push("/prodotti"), 500);
  };

  return (
    <Guard>
      <MobileShell title="Nuovo Prodotto">
        <form onSubmit={onSubmit} className="section grid gap-3">
          <input className="input" placeholder="Nome prodotto" value={name} onChange={(e)=>setName(e.target.value)} />
          <input className="input" placeholder="Categoria (es. Gemme Preziose)" value={category} onChange={(e)=>setCategory(e.target.value)} />
          <input className="input" type="number" placeholder="Prezzo (€)" value={price} onChange={(e)=>setPrice(e.target.value === "" ? "" : Number(e.target.value))} />
          <textarea className="input h-28" placeholder="Descrizione" value={desc} onChange={(e)=>setDesc(e.target.value)} />
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={available} onChange={(e)=>setAvailable(e.target.checked)} />
            Disponibile
          </label>
          {err && <div className="text-sm text-red-600">{err}</div>}
          {ok && <div className="text-sm text-green-600">{ok}</div>}
          <button className="btn">Salva</button>
        </form>
      </MobileShell>
    </Guard>
  );
}
