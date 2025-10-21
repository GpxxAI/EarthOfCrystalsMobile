'use client';
import { Pencil, Trash2 } from 'lucide-react';

const seed = [
  { name: "Gemme Preziose", color: "#C9A227" },
  { name: "Gemme Semipreziose", color: "#4A3324" },
  { name: "Geodi", color: "#6F7D8C" },
  { name: "Fossili", color: "#8C6F6F" },
  { name: "Meteoriti", color: "#3B3B3B" },
  { name: "Punte di Quarzo", color: "#9FB3C8" },
  { name: "Agate", color: "#B26F4D" },
];

export default function CategoryList(){
  return (
    <div className="grid gap-3">
      {seed.map((c, i) => (
        <div key={i} className="card p-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full" style={{ background: c.color }} />
            <div>
              <div className="font-medium">{c.name}</div>
              <div className="text-xs text-neutral-500">0 prodotti</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="btn-ghost"><Pencil size={16} /></button>
            <button className="btn-ghost"><Trash2 size={16} /></button>
          </div>
        </div>
      ))}
    </div>
  )
}
