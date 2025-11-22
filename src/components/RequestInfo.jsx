import { useState } from 'react'
import { motion } from 'framer-motion'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function RequestInfo() {
  const [role, setRole] = useState('client')
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  async function submit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      full_name: form.get('full_name'),
      email: form.get('email'),
      phone: form.get('phone') || undefined,
      company: form.get('company') || undefined,
      service_needed: form.get('service_needed') || undefined,
      role,
      message: form.get('message') || undefined,
    }

    setStatus({ state: 'loading', message: 'Sending…' })
    try {
      const res = await fetch(`${BACKEND_URL}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus({ state: 'success', message: 'Thanks! We will reach out shortly.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ state: 'error', message: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <section id="request" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10 text-center">
          <motion.h2 initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} className="text-3xl sm:text-4xl font-bold text-slate-900">
            Request information
          </motion.h2>
          <motion.p initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6, delay:.05}} className="mt-3 text-slate-600">
            Tell us about your needs — whether you are hiring a pro or offering services.
          </motion.p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="inline-flex p-1 rounded-xl bg-slate-100 mb-6">
            <button onClick={() => setRole('client')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${role==='client' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'}`}>
              I'm a client
            </button>
            <button onClick={() => setRole('professional')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${role==='professional' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'}`}>
              I'm a professional
            </button>
          </div>

          <form onSubmit={submit} className="grid grid-cols-1 gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input name="full_name" label="Full name" required />
              <Input name="email" label="Email" type="email" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input name="phone" label="Phone" />
              <Input name="company" label="Company" />
            </div>
            <Input name="service_needed" label={role==='client' ? 'What do you need help with?' : 'What services do you offer?'} />
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
              <textarea name="message" rows={4} className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3945C]/30 focus:border-[#3945C]" placeholder="Share any details that will help us route your request" />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button disabled={status.state==='loading'} className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#3945C] text-white font-semibold shadow-sm hover:shadow-md transition-shadow disabled:opacity-60">
                {status.state==='loading' ? 'Sending…' : 'Send request'}
              </button>
              <Status state={status.state} message={status.message} />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">{label}</label>
      <input {...props} className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3945C]/30 focus:border-[#3945C]" />
    </div>
  )
}

function Status({ state, message }) {
  if (state === 'idle') return null
  const color = state === 'success' ? 'text-emerald-600' : 'text-rose-600'
  return <p className={`text-sm ${color}`}>{message}</p>
}
