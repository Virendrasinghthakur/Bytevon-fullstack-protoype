import { useMemo, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { todayAttendance } from '../data/attendanceMock'

const statusPill = {
  PRESENT: 'bg-emerald-100 text-emerald-800',
  LATE: 'bg-amber-100 text-amber-800',
  ABSENT: 'bg-rose-100 text-rose-800',
  WFH: 'bg-violet-100 text-violet-800',
  ON_LEAVE: 'bg-sky-100 text-sky-800',
}

export default function AttendanceEmployeesPage() {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('all')
  const filtered = useMemo(
    () =>
      todayAttendance.filter((r) => {
        const q = !query || r.name.toLowerCase().includes(query.toLowerCase()) || r.department.toLowerCase().includes(query.toLowerCase())
        const s = status === 'all' || r.status === status
        return q && s
      }),
    [query, status]
  )

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white px-6 py-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="mb-1 flex items-center gap-2 text-sm text-slate-500">
              <Link to="/workforce/attendance" className="hover:text-sky-600">Attendance</Link>
              <span className="material-symbols-outlined text-base">chevron_right</span>
              <span className="font-medium text-slate-800">All employees</span>
            </div>
            <h1 className="text-xl font-semibold text-slate-900">All employees attendance</h1>
            <p className="text-sm text-slate-500">View and manage real-time attendance records for the entire organisation.</p>
          </div>
          <Link to="/workforce/attendance/mark" className="inline-flex items-center gap-1.5 rounded-lg bg-sky-600 px-3 py-2 text-sm font-medium text-white hover:bg-sky-700">
            <span className="material-symbols-outlined text-base">how_to_reg</span>
            Mark attendance
          </Link>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <div className="relative min-w-[200px] flex-1">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-xl text-slate-400">search</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search employee or department…"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-10 pr-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
            />
          </div>
          <select value={status} onChange={(e) => setStatus(e.target.value)} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm">
            <option value="all">All statuses</option>
            <option value="PRESENT">Present</option>
            <option value="LATE">Late</option>
            <option value="ABSENT">Absent</option>
            <option value="WFH">WFH</option>
            <option value="ON_LEAVE">On leave</option>
          </select>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-100 bg-slate-50 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-4 py-3">Employee</th>
                <th className="px-4 py-3 hidden sm:table-cell">Department</th>
                <th className="px-4 py-3">Check in</th>
                <th className="px-4 py-3 hidden md:table-cell">Check out</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 w-12" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((r) => (
                <tr key={r.id} className="hover:bg-slate-50">
                  <td className="px-4 py-3">
                    <Link to="/workforce/attendance/$attendanceId" params={{ attendanceId: r.id }} className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 text-xs font-medium text-white">{r.avatar}</div>
                      <span className="font-medium text-slate-900 hover:text-sky-600">{r.name}</span>
                    </Link>
                  </td>
                  <td className="hidden px-4 py-3 text-slate-600 sm:table-cell">{r.department}</td>
                  <td className="px-4 py-3 text-slate-600">{r.checkIn}</td>
                  <td className="hidden px-4 py-3 text-slate-600 md:table-cell">{r.checkOut}</td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${statusPill[r.status]}`}>
                      {r.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <Link to="/workforce/attendance/$attendanceId" params={{ attendanceId: r.id }} className="text-slate-400 hover:text-sky-600">
                      <span className="material-symbols-outlined text-xl">chevron_right</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="px-6 py-16 text-center text-sm text-slate-500">No records match your filters.</div>
          )}
        </div>
      </div>
    </div>
  )
}
