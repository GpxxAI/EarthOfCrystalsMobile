export default function StatCard({ title, value, icon }: { title: string, value: string, icon?: React.ReactNode }){
  return (
    <div className="kpi">
      <div className="flex items-center gap-2 text-neutral-600">{icon}{title}</div>
      <div className="text-xl font-semibold">{value}</div>
    </div>
  )
}
