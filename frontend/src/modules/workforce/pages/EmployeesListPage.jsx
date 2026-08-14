import { useState, useMemo } from 'react'
import { Link } from '@tanstack/react-router'
import { employees } from '../data/mock'

const statusColor = {
  Confirmed: 'bg-emerald-100 text-emerald-800',
  Onboarding: 'bg-sky-100 text-sky-800',
  Probation: 'bg-amber-100 text-amber-800',
  Inactive: 'bg-slate-100 text-slate-600',
}

export default function EmployeesListPage() {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(new Set())
  const [statusFilter, setStatusFilter] = useState('all')
  const filtered = useMemo(() => employees.filter((e) => {
    const matchQ = !query || e.name.toLowerCase().includes(query.toLowerCase()) || e.email.toLowerCase().includes(query.toLowerCase()) || e.role.toLowerCase().includes(query.toLowerCase())
    const matchS = statusFilter === 'all' || e.status === statusFilter
    return matchQ && matchS
  }), [query, statusFilter])
  const toggle = (id) => setSelected((prev) => { const next = new Set(prev); if (next.has(id)) next.delete(id); else next.add(id); return next })
  const toggleAll = () => { if (selected.size === filtered.length) setSelected(new Set()); else setSelected(new Set(filtered.map((e) => e.id))) }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-xl font-semibold text-slate-900">Employee Management</h1>
            <p className="text-sm text-slate-500">{employees.length} people across the organisation</p>
          </div>
          <Link to="/workforce/employees/new" className="inline-flex items-center gap-1.5 rounded-lg bg-sky-600 px-3 py-2 text-sm font-medium text-white hover:bg-sky-700">
            <span className="material-symbols-outlined text-base">person_add</span>
            Add employee
          </Link>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <div className="relative flex-1 min-w-[200px]">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search name, email, role…" className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-10 pr-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20" />
          </div>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm">
            <option value="all">All statuses</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Onboarding">Onboarding</option>
            <option value="Probation">Probation</option>
          </select>
        </div>
      </div>
      {selected.size > 0 && (
        <div className="sticky top-0 z-10 border-b border-sky-200 bg-sky-50 px-6 py-2 flex items-center gap-3">
          <span className="text-sm font-medium text-sky-800">{selected.size} selected</span>
          <button type="button" className="text-sm text-sky-700 hover:underline">Archive</button>
          <button type="button" className="text-sm text-sky-700 hover:underline">Export</button>
          <button type="button" className="text-sm text-sky-700 hover:underline" onClick={() => setSelected(new Set())}>Clear</button>
        </div>
      )}
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-100 bg-slate-50 text-xs uppercase text-slate-500">
              <tr>
                <th className="w-10 px-4 py-3"><input type="checkbox" checked={filtered.length > 0 && selected.size === filtered.length} onChange={toggleAll} className="rounded border-slate-300" /></th>
                <th className="px-4 py-3">Employee</th>
                <th className="px-4 py-3 hidden sm:table-cell">Department</th>
                <th className="px-4 py-3 hidden md:table-cell">Role</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 w-12" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((e) => (
                <tr key={e.id} className="hover:bg-slate-50">
                  <td className="px-4 py-3"><input type="checkbox" checked={selected.has(e.id)} onChange={() => toggle(e.id)} className="rounded border-slate-300" /></td>
                  <td className="px-4 py-3">
                    <Link to="/workforce/employees/$employeeId" params={{ employeeId: e.id }} className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-sky-500 text-white flex items-center justify-center text-xs font-medium">{e.avatar}</div>
                      <div>
                        <div className="font-medium text-slate-900 hover:text-sky-600">{e.name}</div>
                        <div className="text-xs text-slate-500">{e.email}</div>
                      </div>
                    </Link>
                  </td>
                  <td className="px-4 py-3 hidden sm:table-cell text-slate-600">{e.department}</td>
                  <td className="px-4 py-3 hidden md:table-cell text-slate-600">{e.role}</td>
                  <td className="px-4 py-3"><span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${statusColor[e.status] || statusColor.Inactive}`}>{e.status}</span></td>
                  <td className="px-4 py-3">
                    <Link to="/workforce/employees/$employeeId" params={{ employeeId: e.id }} className="text-slate-400 hover:text-sky-600">
                      <span className="material-symbols-outlined text-xl">chevron_right</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="px-6 py-16 text-center">
              <span className="material-symbols-outlined text-4xl text-slate-300">group_off</span>
              <p className="mt-2 text-sm text-slate-500">No employees match your filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
