import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { attendanceLogs } from '../data/attendanceMock'

export default function MarkAttendancePage() {
  const [status, setStatus] = useState('Present')
  const [checkedIn, setCheckedIn] = useState(true)
  const [manualOpen, setManualOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white px-6 py-4">
        <div className="mb-1 flex items-center gap-2 text-sm text-slate-500">
          <Link to="/workforce/attendance" className="hover:text-sky-600">Attendance</Link>
          <span className="material-symbols-outlined text-base">chevron_right</span>
          <span className="font-medium text-slate-800">Mark attendance</span>
        </div>
        <h1 className="text-xl font-semibold text-slate-900">Mark attendance</h1>
        <p className="text-sm text-slate-500">Securely log your daily check-in from your verified location.</p>
      </div>

      <div className="mx-auto max-w-3xl space-y-6 px-6 py-8">
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm text-center">
          <div className="text-sm text-slate-500">Today</div>
          <div className="mt-1 text-2xl font-semibold text-slate-900">
            {new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
          <div className="mt-1 text-sm text-slate-500">Verified location · Tech City HQ, Tower 1</div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              disabled={checkedIn}
              onClick={() => setCheckedIn(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700 disabled:opacity-40"
            >
              <span className="material-symbols-outlined">login</span>
              Check in
            </button>
            <button
              type="button"
              disabled={!checkedIn}
              onClick={() => setCheckedIn(false)}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-800 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-900 disabled:opacity-40"
            >
              <span className="material-symbols-outlined">logout</span>
              Check out
            </button>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm">
            <div className="rounded-lg bg-slate-50 p-3">
              <div className="text-xs text-slate-500">Shift starts</div>
              <div className="font-semibold text-slate-900">09:00 AM</div>
            </div>
            <div className="rounded-lg bg-slate-50 p-3">
              <div className="text-xs text-slate-500">Shift ends</div>
              <div className="font-semibold text-slate-900">06:00 PM</div>
            </div>
            <div className="rounded-lg bg-slate-50 p-3">
              <div className="text-xs text-slate-500">Required hours</div>
              <div className="font-semibold text-slate-900">08:00</div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {['Present', 'WFH', 'Leave'].map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setStatus(s)}
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  status === s ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">Current status: <strong>{status}</strong> · {checkedIn ? 'Checked in' : 'Checked out'}</p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-sm font-semibold text-slate-800">Working hours log</h2>
          <ul className="divide-y divide-slate-100">
            {attendanceLogs.map((l, i) => (
              <li key={i} className="flex flex-wrap items-center justify-between gap-2 py-2.5 text-sm">
                <div>
                  <div className="font-medium text-slate-900">{l.action}</div>
                  <div className="text-xs text-slate-500">{l.location}</div>
                </div>
                <div className="text-right text-xs text-slate-500">
                  <div>{l.time}</div>
                  <div>{l.duration !== '—' ? l.duration : l.status}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-slate-800">Manual attendance entry</h2>
              <p className="text-xs text-slate-500">For off-site meetings or connectivity issues. Requires HR approval.</p>
            </div>
            <button
              type="button"
              onClick={() => setManualOpen((v) => !v)}
              className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
            >
              {manualOpen ? 'Hide' : 'Request'}
            </button>
          </div>
          {manualOpen && (
            <form
              className="mt-4 space-y-3"
              onSubmit={(e) => {
                e.preventDefault()
                setManualOpen(false)
              }}
            >
              <label className="block text-sm">
                <span className="text-slate-600">Reason</span>
                <select className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm">
                  <option>Client meeting</option>
                  <option>System issue</option>
                  <option>Forgot to log</option>
                  <option>Travel</option>
                </select>
              </label>
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="text-slate-600">Time in</span>
                  <input type="time" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
                </label>
                <label className="block text-sm">
                  <span className="text-slate-600">Time out</span>
                  <input type="time" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
                </label>
              </div>
              <label className="block text-sm">
                <span className="text-slate-600">Justification</span>
                <textarea rows={3} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Brief note for HR…" />
              </label>
              <div className="flex justify-end gap-2">
                <button type="button" onClick={() => setManualOpen(false)} className="rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50">Discard</button>
                <button type="submit" className="rounded-lg bg-sky-600 px-3 py-2 text-sm font-medium text-white hover:bg-sky-700">Request approval</button>
              </div>
            </form>
          )}
        </section>

        <section className="rounded-xl border border-slate-200 bg-sky-50 p-4 text-sm text-sky-900">
          <div className="mb-2 flex items-center gap-1 font-semibold">
            <span className="material-symbols-outlined text-base">info</span>
            Policy highlights
          </div>
          <ul className="space-y-1 text-xs text-sky-800">
            <li>• Grace period for late marking is 15 minutes past shift start.</li>
            <li>• Location must be within 500m of the office perimeter for verified punch-in.</li>
            <li>• Attendance corrections must be submitted within 48 hours of the missing log.</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
