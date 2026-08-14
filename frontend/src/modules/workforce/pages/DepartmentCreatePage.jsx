import { useState } from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import { departments } from '../data/mock'

const COLORS = ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#EC4899', '#06B6D4']

export default function DepartmentCreatePage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '', code: '', description: '', head: '', parentId: '', status: 'Active', color: COLORS[0],
  })
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const submit = (e) => {
    e.preventDefault()
    navigate({ to: '/workforce/departments' })
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
          <Link to="/workforce/departments" className="hover:text-sky-600">Departments</Link>
          <span className="material-symbols-outlined text-base">chevron_right</span>
          <span className="text-slate-800 font-medium">Add department</span>
        </div>
        <h1 className="text-xl font-semibold text-slate-900">Add / Edit department</h1>
      </div>

      <form onSubmit={submit} className="mx-auto max-w-2xl px-6 py-8 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm sm:col-span-2"><span className="text-slate-600">Name</span>
              <input required value={form.name} onChange={(e) => set('name', e.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20" /></label>
            <label className="block text-sm"><span className="text-slate-600">Code</span>
              <input required value={form.code} onChange={(e) => set('code', e.target.value.toUpperCase())} maxLength={6} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm uppercase outline-none focus:border-sky-500" /></label>
            <label className="block text-sm"><span className="text-slate-600">Status</span>
              <select value={form.status} onChange={(e) => set('status', e.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm">
                <option>Active</option><option>Inactive</option>
              </select></label>
            <label className="block text-sm sm:col-span-2"><span className="text-slate-600">Description</span>
              <textarea value={form.description} onChange={(e) => set('description', e.target.value)} rows={3} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-500" /></label>
            <label className="block text-sm"><span className="text-slate-600">Department head</span>
              <input value={form.head} onChange={(e) => set('head', e.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" /></label>
            <label className="block text-sm"><span className="text-slate-600">Parent department</span>
              <select value={form.parentId} onChange={(e) => set('parentId', e.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm">
                <option value="">None</option>
                {departments.map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}
              </select></label>
          </div>
          <div>
            <span className="text-sm text-slate-600">Color tag</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {COLORS.map((c) => (
                <button key={c} type="button" onClick={() => set('color', c)}
                  className={`h-8 w-8 rounded-full ring-offset-2 ${form.color === c ? 'ring-2 ring-sky-500' : ''}`}
                  style={{ backgroundColor: c }} />
              ))}
            </div>
          </div>
        </section>
        <div className="flex justify-end gap-3">
          <Link to="/workforce/departments" className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Cancel</Link>
          <button type="submit" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700">Save department</button>
        </div>
      </form>
    </div>
  )
}
