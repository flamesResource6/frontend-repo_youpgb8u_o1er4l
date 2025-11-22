import { Menu } from 'lucide-react'

export default function Navbar(){
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#3945C]" />
          <span className="font-semibold text-slate-900">LeadForge</span>
        </a>
        <nav className="hidden sm:flex items-center gap-8 text-sm text-slate-700">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#request" className="hover:text-slate-900">Request info</a>
        </nav>
        <button className="sm:hidden p-2"><Menu size={20} /></button>
      </div>
    </header>
  )
}
