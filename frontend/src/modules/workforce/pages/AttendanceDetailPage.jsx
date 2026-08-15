import { Link, useParams } from '@tanstack/react-router'
import { todayAttendance, attendanceLogs } from '../data/attendanceMock'

const statusPill = {
  PRESENT: 'bg-emerald-100 text-emerald-800',
  LATE: 'bg-amber-100 text-amber-800',
  ABSENT: 'bg-rose-100 text-rose-800',
  WFH: 'bg-violet-100 text-violet-800',
  ON_LEAVE: 'bg-sky-100 text-sky-800',
}

export default function AttendanceDetailPage() {
  const { attendanceId } = useParams({ from: '/workforce/attendance/$attendanceId' })
  const row = todayAttendance.find((r) => r.id === attendanceId) || todayAttendance[0]

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white px-6 py-4">
        <div className="mb-1 flex items-center gap-2 text-sm text-slate-500">
          <Link to="/workforce/attendance" className="hover:text-sky-600">Attendance</Link>
          <span className="material-symbols-outlined text-base">chevron_right</span>
          <Link to="/workforce/attendance/employees" className="hover:text-sky-600">All employees</Link>
          <span className="material-symbols-outlined text-base">chevron_right</span>
          <span className="font-medium text-slate-800">{row.name}</span>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-sm font-semibold text-white">{row.avatar}</div>
            <div>
              <h1 className="text-xl font-semibold text-slate-900">{row.name}</h1>
              <p className="text-sm text-slate-500">{row.department}</p>
              <span className={`mt-1 inline-flex rounded-full px-2 py-0.5 text-[10px] font-medium ${statusPill[row.status]}`}>
                {row.status.replace('_', ' ')}
              </span>
            </div>
          </div>
          <Link to="/workforce/attendance/mark" className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
            Request correction
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-3xl space-y-6 px-6 py-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-xs text-slate-500">Check in</div>
            <div className="text-lg font-semibold text-slate-900">{row.checkIn}</div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-xs text-slate-500">Check out</div>
            <div className="text-lg font-semibold text-slate-900">{row.checkOut}</div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-xs text-slate-500">Hours</div>
            <div className="text-lg font-semibold text-slate-900">{row.hours}</div>
          </div>
        </div>

        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-sm font-semibold text-slate-800">Punch log</h2>
          <ul className="divide-y divide-slate-100">
            {attendanceLogs.map((l, i) => (
              <li key={i} className="flex justify-between gap-2 py-2.5 text-sm">
                <div>
                  <div className="font-medium text-slate-900">{l.action}</div>
                  <div className="text-xs text-slate-500">{l.location}</div>
                </div>
                <div className="text-right text-xs text-slate-500">
                  <div>{l.time}</div>
                  <div>{l.duration}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-2 text-sm font-semibold text-slate-800">Geolocation</h2>
          <p className="text-sm text-slate-600">Punch in/out matched corporate headquarters within 15 meters.</p>
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-emerald-50 px-2 py-1 text-emerald-700">Trusted network</span>
            <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-600">HQ perimeter</span>
          </div>
        </section>
      </div>
    </div>
  )
}
