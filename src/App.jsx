import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import RequestInfo from './components/RequestInfo'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <div id="features">
          <Features />
        </div>
        <RequestInfo />
      </main>
      <footer className="border-t border-slate-200 py-8">
        <div className="max-w-6xl mx-auto px-6 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} LeadForge. All rights reserved.</p>
          <a href="#request" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#3945C] text-white font-medium">Get started</a>
        </div>
      </footer>
    </div>
  )
}

export default App
