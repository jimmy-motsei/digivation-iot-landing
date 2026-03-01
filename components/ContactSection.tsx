'use client'

import { useState } from 'react'
import Reveal from './Reveal'

const SA_PROVINCES = ['Limpopo','Mpumalanga','North West','Gauteng','Free State','KwaZulu-Natal','Northern Cape','Western Cape','Eastern Cape']
const CROP_TYPES = ['Citrus','Stone Fruit','Vegetables','Viticulture','Grain / Maize','Livestock','Mixed Farming','Other']

const benefits = [
  { icon: '✅', title: 'No commitment required', desc: 'The site assessment and custom proposal are completely free.', delay: 2 as const },
  { icon: '📋', title: 'Custom deployment plan', desc: "Every farm is different. You get a spec tailored to your terrain, crop type, connectivity, and infrastructure.", delay: 3 as const },
  { icon: '🚀', title: 'Operational within 2 hours of install', desc: 'Our commissioning process ensures first alerts within 2 hours of hardware power-on.', delay: 4 as const },
]

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: '', surname: '', farmName: '', province: '', cropType: '', mobile: '', email: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass = "w-full px-4 py-3 border-[1.5px] border-brand-border rounded font-[inherit] text-[0.88rem] text-dark bg-white outline-none focus:border-lime-dark transition-colors placeholder:text-[#bbb]"
  const labelClass = "block text-[0.73rem] font-bold tracking-[0.06em] uppercase text-mid mb-1.5"

  return (
    <section className="px-[5%] py-20 bg-dark" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Left */}
        <div>
          <Reveal className="inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.14em] uppercase text-lime mb-[0.85rem] before:content-[''] before:w-5 before:h-0.5 before:bg-lime before:inline-block">
            Get Started
          </Reveal>
          <Reveal delay={1} as="h2" className="text-[clamp(1.7rem,3vw,2.6rem)] font-extrabold tracking-[-0.025em] leading-[1.1] text-white mb-4">
            Start with a free site assessment.
          </Reveal>
          <Reveal delay={2} as="p" className="text-base leading-[1.75] text-white/60 mb-10 max-w-[560px]">
            Our engineers visit your farm, map the terrain and existing infrastructure, evaluate connectivity, and deliver
            a detailed deployment plan and investment estimate — at no cost and no obligation.
          </Reveal>

          <div className="flex flex-col gap-[1.4rem]">
            {benefits.map(({ icon, title, desc, delay }) => (
              <Reveal key={title} delay={delay} className="flex gap-4 items-start px-5 py-[1.1rem] bg-lime/[0.08] border border-lime/20 rounded-md">
                <span className="text-[1.2rem] shrink-0">{icon}</span>
                <div>
                  <div className="text-[0.9rem] font-bold text-white mb-0.5">{title}</div>
                  <div className="text-[0.8rem] text-white/50 leading-[1.5]">{desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Form card */}
        <Reveal delay={1} className="bg-white rounded-md p-10 border border-brand-border shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
          <div className="text-[1.2rem] font-extrabold text-dark mb-1 tracking-[-0.01em]">
            Request Your Free Site Assessment
          </div>
          <div className="text-[0.82rem] text-brand-grey mb-7 leading-[1.5]">
            A Digivation engineer will contact you within 24 hours to arrange a visit.
          </div>

          {status === 'success' ? (
            <div className="text-center py-10">
              <div className="text-[2rem] mb-3">✅</div>
              <div className="text-[1.1rem] font-bold text-dark mb-2">Request received!</div>
              <div className="text-[0.85rem] text-brand-grey">We'll be in touch within 24 hours.</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelClass}>First Name</label>
                  <input name="firstName" type="text" className={inputClass} placeholder="Jan" value={form.firstName} onChange={handleChange} required />
                </div>
                <div>
                  <label className={labelClass}>Surname</label>
                  <input name="surname" type="text" className={inputClass} placeholder="van der Merwe" value={form.surname} onChange={handleChange} required />
                </div>
              </div>

              <div className="mb-4">
                <label className={labelClass}>Farm / Business Name</label>
                <input name="farmName" type="text" className={inputClass} placeholder="Hartbeespoort Boerdery (Pty) Ltd" value={form.farmName} onChange={handleChange} />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelClass}>Province</label>
                  <select name="province" className={inputClass} value={form.province} onChange={handleChange}>
                    <option value="">Select province</option>
                    {SA_PROVINCES.map(p => <option key={p}>{p}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Crop / Operation Type</label>
                  <select name="cropType" className={inputClass} value={form.cropType} onChange={handleChange}>
                    <option value="">Select type</option>
                    {CROP_TYPES.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className={labelClass}>Mobile Number</label>
                <input name="mobile" type="tel" className={inputClass} placeholder="+27 82 000 0000" value={form.mobile} onChange={handleChange} />
              </div>

              <div className="mb-4">
                <label className={labelClass}>Email Address</label>
                <input name="email" type="email" className={inputClass} placeholder="jan@myboerdery.co.za" value={form.email} onChange={handleChange} required />
              </div>

              {status === 'error' && (
                <p className="text-brand-red text-[0.8rem] mb-3">Something went wrong — please try again or email us directly.</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 bg-lime text-brand-black border-none rounded font-[inherit] text-[0.875rem] font-extrabold tracking-[0.07em] uppercase cursor-pointer mt-2 hover:bg-lime-dark hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending…' : 'Request Site Assessment'}
                {status !== 'loading' && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>

              <p className="text-center text-[0.72rem] text-brand-grey mt-3 leading-[1.5]">
                No spam. No sales calls without your consent. Your information is handled in accordance with POPIA.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
