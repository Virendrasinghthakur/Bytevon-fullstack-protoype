import { useState } from 'react'
import { Link, useParams, useNavigate } from '@tanstack/react-router'
import { teams, candidateMembers } from '../data/mock'

export default function AddMemberPage() {
  const { teamId } = useParams({ from: '/workforce/teams/$teamId/add-member' })
  const team = teams.find((t) => t.id === teamId) || teams[0]
  const navigate = useNavigate()
  const [selected, setSelected] = useState(new Set())
  const [roles, setRoles] = useState({})

  const toggle = (id) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const submit = () => {
    navigate({ to: '/workforce/teams/$teamId', params: { teamId: team.id } })
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
          <Link to="/workforce/teams" className="hover:text-sky-600">Teams</Link>
          <span className="material-symbols-outlined text-base">chevron_right</span>
          <Link to="/workforce/teams/$teamId" params={{ teamId: team.id }} className="hover:text-sky-600">{team.name}</Link>
          <span className="material-symbols-outlined text-base">chevron_right</span>
          <span className="text-slate-800 font-medium">Add member</span>
        </div>
        <h1 className="text-xl font-semibold text-slate-900">Add members to {team.name}</h1>
        <p className="text-sm text-slate-500">Select people and optionally assign a team role.</p>
      </div>

      <div className="mx-auto max-w-2xl px-6 py-8 space-y-4">
        {candidateMembers.map((c) => {
          const on = selected.has(c.id)
          return (
            <div key={c.id} className={`rounded-xl border bg-white p-4 shadow-sm transition ${on ? 'border-sky-300 ring-1 ring-sky-200' : 'border-slate-200'}`}>
              <div className="flex items-start gap-3">
                <input type="checkbox" checked={on} onChange={() => toggle(c.id)} className="mt-1 rounded border-slate-300" />
                <div className="h-10 w-10 rounded-full bg-sky-500 text-white flex items-center justify-center text-sm font-medium">{c.avatar}</div>
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-slate-900">{c.name}</div>
                  <div className="text-xs text-slate-500">{c.role} · {c.department}</div>
                  {on && (
                    <label className="mt-2 block text-xs text-slate-600">
                      Team role
                      <input
                        value={roles[c.id] || ''}
                        onChange={(e) => setRoles((r) => ({ ...r, [c.id]: e.target.value }))}
                        placeholder="e.g. Senior Engineer"
                        className="mt-1 w-full rounded-lg border border-slate-200 px-2 py-1.5 text-sm"
                      />
                    </label>
                  )}
                </div>
              </div>
            </div>
          )
        })}

        <div className="flex justify-end gap-3 pt-4">
          <Link to="/workforce/teams/$teamId" params={{ teamId: team.id }} className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Cancel</Link>
          <button type="button" disabled={selected.size === 0} onClick={submit} className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700 disabled:opacity-40">
            Add {selected.size || ''} member{selected.size === 1 ? '' : 's'}
          </button>
        </div>
      </div>
    </div>
  )
}
