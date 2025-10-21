"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const sp = useSearchParams();
  const redirect = sp.get("redirect") || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null); setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) return setErr(error.message);
    router.replace(redirect);
  };

  return (
    <main className="p-6 max-w-sm mx-auto">
      <h1 className="text-2xl font-bold mb-2">Accedi</h1>
      <p className="text-sm text-neutral-600 mb-4">Inserisci email e password</p>
      <form onSubmit={onSubmit} className="grid gap-3">
        <input className="input" type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        <input className="input" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
        {err && <div className="text-sm text-red-600">{err}</div>}
        <button disabled={loading} className="btn">{loading ? "..." : "Entra"}</button>
      </form>
      <p className="text-sm mt-4">Nuovo utente? <Link className="underline" href="/register">Registrati</Link></p>
    </main>
  );
}
