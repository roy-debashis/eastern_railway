import { useUIStore } from '@/store/uiStore'
import { LandingPage } from '@/features/landing/LandingPage'
import { LoginPage } from '@/features/auth/LoginPage'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { useEffect } from 'react'

export function App() {
  const currentView = useUIStore((state) => state.currentView)
  const theme = useUIStore((state) => state.theme)

  useEffect(() => {
    // When on dashboard, ensure dark mode class is applied to html/root for rich aesthetics
    if (currentView === 'dashboard') {
      document.documentElement.classList.add('dark')
    } else {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [currentView, theme])

  switch (currentView) {
    case 'landing':
      return <LandingPage />
    case 'login':
      return <LoginPage />
    case 'dashboard':
    default:
      return <DashboardLayout />
  }
}
