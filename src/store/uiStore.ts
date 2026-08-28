import { create } from 'zustand'
import { AppView, UserSession } from '@/types'

interface UIState {
  currentView: AppView
  userSession: UserSession | null
  theme: 'dark' | 'light'
  fontSize: 'normal' | 'large' | 'larger'
  contrastMode: 'normal' | 'high'
  language: 'en' | 'hi'
  
  // Actions
  navigateTo: (view: AppView) => void
  login: (session: Partial<UserSession>) => void
  logout: () => void
  setTheme: (theme: 'dark' | 'light') => void
  setFontSize: (size: 'normal' | 'large' | 'larger') => void
  setContrastMode: (mode: 'normal' | 'high') => void
  setLanguage: (lang: 'en' | 'hi') => void
}

export const useUIStore = create<UIState>((set) => ({
  currentView: 'landing',
  userSession: {
    employeeId: 'ER-OFF-44910',
    name: 'Shri A. K. Sengupta',
    designation: 'Principal Financial Advisor (PFA)',
    division: 'Headquarters (Fairlie Place)',
    department: 'Accounts & Finance',
    role: 'Financial Administrator',
    isAuthenticated: true,
  },
  theme: 'dark',
  fontSize: 'normal',
  contrastMode: 'normal',
  language: 'en',

  navigateTo: (view) => set({ currentView: view }),
  login: (sessionData) =>
    set({
      userSession: {
        employeeId: sessionData.employeeId || 'ER-OFF-44910',
        name: sessionData.name || 'Railway Official',
        designation: sessionData.designation || 'Senior Divisional Finance Manager',
        division: sessionData.division || 'Howrah Division',
        department: sessionData.department || 'Accounts & Finance',
        role: sessionData.role || 'Officer',
        isAuthenticated: true,
      },
      currentView: 'dashboard',
    }),
  logout: () =>
    set({
      userSession: null,
      currentView: 'landing',
    }),
  setTheme: (theme) => set({ theme }),
  setFontSize: (fontSize) => set({ fontSize }),
  setContrastMode: (contrastMode) => set({ contrastMode }),
  setLanguage: (language) => set({ language }),
}))
