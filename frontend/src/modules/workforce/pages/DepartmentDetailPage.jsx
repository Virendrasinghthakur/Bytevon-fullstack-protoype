import { useParams, Link } from '@tanstack/react-router'
import { departments, employees } from '../data/mock'

export default function DepartmentDetailPage() {
  const { departmentId } = useParams({ from: '/workforce/departments/$departmentId' })
  const dept = departments.find((d) => d.id === departmentId) || departments[0]
  const staff = employees.filter((e) => e.departmentId === dept.id)

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
          <Link to="/workforce/departments" className="hover:text-sky-600">Departments</Link>
          <span className="material-symbols-outlined text-base">chevron_right</span>
          <span className="text-slate-800 font-medium">{dept.name}</span>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl text-lg font-semibold text-white" style={{ backgroundColor: dept.color }}>
              {dept.code.slice(0, 2)}
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">{dept.name}</h1>
              <p className="text-slate-600">{dept.code} · {dept.description}</p>
              <span className={`mt-1 inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${dept.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}`}>
                {dept.status}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <Link to="/workforce/departments/new" className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Edit</Link>
            <Link to="/workforce/employees/new" className="rounded-lg bg-sky-600 px-3 py-2 text-sm font-medium text-white hover:bg-sky-700">Add staff</Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-8 space-y-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-xs text-slate-500">Staff</div>
            <div className="text-2xl font-semibold">{dept.staffCount}</div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-xs text-slate-500">Projects</div>
            <div className="text-2xl font-semibold">{dept.projectCount}</div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-xs text-slate-500">Head</div>
            <div className="text-lg font-semibold">{dept.head}</div>
          </div>
        </div>

        <section className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-slate-100 px-5 py-3">
            <h2 className="text-sm font-semibold text-slate-800">Team members</h2>
          </div>
          <ul className="divide-y divide-slate-100">
            {staff.map((e) => (
              <li key={e.id} className="flex items-center justify-between px-5 py-3 hover:bg-slate-50">
                <Link to="/workforce/employees/$employeeId" params={{ employeeId: e.id }} className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-sky-500 text-white flex items-center justify-center text-xs font-medium">{e.avatar}</div>
                  <div>
                    <div className="text-sm font-medium text-slate-900 hover:text-sky-600">{e.name}</div>
                    <div className="text-xs text-slate-500">{e.role}</div>
                  </div>
                </Link>
                <span className="text-xs text-slate-500">{e.status}</span>
              </li>
            ))}
            {staff.length === 0 && <li className="px-5 py-8 text-center text-sm text-slate-500">No staff listed in mock data for this department.</li>}
          </ul>
        </section>
      </div>
    </div>
  )
}
