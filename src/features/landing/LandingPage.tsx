import { useState, useEffect } from 'react'
import { useUIStore } from '@/store/uiStore'
import { Button } from '@/components/ui/button'
import {
  Train,
  Search,
  Lock,
  ArrowRight,
  ChevronRight,
  Clock,
  Compass,
  Building2,
  ShieldCheck,
  Zap,
  Sparkles,
} from 'lucide-react'

export function LandingPage() {
  const navigateTo = useUIStore((state) => state.navigateTo)
  const language = useUIStore((state) => state.language)
  const setLanguage = useUIStore((state) => state.setLanguage)
  const setFontSize = useUIStore((state) => state.setFontSize)

  const [currentTime, setCurrentTime] = useState('')
  const [activeSlide, setActiveSlide] = useState(1)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const formatted = now.toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }) + ' ' + now.toLocaleTimeString('en-IN') + ' IST'
      setCurrentTime(formatted)
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans">
      {/* 1. Top Utility Header Bar (Screenshot 2) */}
      <div className="bg-[#002b49] text-white px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Clock */}
          <div className="flex items-center gap-2 font-mono text-[11px] text-sky-200">
            <Clock className="h-3.5 w-3.5" />
            <span>{currentTime || 'Friday, August 28, 2026 11:00:00 IST'}</span>
          </div>

          {/* Right: Accessibility, Language, Search */}
          <div className="flex items-center gap-3 text-[11px]">
            <a href="#main-content" className="underline hover:text-sky-300">
              Skip to Main Content
            </a>

            {/* Contrast / Color swatches */}
            <div className="flex items-center gap-1">
              <span className="h-3.5 w-3.5 bg-white border border-slate-400 cursor-pointer" title="Normal Contrast" />
              <span className="h-3.5 w-3.5 bg-yellow-400 border border-slate-400 cursor-pointer" title="Yellow on Black" />
              <span className="h-3.5 w-3.5 bg-pink-300 border border-slate-400 cursor-pointer" title="Pink Theme" />
            </div>

            {/* Font Size controls */}
            <div className="flex items-center gap-1 border-l border-sky-800 pl-2">
              <span className="text-slate-300">Font Size</span>
              <button
                type="button"
                onClick={() => setFontSize('large')}
                className="px-1 font-bold border border-sky-700 bg-sky-900/60 rounded text-[10px] hover:bg-sky-800"
              >
                A+
              </button>
              <button
                type="button"
                onClick={() => setFontSize('normal')}
                className="px-1 font-semibold border border-sky-700 bg-sky-900/60 rounded text-[10px] hover:bg-sky-800"
              >
                A
              </button>
              <button
                type="button"
                onClick={() => setFontSize('normal')}
                className="px-1 text-[9px] border border-sky-700 bg-sky-900/60 rounded hover:bg-sky-800"
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
                className="h-6 w-28 sm:w-40 rounded bg-white px-2 pr-6 text-slate-800 text-[11px] placeholder:text-slate-500 focus:outline-none"
              />
              <Search className="absolute right-1.5 h-3 w-3 text-slate-500" />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Official Eastern Railway Crest & Header Banner (Screenshot 2) */}
      <div className="bg-white border-b-2 border-[#003366] px-4 py-3 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          {/* Logo & Bilingual Title */}
          <div className="flex items-center gap-3">
            {/* Indian Railways Logo Crest */}
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
              <div className="text-[11px] text-slate-500">
                Ministry of Railways • Government of India
              </div>
            </div>
          </div>

          {/* National Emblem & Quick Action */}
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
                Access Real-Time Financial & MCDO Telemetry
              </span>
            </div>

            {/* Ashoka Pillar Emblem Silhouette */}
            <div className="hidden sm:flex flex-col items-center justify-center border-l pl-4 border-slate-300">
              <div className="h-12 w-10 flex flex-col items-center justify-center text-[#003366]">
                <ShieldCheck className="h-8 w-8 text-amber-600" />
                <span className="text-[8px] font-bold uppercase text-slate-700">सत्यमेव जयते</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Navigation Bar (Screenshot 2) */}
      <nav className="bg-[#003366] text-white sticky top-0 z-20 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-xs font-semibold">
          <div className="flex flex-wrap items-center">
            <button className="px-4 py-2.5 bg-blue-900 border-r border-blue-800 hover:bg-blue-800 transition-colors">
              About Us
            </button>
            <button className="px-4 py-2.5 border-r border-blue-800 hover:bg-blue-800 transition-colors">
              Divisions
            </button>
            <button className="px-4 py-2.5 border-r border-blue-800 hover:bg-blue-800 transition-colors">
              News & Updates
            </button>
            <button className="px-4 py-2.5 border-r border-blue-800 hover:bg-blue-800 transition-colors">
              Tenders
            </button>
            <button className="px-4 py-2.5 border-r border-blue-800 hover:bg-blue-800 transition-colors">
              Supplier Information
            </button>
            <button className="px-4 py-2.5 border-r border-blue-800 hover:bg-blue-800 transition-colors">
              Passenger Information
            </button>
            <button className="px-4 py-2.5 hover:bg-blue-800 transition-colors">
              Contact Us
            </button>
          </div>

          <div className="pr-4 py-1">
            <button
              onClick={() => navigateTo('dashboard')}
              className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 px-3 py-1 rounded text-xs font-extrabold shadow-sm transition-all"
            >
              <Sparkles className="h-3 w-3" />
              <span>Direct MCDO Dashboard</span>
            </button>
          </div>
        </div>
      </nav>

      {/* 4. Marquee / Announcement Flash Ticker (Screenshot 2) */}
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
                • Distribution of RRC Panels for Level-1 Posts in Eastern Railway
              </span>
              <span className="hover:underline cursor-pointer font-semibold">
                • MCDO Monthly Financial Review 2025-26 Live on Portal
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Main Content: 2-Column Portal Layout (Screenshot 2) */}
      <div id="main-content" className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Left Column: Quick Services Menus (Screenshot 2) */}
          <div className="lg:col-span-3 space-y-4">
            {/* Passenger Section */}
            <div className="rounded-lg overflow-hidden border border-blue-300 shadow-sm bg-white">
              <div className="bg-linear-to-r from-blue-800 to-blue-900 text-white px-4 py-2 text-sm font-bold flex items-center justify-between">
                <span>Passenger Section</span>
                <Train className="h-4 w-4 text-blue-200" />
              </div>
              <ul className="divide-y divide-blue-100 text-xs font-medium text-slate-800">
                {[
                  'PNR Status Check',
                  'Berth / Seat Reservation',
                  'Train Schedule & Time Table',
                  'Trains between Stations',
                  'Spot your Train (Live Status)',
                  'Seat Availability in Real Time',
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="px-4 py-2 hover:bg-blue-50 hover:text-blue-900 flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <span>» {item}</span>
                    <ChevronRight className="h-3 w-3 text-slate-400" />
                  </li>
                ))}
              </ul>
            </div>

            {/* Tourists Section */}
            <div className="rounded-lg overflow-hidden border border-blue-300 shadow-sm bg-white">
              <div className="bg-linear-to-r from-blue-800 to-blue-900 text-white px-4 py-2 text-sm font-bold flex items-center justify-between">
                <span>Tourists Section</span>
                <Compass className="h-4 w-4 text-blue-200" />
              </div>
              <ul className="divide-y divide-blue-100 text-xs font-medium text-slate-800">
                {[
                  'Special Tourist Trains',
                  'Holiday Packages',
                  'Rail Tour Packages',
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="px-4 py-2 hover:bg-blue-50 hover:text-blue-900 flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <span>» {item}</span>
                    <ChevronRight className="h-3 w-3 text-slate-400" />
                  </li>
                ))}
              </ul>
            </div>

            {/* High-Contrast Quick Action Buttons (Screenshot 2) */}
            <div className="space-y-2">
              <button
                onClick={() => navigateTo('login')}
                className="w-full rounded-md bg-[#002b49] hover:bg-[#003d6b] text-white p-3 text-center font-bold text-sm shadow border border-blue-900 flex items-center justify-center gap-2"
              >
                <span>Freight Business Portal</span>
                <ArrowRight className="h-4 w-4 text-amber-400" />
              </button>

              <button
                onClick={() => navigateTo('login')}
                className="w-full rounded-md bg-[#002b49] hover:bg-[#003d6b] text-white p-3 text-center font-bold text-sm shadow border border-blue-900 flex items-center justify-center gap-2"
              >
                <span>Explore Rail Heritage On-line</span>
                <ArrowRight className="h-4 w-4 text-amber-400" />
              </button>

              <button
                onClick={() => navigateTo('login')}
                className="w-full rounded-md bg-[#002b49] hover:bg-[#003d6b] text-white p-3 text-center font-bold text-sm shadow border border-blue-900 flex items-center justify-center gap-2"
              >
                <span>Station Gallery & Facilities</span>
                <ArrowRight className="h-4 w-4 text-amber-400" />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Banner & Dignitaries (Screenshot 2) */}
          <div className="lg:col-span-9 space-y-4">
            {/* Centenary Electrification Banner (Screenshot 2) */}
            <div className="relative rounded-xl overflow-hidden border-2 border-amber-500 shadow-md bg-linear-to-r from-slate-900 via-blue-950 to-amber-950 text-white p-6 min-h-[260px] flex flex-col justify-between">
              {/* Top Banner Tag */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 border border-amber-400/40 px-3 py-1 text-xs font-bold text-amber-300">
                  <Zap className="h-3.5 w-3.5 text-amber-400" />
                  <span>Eastern Railway Electrification Milestone</span>
                </div>
                <div className="text-xs text-amber-200 font-semibold">
                  100% Green Rail Network
                </div>
              </div>

              {/* Hindi Hero Typography matching Screenshot 2 */}
              <div className="my-4 space-y-2">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-amber-400 drop-shadow-md font-sans">
                  रेल विद्युतीकरण का शताब्दी वर्ष
                </h2>
                <p className="text-lg sm:text-xl font-bold text-white drop-shadow-sm">
                  विद्युतीकरण की रफ्तार — हरित ऊर्जा, तेज गति
                </p>
                <div className="max-w-xl rounded-lg bg-black/40 backdrop-blur-xs p-3 border border-white/10 text-xs text-slate-200 mt-3 italic">
                  "जब भारत सिर्फ दस साल में 40,000 किलोमीटर से ज्यादा रेल लाइन का इलेक्ट्रिफिकेशन कर देता है, तो दुनिया को भी भारत की पॉवर का एहसास होता है, उनको लगता है कि देश बदल रहा है!"
                  <div className="text-right text-amber-300 font-bold not-italic mt-1">
                    — माननीय प्रधानमंत्री
                  </div>
                </div>
              </div>

              {/* Slider Pagination Controls (Screenshot 2) */}
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-slate-300">&lt;</span>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                  <button
                    key={num}
                    onClick={() => setActiveSlide(num)}
                    className={`h-5 w-5 rounded text-[11px] font-bold flex items-center justify-center transition-colors ${
                      activeSlide === num
                        ? 'bg-blue-600 text-white font-extrabold'
                        : 'bg-white/20 text-slate-200 hover:bg-white/40'
                    }`}
                  >
                    {num}
                  </button>
                ))}
                <span className="text-slate-300">&gt;</span>
              </div>
            </div>

            {/* Dignitaries & Leadership Showcase (Screenshot 2) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Minister of Railways */}
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm flex items-center gap-4">
                <div className="h-24 w-24 shrink-0 rounded-xl overflow-hidden border-2 border-blue-900 bg-slate-100 flex items-center justify-center">
                  <div className="h-full w-full bg-linear-to-b from-blue-100 to-blue-200 flex flex-col items-center justify-center text-center p-1">
                    <Train className="h-10 w-10 text-blue-900" />
                    <span className="text-[9px] font-bold text-blue-950 mt-1">Shri Ashwini Vaishnaw</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-blue-950">
                    Shri Ashwini Vaishnaw
                  </div>
                  <div className="text-xs font-semibold text-amber-700">
                    Hon'ble Minister of Railways
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1 leading-tight">
                    Government of India • Driving the Amrit Bharat & Modernization Transformation of Indian Railways.
                  </p>
                </div>
              </div>

              {/* General Manager, Eastern Railway */}
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm flex items-center gap-4">
                <div className="h-24 w-24 shrink-0 rounded-xl overflow-hidden border-2 border-blue-900 bg-slate-100 flex items-center justify-center">
                  <div className="h-full w-full bg-linear-to-b from-slate-100 to-slate-300 flex flex-col items-center justify-center text-center p-1">
                    <Building2 className="h-10 w-10 text-blue-950" />
                    <span className="text-[9px] font-bold text-blue-950 mt-1">General Manager</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-blue-950">
                    Shri Milind K. Deouskar
                  </div>
                  <div className="text-xs font-semibold text-blue-800">
                    General Manager, Eastern Railway
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1 leading-tight">
                    Leading Howrah, Sealdah, Asansol & Malda divisions towards record freight loading & passenger safety.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Access to Financial Performance Dashboard CTA */}
            <div className="rounded-xl bg-linear-to-r from-blue-950 to-[#040d1a] border border-blue-800 p-5 text-white shadow-lg flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <h3 className="text-base font-bold text-white">
                    Eastern Railway MCDO Financial Performance Dashboard
                  </h3>
                </div>
                <p className="text-xs text-slate-300 max-w-xl">
                  Inspect YTD Gross Earnings (₹54,214.20 Cr), Working Expenses, Heatmap Variances, and query the built-in AI Financial Assistant for deep telemetry insights.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  onClick={() => navigateTo('login')}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4"
                >
                  <Lock className="mr-1.5 h-3.5 w-3.5" />
                  Officer Login
                </Button>
                <Button
                  onClick={() => navigateTo('dashboard')}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs px-4 shadow-md"
                >
                  <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                  Launch Dashboard
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Footer */}
      <footer className="mt-8 border-t-4 border-red-700 bg-[#001f3f] text-white py-6 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div>
            <div className="font-bold text-sm">Eastern Railway • Fairlie Place, Kolkata</div>
            <div className="text-slate-400 text-[11px]">
              Content Owned, Maintained and Updated by Eastern Railway, Ministry of Railways, Government of India
            </div>
          </div>
          <div className="text-right text-slate-400 text-[11px]">
            <div>Site designed & developed using React 19 + React Compiler</div>
            <div>Best viewed in modern web browsers (1920x1080 resolution)</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
