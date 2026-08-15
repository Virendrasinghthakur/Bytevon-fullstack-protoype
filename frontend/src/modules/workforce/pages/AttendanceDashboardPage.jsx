import { Link } from '@tanstack/react-router'
import {
  attendanceKpis,
  weeklyAttendance,
  recentCheckIns,
  todayAttendance,
  corrections,
} from '../data/attendanceMock'

const toneMap = {
  emerald: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  rose: 'bg-rose-50 text-rose-700 border-rose-100',
  amber: 'bg-amber-50 text-amber-700 border-amber-100',
  sky: 'bg-sky-50 text-sky-700 border-sky-100',
  violet: 'bg-violet-50 text-violet-700 border-violet-100',
}

const statusPill = {
  PRESENT: 'bg-emerald-100 text-emerald-800',
  LATE: 'bg-amber-100 text-amber-800',
  ABSENT: 'bg-rose-100 text-rose-800',
  WFH: 'bg-violet-100 text-violet-800',
  ON_LEAVE: 'bg-sky-100 text-sky-800',
  'On Time': 'bg-emerald-100 text-emerald-800',
  Late: 'bg-amber-100 text-amber-800',
  Remote: 'bg-violet-100 text-violet-800',
}

export default function AttendanceDashboardPage() {
  const maxBar = Math.max(...weeklyAttendance.map((d) => Math.max(d.thisWeek, d.lastWeek)), 1)

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white px-6 py-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-xl font-semibold text-slate-900">Attendance Dashboard</h1>
            <p className="text-sm text-slate-500">Real-time monitoring of your organisation’s workforce status.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              to="/workforce/attendance/employees"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              <span className="material-symbols-outlined text-base">assessment</span>
              All employees
            </Link>
            <Link
              to="/workforce/attendance/mark"
              className="inline-flex items-center gap-1.5 rounded-lg bg-sky-600 px-3 py-2 text-sm font-medium text-white hover:bg-sky-700"
            >
              <span className="material-symbols-outlined text-base">how_to_reg</span>
              Mark attendance
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-6 px-6 py-6">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {attendanceKpis.map((k) => (
            <div key={k.key} className={`rounded-xl border p-4 shadow-sm ${toneMap[k.tone]}`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wide opacity-80">{k.label}</span>
                <span className="material-symbols-outlined text-xl opacity-70">{k.icon}</span>
              </div>
              <div className="mt-2 text-2xl font-semibold">{k.value.toLocaleString()}</div>
              <div className="mt-1 text-xs opacity-75">{k.hint}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold text-slate-800">Weekly attendance</h2>
                <p className="text-xs text-slate-500">Avg. rate: 86.4%</p>
              </div>
              <div className="flex gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-sky-500" /> This week</span>
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-slate-300" /> Last week</span>
              </div>
            </div>
            <div className="flex h-40 items-end gap-3">
              {weeklyAttendance.map((d) => (
                <div key={d.day} className="flex flex-1 flex-col items-center gap-1">
                  <div className="flex h-32 w-full items-end justify-center gap-1">
                    <div className="w-2.5 rounded-t bg-slate-200" style={{ height: `${(d.lastWeek / maxBar) * 100}%` }} />
                    <div className="w-2.5 rounded-t bg-sky-500" style={{ height: `${(d.thisWeek / maxBar) * 100}%` }} />
                  </div>
                  <span className="text-[10px] font-medium text-slate-500">{d.day}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-800">Recent check-ins</h2>
              <Link to="/workforce/attendance/employees" className="text-xs font-medium text-sky-600 hover:underline">View all</Link>
            </div>
            <ul className="space-y-3">
              {recentCheckIns.map((c) => (
                <li key={c.id} className="flex items-center justify-between gap-2">
                  <div>
                    <div className="text-sm font-medium text-slate-900">{c.name}</div>
                    <div className="text-xs text-slate-500">{c.team} · {c.time}</div>
                  </div>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${statusPill[c.status] || 'bg-slate-100 text-slate-600'}`}>
                    {c.status}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3">
              <h2 className="text-sm font-semibold text-slate-800">Today’s attendance</h2>
            </div>
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                <tr>
                  <th className="px-4 py-2">Employee</th>
                  <th className="px-4 py-2 hidden sm:table-cell">Department</th>
                  <th className="px-4 py-2">Check in</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2 w-10" />
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {todayAttendance.slice(0, 6).map((r) => (
                  <tr key={r.id} className="hover:bg-slate-50">
                    <td className="px-4 py-2.5">
                      <Link to="/workforce/attendance/$attendanceId" params={{ attendanceId: r.id }} className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-xs font-medium text-white">{r.avatar}</div>
                        <span className="font-medium text-slate-900 hover:text-sky-600">{r.name}</span>
                      </Link>
                    </td>
                    <td className="px-4 py-2.5 hidden text-slate-600 sm:table-cell">{r.department}</td>
                    <td className="px-4 py-2.5 text-slate-600">{r.checkIn}</td>
                    <td className="px-4 py-2.5">
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${statusPill[r.status]}`}>{r.status.replace('_', ' ')}</span>
                    </td>
                    <td className="px-4 py-2.5">
                      <Link to="/workforce/attendance/$attendanceId" params={{ attendanceId: r.id }} className="text-slate-400 hover:text-sky-600">
                        <span className="material-symbols-outlined text-lg">more_vert</span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-800">Corrections</h2>
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-medium text-amber-800">
                {corrections.length} pending
              </span>
            </div>
            <ul className="space-y-4">
              {corrections.map((c) => (
                <li key={c.id} className="rounded-lg border border-slate-100 bg-slate-50 p-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-slate-900">{c.name}</span>
                    <span className="text-[10px] text-slate-400">{c.ago}</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-600">“{c.note}”</p>
                  <div className="mt-2 flex gap-2">
                    <button type="button" className="rounded-md bg-emerald-600 px-2 py-1 text-[10px] font-medium text-white hover:bg-emerald-700">Approve</button>
                    <button type="button" className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[10px] font-medium text-slate-600 hover:bg-slate-50">Reject</button>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
