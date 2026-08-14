import { useState } from 'react'
import { departments } from '../data/mock'
import DepartmentPicker from '../components/DepartmentPicker'

export default function DepartmentsListPage() {
  const [pickerOpen, setPickerOpen] = useState(false)
  const [selectedDept, setSelectedDept] = useState(null)
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div><h1 className="text-xl font-semibold text-slate-900">Departments</h1><p className="text-sm text-slate-500">{departments.length} departments</p></div>
          <div className="flex gap-2">
            <button onClick={() => setPickerOpen(true)} className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"><span className="material-symbols-outlined text-base">account_tree</span>Open picker</button>
            <button className="inline-flex items-center gap-1.5 rounded-lg bg-sky-600 px-3 py-2 text-sm font-medium text-white hover:bg-sky-700"><span className="material-symbols-outlined text-base">add</span>Add department</button>
          </div>
        </div>
        {selectedDept && <p className="mt-2 text-sm text-sky-700">Selected via picker: <strong>{selectedDept.name}</strong></p>}
      </div>
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-100 bg-slate-50 text-xs uppercase text-slate-500">
              <tr><th className="px-4 py-3">Department</th><th className="px-4 py-3 hidden sm:table-cell">Head</th><th className="px-4 py-3">Staff</th><th className="px-4 py-3 hidden md:table-cell">Projects</th><th className="px-4 py-3">Status</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {departments.map((d) => (
                <tr key={d.id} className="hover:bg-slate-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg text-xs font-semibold text-white" style={{ backgroundColor: d.color }}>{d.code.slice(0, 2)}</div>
                      <div><div className="font-medium text-slate-900">{d.name}</div><div className="text-xs text-slate-500">{d.code}</div></div>
                    </div>
                  </td>
                  <td className="px-4 py-3 hidden sm:table-cell text-slate-600">{d.head}</td>
                  <td className="px-4 py-3">{d.staffCount}</td>
                  <td className="px-4 py-3 hidden md:table-cell">{d.projectCount}</td>
                  <td className="px-4 py-3"><span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${d.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}`}>{d.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <DepartmentPicker open={pickerOpen} onClose={() => setPickerOpen(false)} onSelect={setSelectedDept} selectedId={selectedDept?.id} />
    </div>
  )
}
