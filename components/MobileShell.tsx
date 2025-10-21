'use client';
import { useState } from 'react';
import { Menu, Home, Boxes, BarChart3, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { href: "/", label: "Home", icon: Home },
  { href: "/prodotti", label: "Prodotti", icon: Boxes },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/impostazioni", label: "Impostazioni", icon: Settings },
];

export default function MobileShell({ title, children }: { title: string, children: React.ReactNode }){
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-[100svh] pb-16">
      <div className="navbar">
        <div className="flex items-center justify-between px-4 h-12">
          <button onClick={() => setOpen(!open)} className="btn-ghost"><Menu size={18} /></button>
          <div className="font-semibold">{title}</div>
          <div className="w-8" />
        </div>
        {open && (
          <div className="px-4 pb-2 text-sm">
            <div className="font-semibold text-brand-700">Earth of Crystals</div>
            <div className="text-neutral-500 text-xs mb-2">Admin Mobile</div>
            <nav className="grid gap-2 pb-2">
              {tabs.map(t => (
                <Link key={t.href} href={t.href} onClick={() => setOpen(false)} className="btn-ghost justify-between">
                  <span>{t.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
      <main>{children}</main>
      <nav className="bottom-tabs flex">
        {tabs.map(t => {
          const Icon = t.icon;
          const active = pathname === t.href;
          return (
            <Link key={t.href} href={t.href} className="tab-btn" aria-current={active ? 'page' : undefined}>
              <Icon size={18} />
              <span>{t.label}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
