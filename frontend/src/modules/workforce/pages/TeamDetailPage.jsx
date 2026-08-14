import { useParams, Link } from '@tanstack/react-router'
import { teams, teamMembers } from '../data/mock'

const statusColor = {
  Confirmed: 'bg-emerald-100 text-emerald-800',
  Onboarding: 'bg-sky-100 text-sky-800',
  Probation: 'bg-amber-100 text-amber-800',
  Active: 'bg-emerald-100 text-emerald-800',
}

export default function TeamDetailPage() {
  const { teamId } = useParams({ from: '/workforce/teams/$teamId' })
  const team = teams.find((t) => t.id === teamId) || teams[0]
  const members = teamMembers[team.id] || []

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
          <Link to="/workforce/teams" className="hover:text-sky-600">Teams</Link>
          <span className="material-symbols-outlined text-base">chevron_right</span>
          <span className="text-slate-800 font-medium">{team.name}</span>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">{team.name}</h1>
            <p className="text-slate-600">{team.department} · Led by {team.head}</p>
            <div className="mt-2 flex items-center gap-2">
              <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColor[team.status] || statusColor.Active}`}>{team.status}</span>
              <span className="text-xs text-slate-500">{team.memberCount} members · {team.projectCount} projects</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Add member</button>
            <button className="rounded-lg bg-sky-600 px-3 py-2 text-sm font-medium text-white hover:bg-sky-700">Edit team</button>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 py-8 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">Mission</h2>
          <p className="text-slate-800">{team.mission}</p>
        </section>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"><div className="text-xs text-slate-500">Velocity</div><div className="text-2xl font-semibold text-slate-900">{team.velocity}</div><div className="text-xs text-slate-400">story points / sprint</div></div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"><div className="text-xs text-slate-500">Allocation</div><div className="text-2xl font-semibold text-slate-900">{team.allocation}%</div><div className="text-xs text-slate-400">capacity used</div></div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"><div className="text-xs text-slate-500">Active projects</div><div className="text-2xl font-semibold text-slate-900">{team.projectCount}</div><div className="text-xs text-slate-400">in flight</div></div>
        </div>
        <section className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-slate-100 px-5 py-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-800">Members</h2>
            <span className="text-xs text-slate-500">{members.length} people</span>
          </div>
          <ul className="divide-y divide-slate-100">
            {members.map((m) => (
              <li key={m.id} className="flex items-center justify-between px-5 py-3 hover:bg-slate-50">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-sky-500 text-white flex items-center justify-center text-sm font-medium">{m.avatar}</div>
                  <div>
                    <Link to="/workforce/employees/$employeeId" params={{ employeeId: m.id }} className="text-sm font-medium text-slate-900 hover:text-sky-600">{m.name}</Link>
                    <div className="text-xs text-slate-500">{m.role}</div>
                  </div>
                </div>
                <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${statusColor[m.status] || statusColor.Confirmed}`}>{m.status}</span>
              </li>
            ))}
            {members.length === 0 && <li className="px-5 py-8 text-center text-sm text-slate-500">No members yet.</li>}
          </ul>
        </section>
      </div>
    </div>
  )
}
