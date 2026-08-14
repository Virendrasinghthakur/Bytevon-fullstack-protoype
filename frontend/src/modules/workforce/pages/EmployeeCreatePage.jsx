import { useState } from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import { departments } from '../data/mock'
import DepartmentPicker from '../components/DepartmentPicker'

const empty = {
  firstName: '', lastName: '', email: '', phone: '', role: '',
  departmentId: '', employmentType: 'Full-time', status: 'Onboarding',
  joinDate: '', location: '', manager: '', salary: '',
  emergencyName: '', emergencyPhone: '',
}

export default function EmployeeCreatePage() {
  const navigate = useNavigate()
  const [form, setForm] = useState(empty)
  const [pickerOpen, setPickerOpen] = useState(false)
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))
  const dept = departments.find((d) => d.id === form.departmentId)

  const submit = (e) => {
    e.preventDefault()
    navigate({ to: '/workforce/employees' })
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
          <Link to="/workforce/employees" className="hover:text-sky-600">Employees</Link>
          <span className="material-symbols-outlined text-base">chevron_right</span>
          <span className="text-slate-800 font-medium">Add employee</span>
        </div>
        <h1 className="text-xl font-semibold text-slate-900">Add / Edit employee</h1>
      </div>

      <form onSubmit={submit} className="mx-auto max-w-3xl px-6 py-8 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Personal</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm"><span className="text-slate-600">First name</span>
              <input required value={form.firstName} onChange={(e) => set('firstName', e.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20" /></label>
            <label className="block text-sm"><span className="text-slate-600">Last name</span>
              <input required value={form.lastName} onChange={(e) => set('lastName', e.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20" /></label>
            <label className="block text-sm"><span className="text-slate-600">Email</span>
              <input type="email" required value={form.email} onChange={(e) => set('email', e.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20" /></label>
            <label className="block text-sm"><span className="text-slate-600">Phone</span>
              <input value={form.phone} onChange={(e) => set('phone', e.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20" /></label>
            <label className="block text-sm sm:col-span-2"><span className="text-slate-600">Location</span>
              <input value={form.location} onChange={(e) => set('location', e.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20" /></label>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Employment</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm"><span className="text-slate-600">Role / title</span>
              <input required value={form.role} onChange={(e) => set('role', e.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20" /></label>
            <div className="block text-sm">
              <span className="text-slate-600">Department</span>
              <button type="button" onClick={() => setPickerOpen(true)} className="mt-1 flex w-full items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-left text-sm hover:bg-slate-50">
                <span className={dept ? 'text-slate-900' : 'text-slate-400'}>{dept ? dept.name : 'Select department…'}</span>
                <span className="material-symbols-outlined text-slate-400 text-lg">expand_more</span>
              </button>
            </div>
            <label className="block text-sm"><span className="text-slate-600">Employment type</span>
              <select value={form.employmentType} onChange={(e) => set('employmentType', e.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm">
                <option>Full-time</option><option>Part-time</option><option>Contract</option><option>Intern</option>
              </select></label>
            <label className="block text-sm"><span className="text-slate-600">Status</span>
              <select value={form.status} onChange={(e) => set('status', e.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm">
                <option>Onboarding</option><option>Probation</option><option>Confirmed</option><option>Inactive</option>
              </select></label>
            <label className="block text-sm"><span className="text-slate-600">Join date</span>
              <input type="date" value={form.joinDate} onChange={(e) => set('joinDate', e.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-500" /></label>
            <label className="block text-sm"><span className="text-slate-600">Manager</span>
              <input value={form.manager} onChange={(e) => set('manager', e.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-500" /></label>
            <label className="block text-sm"><span className="text-slate-600">Annual salary</span>
              <input type="number" value={form.salary} onChange={(e) => set('salary', e.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-500" /></label>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Emergency contact</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm"><span className="text-slate-600">Name</span>
              <input value={form.emergencyName} onChange={(e) => set('emergencyName', e.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" /></label>
            <label className="block text-sm"><span className="text-slate-600">Phone</span>
              <input value={form.emergencyPhone} onChange={(e) => set('emergencyPhone', e.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" /></label>
          </div>
        </section>

        <div className="flex justify-end gap-3">
          <Link to="/workforce/employees" className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Cancel</Link>
          <button type="submit" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700">Save employee</button>
        </div>
      </form>

      <DepartmentPicker open={pickerOpen} onClose={() => setPickerOpen(false)} onSelect={(d) => set('departmentId', d.id)} selectedId={form.departmentId} />
    </div>
  )
}
