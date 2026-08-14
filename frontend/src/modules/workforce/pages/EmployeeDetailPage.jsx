import { useParams, Link } from '@tanstack/react-router'
import { employees, employeeMetrics, departments } from '../data/mock'

const statusColor = {
  Confirmed: 'bg-emerald-100 text-emerald-800',
  Onboarding: 'bg-sky-100 text-sky-800',
  Probation: 'bg-amber-100 text-amber-800',
  Inactive: 'bg-slate-100 text-slate-600',
}

export default function EmployeeDetailPage() {
  const { employeeId } = useParams({ from: '/workforce/employees/$employeeId' })
  const emp = employees.find((e) => e.id === employeeId) || employees[0]
  const metrics = employeeMetrics[emp.id] || { leaveBalance: 10, attendancePct: 95, projects: 2, lastReview: '—' }
  const dept = departments.find((d) => d.id === emp.departmentId)

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
          <Link to="/workforce/employees" className="hover:text-sky-600">Employees</Link>
          <span className="material-symbols-outlined text-base">chevron_right</span>
          <span className="text-slate-800 font-medium">{emp.name}</span>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-sky-500 text-white flex items-center justify-center text-xl font-semibold">{emp.avatar}</div>
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">{emp.name}</h1>
              <p className="text-slate-600">{emp.role} · {emp.department}</p>
              <div className="mt-1 flex items-center gap-2">
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColor[emp.status] || statusColor.Inactive}`}>{emp.status}</span>
                <span className="text-xs text-slate-500">{emp.employmentType}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Edit</button>
            <button className="rounded-lg bg-sky-600 px-3 py-2 text-sm font-medium text-white hover:bg-sky-700">Message</button>
          </div>
        </div>
      </div>
      <div className="border-b border-slate-200 bg-white px-6">
        <nav className="flex gap-6 text-sm">
          {['Overview', 'Payroll', 'Documents', 'Activity'].map((tab, i) => (
            <button key={tab} className={`border-b-2 py-3 font-medium ${i === 0 ? 'border-sky-600 text-sky-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}>{tab}</button>
          ))}
        </nav>
      </div>
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">Contact & employment</h2>
              <dl className="grid gap-4 sm:grid-cols-2">
                <div><dt className="text-xs text-slate-500">Email</dt><dd className="text-sm font-medium text-slate-900">{emp.email}</dd></div>
                <div><dt className="text-xs text-slate-500">Phone</dt><dd className="text-sm font-medium text-slate-900">{emp.phone}</dd></div>
                <div><dt className="text-xs text-slate-500">Location</dt><dd className="text-sm font-medium text-slate-900">{emp.location}</dd></div>
                <div><dt className="text-xs text-slate-500">Join date</dt><dd className="text-sm font-medium text-slate-900">{emp.joinDate}</dd></div>
                <div><dt className="text-xs text-slate-500">Manager</dt><dd className="text-sm font-medium text-slate-900">{emp.manager}</dd></div>
                <div><dt className="text-xs text-slate-500">Department</dt><dd className="text-sm font-medium text-slate-900">{dept?.name || emp.department}</dd></div>
              </dl>
            </section>
            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">At a glance</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-lg bg-slate-50 p-3 text-center"><div className="text-2xl font-semibold text-slate-900">{metrics.leaveBalance}</div><div className="text-xs text-slate-500">Leave days</div></div>
                <div className="rounded-lg bg-slate-50 p-3 text-center"><div className="text-2xl font-semibold text-slate-900">{metrics.attendancePct}%</div><div className="text-xs text-slate-500">Attendance</div></div>
                <div className="rounded-lg bg-slate-50 p-3 text-center"><div className="text-2xl font-semibold text-slate-900">{metrics.projects}</div><div className="text-xs text-slate-500">Active projects</div></div>
                <div className="rounded-lg bg-slate-50 p-3 text-center"><div className="text-sm font-semibold text-slate-900">{metrics.lastReview}</div><div className="text-xs text-slate-500">Last review</div></div>
              </div>
            </section>
          </div>
          <div className="space-y-6">
            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Quick actions</h2>
              <div className="flex flex-col gap-2">
                <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50"><span className="material-symbols-outlined text-base text-slate-500">calendar_month</span>Apply leave</button>
                <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50"><span className="material-symbols-outlined text-base text-slate-500">description</span>View documents</button>
                <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50"><span className="material-symbols-outlined text-base text-slate-500">group</span>Assign team</button>
              </div>
            </section>
            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Compensation</h2>
              <p className="text-2xl font-semibold text-slate-900">${emp.salary?.toLocaleString()}</p>
              <p className="text-xs text-slate-500">Annual base · Full-time</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
