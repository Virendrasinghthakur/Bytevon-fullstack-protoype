import { useState } from 'react'
import { departments } from '../data/mock'

export default function DepartmentPicker({ open, onClose, onSelect, selectedId }) {
  const [query, setQuery] = useState('')
  if (!open) return null
  const filtered = departments.filter(
    (d) => d.name.toLowerCase().includes(query.toLowerCase()) || d.code.toLowerCase().includes(query.toLowerCase())
  )
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/40" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <h2 className="text-lg font-semibold text-slate-900">Select department</h2>
          <button type="button" onClick={onClose} className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="px-5 py-3">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
            <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search departments…" className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20" autoFocus />
          </div>
        </div>
        <ul className="max-h-72 overflow-y-auto px-2 pb-3">
          {filtered.map((d) => {
            const selected = d.id === selectedId
            return (
              <li key={d.id}>
                <button type="button" onClick={() => { onSelect?.(d); onClose?.() }} className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${selected ? 'bg-sky-50 ring-1 ring-sky-200' : 'hover:bg-slate-50'}`}>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white" style={{ backgroundColor: d.color }}>{d.code.slice(0, 2)}</div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-medium text-slate-900">{d.name}</div>
                    <div className="truncate text-xs text-slate-500">{d.code} · {d.head} · {d.staffCount} staff</div>
                  </div>
                  {selected && <span className="material-symbols-outlined text-sky-600 text-xl">check_circle</span>}
                </button>
              </li>
            )
          })}
          {filtered.length === 0 && <li className="px-3 py-8 text-center text-sm text-slate-500">No departments match “{query}”</li>}
        </ul>
        <div className="border-t border-slate-100 px-5 py-3 flex justify-end">
          <button type="button" onClick={onClose} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">Cancel</button>
        </div>
      </div>
    </div>
  )
}
