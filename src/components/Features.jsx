import { motion } from 'framer-motion'
import { Rocket, Target, LineChart, Layers } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Launch fast',
    desc: 'Quickly spin up campaigns with proven playbooks across channels.'
  },
  {
    icon: Target,
    title: 'Precise targeting',
    desc: 'ICP modeling and intent signals to reach buyers when it matters.'
  },
  {
    icon: LineChart,
    title: 'Performance-first',
    desc: 'We optimize for qualified pipeline, not vanity metrics.'
  },
  {
    icon: Layers,
    title: 'Any industry',
    desc: 'From local services to enterprise SaaS — we tailor to your market.'
  }
]

export default function Features() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.h2 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="text-3xl sm:text-4xl font-bold text-slate-900">
            Built for scalable acquisition
          </motion.h2>
          <motion.p initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:.6, delay:.05}} className="mt-3 text-slate-600">
            Modular systems you can dial up as you grow.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5, delay: i*0.05}} className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg/40 hover:shadow-slate-900/5 transition-shadow">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#3945C]/10 text-[#3945C] mb-4">
                <f.icon size={22} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{f.title}</h3>
              <p className="text-slate-600 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
