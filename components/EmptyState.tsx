export default function EmptyState({ title, subtitle, action }: { title: string, subtitle?: string, action?: React.ReactNode }){
  return (
    <div className="card p-8 text-center">
      <div className="text-5xl mb-3">📦</div>
      <div className="font-medium">{title}</div>
      {subtitle && <div className="text-sm text-neutral-500">{subtitle}</div>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  )
}
