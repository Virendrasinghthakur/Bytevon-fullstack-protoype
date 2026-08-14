export const departments = [
  { id: 'd1', name: 'Engineering', code: 'ENG', head: 'Alex Rivera', headAvatar: 'AR', staffCount: 42, projectCount: 8, status: 'Active', color: '#3B82F6', description: 'Product engineering & platform' },
  { id: 'd2', name: 'Design', code: 'DSN', head: 'Priya Sharma', headAvatar: 'PS', staffCount: 12, projectCount: 5, status: 'Active', color: '#8B5CF6', description: 'UX/UI and brand systems' },
  { id: 'd3', name: 'Sales', code: 'SLS', head: 'Marcus Chen', headAvatar: 'MC', staffCount: 18, projectCount: 3, status: 'Active', color: '#10B981', description: 'Revenue & partnerships' },
  { id: 'd4', name: 'People Ops', code: 'HR', head: 'Sam Okonkwo', headAvatar: 'SO', staffCount: 7, projectCount: 2, status: 'Active', color: '#F59E0B', description: 'Talent & culture' },
  { id: 'd5', name: 'Finance', code: 'FIN', head: 'Elena Petrova', headAvatar: 'EP', staffCount: 9, projectCount: 1, status: 'Inactive', color: '#EF4444', description: 'Accounting & FP&A' },
]

export const employees = [
  { id: 'e1', name: 'Alex Rivera', email: 'alex.rivera@bytevon.com', role: 'VP Engineering', department: 'Engineering', departmentId: 'd1', status: 'Confirmed', avatar: 'AR', joinDate: '2021-03-15', phone: '+1 415 555 0101', location: 'San Francisco', manager: 'CEO', employmentType: 'Full-time', salary: 185000 },
  { id: 'e2', name: 'Priya Sharma', email: 'priya.sharma@bytevon.com', role: 'Head of Design', department: 'Design', departmentId: 'd2', status: 'Confirmed', avatar: 'PS', joinDate: '2022-01-10', phone: '+1 415 555 0102', location: 'Remote', manager: 'CEO', employmentType: 'Full-time', salary: 160000 },
  { id: 'e3', name: 'Jordan Lee', email: 'jordan.lee@bytevon.com', role: 'Senior Frontend Engineer', department: 'Engineering', departmentId: 'd1', status: 'Confirmed', avatar: 'JL', joinDate: '2022-06-20', phone: '+1 415 555 0103', location: 'Austin', manager: 'Alex Rivera', employmentType: 'Full-time', salary: 145000 },
  { id: 'e4', name: 'Sam Okonkwo', email: 'sam.okonkwo@bytevon.com', role: 'People Partner', department: 'People Ops', departmentId: 'd4', status: 'Confirmed', avatar: 'SO', joinDate: '2023-02-01', phone: '+1 415 555 0104', location: 'New York', manager: 'CEO', employmentType: 'Full-time', salary: 120000 },
  { id: 'e5', name: 'Maya Patel', email: 'maya.patel@bytevon.com', role: 'Product Designer', department: 'Design', departmentId: 'd2', status: 'Onboarding', avatar: 'MP', joinDate: '2026-07-15', phone: '+1 415 555 0105', location: 'Remote', manager: 'Priya Sharma', employmentType: 'Full-time', salary: 115000 },
  { id: 'e6', name: 'Chris Nguyen', email: 'chris.nguyen@bytevon.com', role: 'Backend Engineer', department: 'Engineering', departmentId: 'd1', status: 'Probation', avatar: 'CN', joinDate: '2026-05-01', phone: '+1 415 555 0106', location: 'Seattle', manager: 'Alex Rivera', employmentType: 'Full-time', salary: 135000 },
  { id: 'e7', name: 'Elena Petrova', email: 'elena.petrova@bytevon.com', role: 'CFO', department: 'Finance', departmentId: 'd5', status: 'Confirmed', avatar: 'EP', joinDate: '2020-11-01', phone: '+1 415 555 0107', location: 'San Francisco', manager: 'CEO', employmentType: 'Full-time', salary: 210000 },
  { id: 'e8', name: 'Marcus Chen', email: 'marcus.chen@bytevon.com', role: 'Head of Sales', department: 'Sales', departmentId: 'd3', status: 'Confirmed', avatar: 'MC', joinDate: '2021-08-12', phone: '+1 415 555 0108', location: 'Chicago', manager: 'CEO', employmentType: 'Full-time', salary: 175000 },
]

export const teams = [
  { id: 't1', name: 'Alpha Engineering', department: 'Engineering', departmentId: 'd1', head: 'Alex Rivera', memberCount: 8, projectCount: 3, status: 'Active', velocity: 42, allocation: 92, mission: 'Own the core platform and developer experience.' },
  { id: 't2', name: 'Design Systems', department: 'Design', departmentId: 'd2', head: 'Priya Sharma', memberCount: 5, projectCount: 2, status: 'Active', velocity: 28, allocation: 85, mission: 'Build and maintain the Bytevon design language.' },
  { id: 't3', name: 'Enterprise Sales', department: 'Sales', departmentId: 'd3', head: 'Marcus Chen', memberCount: 6, projectCount: 1, status: 'Active', velocity: 15, allocation: 78, mission: 'Close and expand enterprise accounts.' },
  { id: 't4', name: 'Platform Ops', department: 'Engineering', departmentId: 'd1', head: 'Jordan Lee', memberCount: 4, projectCount: 2, status: 'Active', velocity: 35, allocation: 88, mission: 'Reliability, infra, and internal tools.' },
]

export const teamMembers = {
  t1: [
    { id: 'e1', name: 'Alex Rivera', role: 'Team Lead', avatar: 'AR', status: 'Confirmed' },
    { id: 'e3', name: 'Jordan Lee', role: 'Senior Engineer', avatar: 'JL', status: 'Confirmed' },
    { id: 'e6', name: 'Chris Nguyen', role: 'Backend Engineer', avatar: 'CN', status: 'Probation' },
  ],
  t2: [
    { id: 'e2', name: 'Priya Sharma', role: 'Team Lead', avatar: 'PS', status: 'Confirmed' },
    { id: 'e5', name: 'Maya Patel', role: 'Product Designer', avatar: 'MP', status: 'Onboarding' },
  ],
}

export const candidateMembers = [
  { id: 'e3', name: 'Jordan Lee', role: 'Senior Frontend Engineer', department: 'Engineering', avatar: 'JL' },
  { id: 'e6', name: 'Chris Nguyen', role: 'Backend Engineer', department: 'Engineering', avatar: 'CN' },
  { id: 'e5', name: 'Maya Patel', role: 'Product Designer', department: 'Design', avatar: 'MP' },
]

export const employeeMetrics = {
  e1: { leaveBalance: 18, attendancePct: 98, projects: 4, lastReview: '2026-01-15' },
  e3: { leaveBalance: 12, attendancePct: 96, projects: 3, lastReview: '2025-11-20' },
}
