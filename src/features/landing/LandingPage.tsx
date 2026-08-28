import { useState, useEffect } from 'react'
import { useUIStore } from '@/store/uiStore'
import { Button } from '@/components/ui/button'
import {
  Train,
  Search,
  Lock,
  ArrowRight,
  Clock,
  Building2,
  ShieldCheck,
  Zap,
  Sparkles,
  ChevronRight,
  FileSpreadsheet,
  Package,
} from 'lucide-react'

export function LandingPage() {
  const navigateTo = useUIStore((state) => state.navigateTo)
  const language = useUIStore((state) => state.language)
  const setLanguage = useUIStore((state) => state.setLanguage)
  const setFontSize = useUIStore((state) => state.setFontSize)

  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const formatted =
        now.toLocaleDateString('en-IN', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }) +
        ' ' +
        now.toLocaleTimeString('en-IN') +
        ' IST'
      setCurrentTime(formatted)
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans">
      {/* 1. Top Utility Header Bar */}
      <div className="bg-[#002b49] text-white px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Clock */}
          <div className="flex items-center gap-2 font-mono text-[11px] text-sky-200">
            <Clock className="h-3.5 w-3.5" />
            <span>{currentTime || 'Friday, August 28, 2026 11:00:00 IST'}</span>
          </div>

          {/* Right: Accessibility & Language */}
          <div className="flex items-center gap-3 text-[11px]">
            {/* Font Size controls */}
            <div className="flex items-center gap-1 border-r border-sky-800 pr-3">
              <span className="text-slate-300">Font Size</span>
              <button
                type="button"
                onClick={() => setFontSize('large')}
                className="px-1.5 font-bold border border-sky-700 bg-sky-900/60 rounded text-[10px] hover:bg-sky-800"
              >
                A+
              </button>
              <button
                type="button"
                onClick={() => setFontSize('normal')}
                className="px-1.5 font-semibold border border-sky-700 bg-sky-900/60 rounded text-[10px] hover:bg-sky-800"
              >
                A
              </button>
              <button
                type="button"
                onClick={() => setFontSize('normal')}
                className="px-1.5 text-[9px] border border-sky-700 bg-sky-900/60 rounded hover:bg-sky-800"
              >
                A-
              </button>
            </div>

            {/* Language Switch */}
            <button
              type="button"
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="px-2 py-0.5 rounded bg-white text-[#002b49] font-bold hover:bg-slate-200 border border-slate-300"
            >
              {language === 'en' ? 'हिन्दी' : 'English'}
            </button>

            {/* Search Input */}
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search portal..."
                className="h-6 w-32 sm:w-44 rounded bg-white px-2 pr-6 text-slate-800 text-[11px] placeholder:text-slate-500 focus:outline-none"
              />
              <Search className="absolute right-1.5 h-3 w-3 text-slate-500" />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Official Eastern Railway Crest & Header Banner */}
      <div className="bg-white border-b-2 border-[#003366] px-4 py-3.5 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          {/* Logo & Bilingual Title */}
          <div className="flex items-center gap-3">
            <div className="h-16 w-16 shrink-0 rounded-full border-2 border-red-700 p-1 flex items-center justify-center bg-white shadow-xs">
              <div className="h-full w-full rounded-full bg-red-700 flex flex-col items-center justify-center text-white text-center">
                <Train className="h-6 w-6 text-yellow-300" />
                <span className="text-[7px] font-bold tracking-tight uppercase">IR / ER</span>
              </div>
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#003366] tracking-tight font-serif">
                Eastern Railway
              </h1>
              <div className="text-sm font-semibold text-red-700 italic">
                Welcome to Official website of Eastern Railway (पूर्व रेलवे)
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                Ministry of Railways • Government of India
              </div>
            </div>
          </div>

          {/* National Emblem & Quick Officer Login */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end">
              <Button
                onClick={() => navigateTo('login')}
                className="bg-linear-to-r from-blue-900 to-indigo-900 hover:from-blue-800 hover:to-indigo-800 text-white font-bold shadow-md text-xs px-4 py-2 flex items-center gap-2 border border-blue-700"
              >
                <Lock className="h-3.5 w-3.5 text-amber-400" />
                <span>Officer Login (MCDO Dashboard)</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
              <span className="text-[10px] text-slate-500 mt-1">
                Real-Time Financial Telemetry & AI Analytics
              </span>
            </div>

            <div className="hidden sm:flex flex-col items-center justify-center border-l pl-4 border-slate-300">
              <ShieldCheck className="h-8 w-8 text-amber-600" />
              <span className="text-[8px] font-bold uppercase text-slate-700">सत्यमेव जयते</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Navigation Bar */}
      <nav className="bg-[#003366] text-white sticky top-0 z-20 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-xs font-semibold px-4">
          <div className="flex flex-wrap items-center">
            {['About Us', 'Divisions', 'News & Updates', 'Tenders', 'Supplier Information', 'Passenger Information', 'Contact Us'].map((item, idx) => (
              <button
                key={idx}
                className="px-3.5 py-2.5 hover:bg-blue-800 transition-colors border-r border-blue-800/80 last:border-0"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="py-1">
            <button
              onClick={() => navigateTo('dashboard')}
              className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 px-3.5 py-1 rounded text-xs font-extrabold shadow-sm transition-all"
            >
              <Sparkles className="h-3 w-3" />
              <span>Direct MCDO Dashboard</span>
            </button>
          </div>
        </div>
      </nav>

      {/* 4. Marquee / Announcement Flash Ticker */}
      <div className="bg-blue-50 border-b border-blue-200 px-4 py-1.5 text-xs text-blue-950 font-medium">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <span className="rounded bg-red-700 text-white px-2 py-0.5 text-[10px] font-bold shrink-0 uppercase tracking-wide">
            Latest Updates
          </span>
          <div className="overflow-hidden whitespace-nowrap w-full">
            <div className="inline-block animate-marquee space-x-8 text-blue-900">
              <span className="hover:underline cursor-pointer font-semibold">
                • For taking Integrity Pledge (सत्यनिष्ठा प्रतिज्ञा)
              </span>
              <span className="hover:underline cursor-pointer font-semibold">
                • Distribution of RRB Panels for Assistant Loco Pilot & Tech-III
              </span>
              <span className="hover:underline cursor-pointer font-semibold">
                • MCDO Monthly Financial Review 2025-26 Live on Portal
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Main Content: Streamlined 2-Column Portal Layout */}
      <div id="main-content" className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Quick Services Menus */}
          <div className="lg:col-span-4 space-y-4">
            {/* Passenger & Station Services */}
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
              <div className="bg-linear-to-r from-blue-900 to-blue-800 text-white px-4 py-2.5 text-sm font-bold flex items-center justify-between">
                <span>Passenger & Train Services</span>
                <Train className="h-4 w-4 text-sky-300" />
              </div>
              <ul className="divide-y divide-slate-100 text-xs font-medium text-slate-800">
                {[
                  'PNR Status Check & Inquiry',
                  'Seat Availability & Berth Reservation',
                  'Train Schedule & Live Station Departures',
                  'Spot Your Train (GPS Live Tracking)',
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-900 flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <span>» {item}</span>
                    <ChevronRight className="h-3 w-3 text-slate-400" />
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Operational Portals */}
            <div className="space-y-2.5">
              <button
                onClick={() => navigateTo('login')}
                className="w-full rounded-xl bg-[#002b49] hover:bg-[#003d6b] text-white p-3 text-left font-bold text-xs shadow-sm border border-blue-900 flex items-center justify-between transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-amber-400" />
                  <span>Freight Business Portal (FOIS)</span>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-amber-400" />
              </button>

              <button
                onClick={() => navigateTo('dashboard')}
                className="w-full rounded-xl bg-linear-to-r from-blue-900 to-indigo-900 hover:from-blue-800 hover:to-indigo-800 text-white p-3 text-left font-bold text-xs shadow-md border border-blue-700 flex items-center justify-between transition-colors"
              >
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="h-4 w-4 text-sky-300" />
                  <span>MCDO Financial Performance Review</span>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-sky-300" />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Banner & Dignitaries */}
          <div className="lg:col-span-8 space-y-4">
            {/* Centenary Electrification Banner */}
            <div className="relative rounded-xl overflow-hidden border-2 border-amber-500 shadow-md bg-linear-to-r from-slate-900 via-blue-950 to-amber-950 text-white p-6 min-h-[220px] flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 px-3 py-0.5 text-xs font-bold text-amber-300">
                  <Zap className="h-3.5 w-3.5 text-amber-400" />
                  <span>Eastern Railway Electrification Milestone</span>
                </div>
                <div className="text-xs text-amber-200 font-semibold">
                  100% Green Rail Network
                </div>
              </div>

              <div className="my-3 space-y-1.5">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-sans">
                  रेल विद्युतीकरण का शताब्दी वर्ष
                </h2>
                <p className="text-base sm:text-lg font-bold text-white">
                  विद्युतीकरण की रफ्तार — हरित ऊर्जा, तेज गति
                </p>
                <div className="max-w-xl rounded-lg bg-black/40 backdrop-blur-xs p-2.5 border border-white/10 text-xs text-slate-200 italic mt-2">
                  "जब भारत सिर्फ दस साल में 40,000 किलोमीटर से ज्यादा रेल लाइन का इलेक्ट्रिफिकेशन कर देता है, तो दुनिया को भी भारत की पॉवर का एहसास होता है!"
                  <div className="text-right text-amber-300 font-bold not-italic mt-1">
                    — माननीय प्रधानमंत्री
                  </div>
                </div>
              </div>
            </div>

            {/* Dignitaries Showcase */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs flex items-center gap-3">
                <div className="h-16 w-16 shrink-0 rounded-xl overflow-hidden border border-blue-900 bg-blue-50 flex items-center justify-center">
                  <Train className="h-8 w-8 text-blue-900" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-blue-950">
                    Shri Ashwini Vaishnaw
                  </div>
                  <div className="text-[11px] font-semibold text-amber-700">
                    Hon'ble Minister of Railways
                  </div>
                  <p className="text-[10px] text-slate-500 mt-0.5">
                    Government of India • Ministry of Railways
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs flex items-center gap-3">
                <div className="h-16 w-16 shrink-0 rounded-xl overflow-hidden border border-blue-900 bg-slate-100 flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-blue-900" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-blue-950">
                    Shri Milind K. Deouskar
                  </div>
                  <div className="text-[11px] font-semibold text-blue-800">
                    General Manager, Eastern Railway
                  </div>
                  <p className="text-[10px] text-slate-500 mt-0.5">
                    Leading Howrah, Sealdah, Asansol & Malda
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Dashboard Access Card */}
            <div className="rounded-xl bg-linear-to-r from-[#002b49] to-[#001f3f] border border-blue-800 p-4 text-white shadow-sm flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>MCDO Financial Review & AI Analytics</span>
                  <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                </h3>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Inspect YTD Gross Earnings (₹54,214.20 Cr), Demands 3–13, Heatmaps, and AI Highlights.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  onClick={() => navigateTo('login')}
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs h-8 px-3"
                >
                  <Lock className="mr-1 h-3 w-3" />
                  Officer Login
                </Button>
                <Button
                  onClick={() => navigateTo('dashboard')}
                  size="sm"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs h-8 px-3"
                >
                  Launch Dashboard
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Footer */}
      <footer className="border-t-4 border-red-700 bg-[#001f3f] text-white py-5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div>
            <div className="font-bold text-xs">Eastern Railway • Fairlie Place, Kolkata</div>
            <div className="text-slate-400 text-[10px]">
              Content Owned, Maintained and Updated by Eastern Railway, Ministry of Railways, Government of India
            </div>
          </div>
          <div className="text-right text-slate-400 text-[10px]">
            <div>Eastern Railway Financial Portal • React 19 Engine</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
