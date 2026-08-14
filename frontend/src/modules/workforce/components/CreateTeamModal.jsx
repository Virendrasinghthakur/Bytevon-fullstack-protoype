import { useState } from 'react'
import { departments } from '../data/mock'

export default function CreateTeamModal({ open, onClose, onCreate }) {
  const [form, setForm] = useState({ name: '', departmentId: '', head: '', mission: '' })
  if (!open) return null
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const submit = (e) => {
    e.preventDefault()
    onCreate?.(form)
    onClose?.()
    setForm({ name: '', departmentId: '', head: '', mission: '' })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/40" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <h2 className="text-lg font-semibold text-slate-900">Create new team</h2>
          <button type="button" onClick={onClose} className="rounded-lg p-1 text-slate-400 hover:bg-slate-100">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <form onSubmit={submit} className="space-y-4 px-5 py-4">
          <label className="block text-sm"><span className="text-slate-600">Team name</span>
            <input required value={form.name} onChange={(e) => set('name', e.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20" /></label>
          <label className="block text-sm"><span className="text-slate-600">Department</span>
            <select required value={form.departmentId} onChange={(e) => set('departmentId', e.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm">
              <option value="">Select…</option>
              {departments.map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}
            </select></label>
          <label className="block text-sm"><span className="text-slate-600">Team lead</span>
            <input value={form.head} onChange={(e) => set('head', e.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" /></label>
          <label className="block text-sm"><span className="text-slate-600">Mission</span>
            <textarea value={form.mission} onChange={(e) => set('mission', e.target.value)} rows={3} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" /></label>
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={onClose} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">Cancel</button>
            <button type="submit" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700">Create team</button>
          </div>
        </form>
      </div>
    </div>
  )
}
