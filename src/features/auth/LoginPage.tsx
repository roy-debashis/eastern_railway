import { useState } from 'react'
import { useUIStore } from '@/store/uiStore'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Train,
  Lock,
  User,
  Building,
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  KeyRound,
  CheckCircle2,
} from 'lucide-react'

export function LoginPage() {
  const login = useUIStore((state) => state.login)
  const navigateTo = useUIStore((state) => state.navigateTo)

  const [employeeId, setEmployeeId] = useState('ER-OFF-44910')
  const [password, setPassword] = useState('••••••••••••')
  const [division, setDivision] = useState('Headquarters (Fairlie Place)')
  const [department, setDepartment] = useState('Accounts & Finance')
  const [designation, setDesignation] = useState('Principal Financial Advisor (PFA)')
  const [captchaCode] = useState('ER-9428')
  const [captchaInput, setCaptchaInput] = useState('ER-9428')
  const [isLoading, setIsLoading] = useState(false)

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      login({
        employeeId,
        name: designation.includes('GM')
          ? 'Shri Milind K. Deouskar'
          : designation.includes('PFA')
          ? 'Shri A. K. Sengupta'
          : 'Shri R. N. Mukherjee',
        designation,
        division,
        department,
        role: 'Railway Officer',
        isAuthenticated: true,
      })
      setIsLoading(false)
    }, 400)
  }

  const handleQuickSelect = (
    roleDesig: string,
    roleDiv: string,
    roleDept: string,
    empId: string
  ) => {
    setEmployeeId(empId)
    setDesignation(roleDesig)
    setDivision(roleDiv)
    setDepartment(roleDept)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-sky-500 selection:text-white">
      {/* Top Bar */}
      <header className="border-b border-slate-800 bg-[#001f3f] px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-red-700 flex items-center justify-center text-white border-2 border-amber-400">
              <Train className="h-5 w-5 text-amber-300" />
            </div>
            <div>
              <div className="text-sm font-bold text-white tracking-wide">
                Eastern Railway (पूर्व रेलवे) • Indian Railways
              </div>
              <div className="text-[11px] text-slate-300">
                MCDO Financial Management & Operational Telemetry Portal
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigateTo('landing')}
            className="text-xs text-slate-300 hover:text-white hover:bg-slate-800"
          >
            <ArrowLeft className="mr-1.5 h-3.5 w-3.5" />
            Back to Public Portal
          </Button>
        </div>
      </header>

      {/* Main Login Form Container */}
      <div className="flex-1 flex items-center justify-center p-4 my-6">
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-12 rounded-2xl overflow-hidden border border-slate-800 bg-[#0a1628] shadow-2xl">
          {/* Left Panel: Official Branding & Quick Presets */}
          <div className="md:col-span-5 bg-linear-to-b from-[#002b49] via-[#001f3f] to-[#040d1a] p-6 text-white flex flex-col justify-between border-r border-slate-800">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-900/80 border border-blue-600/40 px-3 py-1 text-xs font-semibold text-sky-300 mb-4">
                <ShieldCheck className="h-4 w-4 text-sky-400" />
                <span>Authorized Officers Only</span>
              </div>

              <h2 className="text-xl font-bold tracking-tight text-white mb-2 font-serif">
                MCDO Financial Review & AI Analytics
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Sign in with your Railway IRPS credentials to access division budget targets, earnings breakdown, working expenses, and AI intelligence reports.
              </p>

              {/* Demo Profiles / Quick Sign-In */}
              <div className="space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-sky-400">
                  Quick Select Demo Officer
                </div>

                {[
                  {
                    title: 'Principal Financial Advisor (PFA)',
                    div: 'Headquarters (Fairlie Place)',
                    dept: 'Accounts & Finance',
                    id: 'ER-OFF-44910',
                  },
                  {
                    title: 'General Manager (GM)',
                    div: 'Headquarters',
                    dept: 'Executive / General Admin',
                    id: 'ER-GM-00101',
                  },
                  {
                    title: 'DRM Howrah Division',
                    div: 'Howrah Division',
                    dept: 'Operating & Commercial',
                    id: 'ER-DRM-HWH',
                  },
                  {
                    title: 'Sr. DFM Sealdah Division',
                    div: 'Sealdah Division',
                    dept: 'Accounts & Finance',
                    id: 'ER-DFM-SDAH',
                  },
                ].map((officer, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() =>
                      handleQuickSelect(
                        officer.title,
                        officer.div,
                        officer.dept,
                        officer.id
                      )
                    }
                    className={`w-full text-left p-2.5 rounded-lg border text-xs transition-all flex items-center justify-between ${
                      designation === officer.title
                        ? 'border-sky-400 bg-sky-950/80 text-white shadow-md'
                        : 'border-slate-800 bg-slate-900/50 text-slate-300 hover:bg-slate-800/80'
                    }`}
                  >
                    <div>
                      <div className="font-semibold text-slate-100">{officer.title}</div>
                      <div className="text-[10px] text-slate-400">
                        {officer.div} • {officer.id}
                      </div>
                    </div>
                    {designation === officer.title && (
                      <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 text-[10px] text-slate-400 border-t border-slate-800/80 mt-4">
              Protected by Eastern Railway Cyber & Telematics Security
            </div>
          </div>

          {/* Right Panel: Credentials Form */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div>
                  <h3 className="text-base font-bold text-white">
                    Official Railway Login
                  </h3>
                  <p className="text-xs text-slate-400">
                    Enter your Employee ID and Division details
                  </p>
                </div>
                <div className="h-8 w-8 rounded-lg bg-sky-950 border border-sky-600/40 flex items-center justify-center text-sky-400">
                  <KeyRound className="h-4 w-4" />
                </div>
              </div>

              <form onSubmit={handleLoginSubmit} className="space-y-4">
                {/* Employee ID */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-sky-400" />
                    <span>IRPS / Employee ID</span>
                  </label>
                  <Input
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                    required
                    className="bg-slate-900 border-slate-700 text-white font-mono text-xs"
                    placeholder="e.g. ER-OFF-44910"
                  />
                </div>

                {/* Password */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Lock className="h-3.5 w-3.5 text-sky-400" />
                    <span>Password / 2FA Token</span>
                  </label>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-slate-900 border-slate-700 text-white text-xs"
                    placeholder="••••••••••••"
                  />
                </div>

                {/* Division & Department Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Building className="h-3.5 w-3.5 text-sky-400" />
                      <span>Assigned Division</span>
                    </label>
                    <select
                      value={division}
                      onChange={(e) => setDivision(e.target.value)}
                      className="h-9 w-full rounded-md border border-slate-700 bg-slate-900 px-3 text-xs text-slate-200 focus:border-sky-500 focus:outline-none"
                    >
                      <option value="Headquarters (Fairlie Place)">Headquarters (Fairlie Place)</option>
                      <option value="Howrah Division">Howrah Division</option>
                      <option value="Sealdah Division">Sealdah Division</option>
                      <option value="Asansol Division">Asansol Division</option>
                      <option value="Malda Division">Malda Division</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">
                      Department
                    </label>
                    <select
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="h-9 w-full rounded-md border border-slate-700 bg-slate-900 px-3 text-xs text-slate-200 focus:border-sky-500 focus:outline-none"
                    >
                      <option value="Accounts & Finance">Accounts & Finance</option>
                      <option value="Operating / Traffic">Operating / Traffic</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Civil Engineering">Civil Engineering</option>
                      <option value="Mechanical">Mechanical</option>
                      <option value="Electrical">Electrical</option>
                    </select>
                  </div>
                </div>

                {/* Security Captcha */}
                <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Security Verification</span>
                    <div className="rounded bg-slate-800 px-3 py-1 font-mono font-bold tracking-widest text-sky-300 border border-slate-700 select-none">
                      {captchaCode}
                    </div>
                  </div>
                  <Input
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    required
                    className="bg-slate-900 border-slate-700 text-white font-mono text-xs"
                    placeholder="Enter captcha text"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-2.5 rounded-lg shadow-lg shadow-blue-950 text-sm flex items-center justify-center gap-2"
                >
                  <span>{isLoading ? 'Verifying IRPS Authority...' : 'Sign In to MCDO Dashboard'}</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Need access assistance?</span>
              <button
                type="button"
                onClick={() => navigateTo('dashboard')}
                className="text-sky-400 hover:underline font-semibold flex items-center gap-1"
              >
                <Sparkles className="h-3 w-3" />
                Direct Demo Access
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-3 text-center text-[11px] text-slate-500">
        Eastern Railway Portal &copy; 2026. Ministry of Railways, Government of India. All Rights Reserved.
      </footer>
    </div>
  )
}
