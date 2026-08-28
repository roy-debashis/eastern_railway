export * from '@/features/dashboard/types/dashboard.types'
export * from '@/features/ai-agent/types/agent.types'

export type AppView = 'landing' | 'login' | 'dashboard'

export interface UserSession {
  employeeId: string
  name: string
  designation: string
  division: string
  department: string
  role: string
  isAuthenticated: boolean
}
