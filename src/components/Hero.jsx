import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-[#3945C]/10 text-[#3945C] mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#3945C]"></span>
          Performance-first lead generation
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900"
        >
          Fill your pipeline with qualified demand
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-lg sm:text-xl text-slate-600 mx-auto max-w-3xl"
        >
          We build and run omnichannel acquisition engines for any industry — paid, organic, outbound, and partnerships — so you can focus on closing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#request" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#3945C] text-white font-semibold shadow-sm hover:shadow-md transition-shadow">
            Request info — I'm a client
          </a>
          <a href="#request" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900/5 text-slate-900 font-semibold hover:bg-slate-900/10">
            Request info — I'm a professional
          </a>
        </motion.div>
      </div>
    </section>
  )
}
