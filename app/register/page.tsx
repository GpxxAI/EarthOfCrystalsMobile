"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    const { data, error } = await supabase.auth.signUp({
      email, password,
      options: { data: { username } }
    });
    if (error) return setErr(error.message);
    // opzionale: se hai email confirmation attiva, avvisa l'utente
    // altrimenti loggalo e redirect:
    if (data.user) router.replace("/");
  };

  return (
    <main className="p-6 max-w-sm mx-auto">
      <h1 className="text-2xl font-bold mb-2">Registrati</h1>
      <p className="text-sm text-neutral-600 mb-4">Crea un account per usare l’app</p>
      <form onSubmit={onSubmit} className="grid gap-3">
        <input className="input" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} required />
        <input className="input" type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        <input className="input" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
        {err && <div className="text-sm text-red-600">{err}</div>}
        <button className="btn">Crea Account</button>
      </form>
      <p className="text-sm mt-4">Hai già un account? <Link className="underline" href="/login">Accedi</Link></p>
    </main>
  );
}
