import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { teams } from '../data/mock'
import CreateTeamModal from '../components/CreateTeamModal'

export default function TeamsListPage() {
  const [createOpen, setCreateOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-xl font-semibold text-slate-900">Teams</h1>
            <p className="text-sm text-slate-500">{teams.length} teams</p>
          </div>
          <button
            type="button"
            onClick={() => setCreateOpen(true)}
            className="inline-flex items-center gap-1.5 rounded-lg bg-sky-600 px-3 py-2 text-sm font-medium text-white hover:bg-sky-700"
          >
            <span className="material-symbols-outlined text-base">add</span>
            Create team
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-xs text-slate-500">Total teams</div>
            <div className="text-2xl font-semibold">{teams.length}</div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-xs text-slate-500">Active members</div>
            <div className="text-2xl font-semibold">{teams.reduce((s, t) => s + t.memberCount, 0)}</div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-xs text-slate-500">Projects</div>
            <div className="text-2xl font-semibold">{teams.reduce((s, t) => s + t.projectCount, 0)}</div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-xs text-slate-500">Avg size</div>
            <div className="text-2xl font-semibold">
              {Math.round(teams.reduce((s, t) => s + t.memberCount, 0) / teams.length)}
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-100 bg-slate-50 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-4 py-3">Team</th>
                <th className="px-4 py-3 hidden sm:table-cell">Department</th>
                <th className="px-4 py-3">Members</th>
                <th className="px-4 py-3 hidden md:table-cell">Velocity</th>
                <th className="px-4 py-3 w-12" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {teams.map((t) => (
                <tr key={t.id} className="hover:bg-slate-50">
                  <td className="px-4 py-3">
                    <Link to="/workforce/teams/$teamId" params={{ teamId: t.id }} className="font-medium text-slate-900 hover:text-sky-600">
                      {t.name}
                    </Link>
                    <div className="text-xs text-slate-500">Led by {t.head}</div>
                  </td>
                  <td className="px-4 py-3 hidden sm:table-cell text-slate-600">{t.department}</td>
                  <td className="px-4 py-3">{t.memberCount}</td>
                  <td className="px-4 py-3 hidden md:table-cell">{t.velocity}</td>
                  <td className="px-4 py-3">
                    <Link to="/workforce/teams/$teamId" params={{ teamId: t.id }} className="text-slate-400 hover:text-sky-600">
                      <span className="material-symbols-outlined text-xl">chevron_right</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <CreateTeamModal open={createOpen} onClose={() => setCreateOpen(false)} onCreate={() => {}} />
    </div>
  )
}
