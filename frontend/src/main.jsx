import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
  createRouter,
  createRootRoute,
  createRoute,
  Outlet,
  Link,
} from '@tanstack/react-router'
import './index.css'

import EmployeesListPage from './modules/workforce/pages/EmployeesListPage'
import EmployeeDetailPage from './modules/workforce/pages/EmployeeDetailPage'
import TeamsListPage from './modules/workforce/pages/TeamsListPage'
import TeamDetailPage from './modules/workforce/pages/TeamDetailPage'
import DepartmentsListPage from './modules/workforce/pages/DepartmentsListPage'

function AppShell() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <aside className="hidden w-56 shrink-0 border-r border-slate-200 bg-white md:block">
        <div className="px-4 py-5">
          <div className="text-lg font-bold text-sky-700">Bytevon</div>
          <div className="text-xs text-slate-500">Workforce</div>
        </div>
        <nav className="space-y-0.5 px-2">
          <Link
            to="/workforce/employees"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 [&.active]:bg-sky-50 [&.active]:text-sky-700 [&.active]:font-medium"
            activeOptions={{ exact: false }}
          >
            <span className="material-symbols-outlined text-xl">group</span>
            Employees
          </Link>
          <Link
            to="/workforce/departments"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 [&.active]:bg-sky-50 [&.active]:text-sky-700 [&.active]:font-medium"
          >
            <span className="material-symbols-outlined text-xl">apartment</span>
            Departments
          </Link>
          <Link
            to="/workforce/teams"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 [&.active]:bg-sky-50 [&.active]:text-sky-700 [&.active]:font-medium"
          >
            <span className="material-symbols-outlined text-xl">groups</span>
            Teams
          </Link>
        </nav>
      </aside>
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}

const rootRoute = createRootRoute({
  component: AppShell,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-2xl font-semibold text-slate-900">Workforce module</h1>
      <p className="text-slate-600">Pick a section from the sidebar to get started.</p>
      <div className="flex gap-3">
        <Link to="/workforce/employees" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white">
          Employees
        </Link>
        <Link to="/workforce/departments" className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium">
          Departments
        </Link>
        <Link to="/workforce/teams" className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium">
          Teams
        </Link>
      </div>
    </div>
  ),
})

const employeesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/workforce/employees',
  component: EmployeesListPage,
})

const employeeDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/workforce/employees/$employeeId',
  component: EmployeeDetailPage,
})

const departmentsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/workforce/departments',
  component: DepartmentsListPage,
})

const teamsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/workforce/teams',
  component: TeamsListPage,
})

const teamDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/workforce/teams/$teamId',
  component: TeamDetailPage,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  employeesRoute,
  employeeDetailRoute,
  departmentsRoute,
  teamsRoute,
  teamDetailRoute,
])

const router = createRouter({ routeTree })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
