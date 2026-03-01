'use client'

import { useEffect, useState } from 'react'
import Reveal from './Reveal'

const stats = [
  { num: '2km', label: 'LoRaWAN range' },
  { num: '72h', label: 'Offline data buffer' },
  { num: '99.5%', label: 'Platform uptime SLA' },
  { num: '<18mo', label: 'Target payback period' },
]

const challenges = [
  { icon: '💧', bold: 'Water-stressed', text: '— 450mm avg rainfall' },
  { icon: '⚡', bold: 'Load shedding', text: 'disrupts operations 24/7' },
  { icon: '📡', bold: 'No reliable', text: 'connectivity on remote farms' },
  { icon: '🌡️', bold: '20–30%', text: 'post-harvest losses from cold chain failures' },
]

export default function Hero() {
  const [tankVal, setTankVal] = useState(74)

  useEffect(() => {
    const id = setInterval(() => {
      setTankVal(72 + Math.floor(Math.random() * 5))
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      {/* Hero */}
      <div className="bg-dark grid grid-cols-1 lg:grid-cols-[55%_45%] min-h-[580px] relative overflow-hidden">
        {/* Diagonal overlay */}
        <div className="hidden lg:block absolute top-0 right-0 w-0 h-0 border-solid z-[2]"
          style={{ borderWidth: '580px 0 0 120px', borderColor: 'transparent transparent transparent #0d1f0f' }} />

        {/* Left */}
        <div className="px-[5%] py-20 relative z-[3]">
          <div className="flex items-center gap-2 mb-6 text-[0.75rem] text-white/35 tracking-[0.06em] uppercase before:content-[''] before:w-6 before:h-0.5 before:bg-lime before:inline-block">
            IOT Solutions <span className="text-lime">Smart Agriculture</span>
          </div>

          <h1 className="text-[clamp(2.2rem,4vw,3.6rem)] font-extrabold leading-[1.08] tracking-[-0.02em] text-white mb-6">
            Real-time farm visibility.
            <span className="text-lime block">Before problems cost you yield.</span>
          </h1>

          <p className="text-base leading-[1.75] text-white/60 font-light max-w-[480px] mb-10">
            Industrial-grade IoT sensors for South African farms — monitoring water, soil, cold storage and livestock,
            with alerts that work even during load shedding and connectivity outages.
          </p>

          <div className="flex gap-4 flex-wrap mb-14">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-lime text-brand-black px-[1.8rem] py-[0.85rem] rounded-[3px] text-[0.875rem] font-bold tracking-[0.05em] uppercase border-2 border-lime hover:bg-lime-dark hover:border-lime-dark hover:-translate-y-0.5 transition-all no-underline"
            >
              Request Site Assessment
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#modules"
              className="inline-flex items-center gap-2 bg-transparent text-white px-[1.8rem] py-[0.85rem] rounded-[3px] text-[0.875rem] font-medium tracking-[0.05em] uppercase border-2 border-white/25 hover:border-lime hover:text-lime transition-all no-underline"
            >
              View Solution
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 flex-wrap pt-10 border-t border-white/10">
            {stats.map(({ num, label }) => (
              <div key={label}>
                <div className="text-[2rem] font-extrabold text-lime leading-none tracking-[-0.02em]">{num}</div>
                <div className="text-[0.72rem] text-white/40 uppercase tracking-[0.07em] mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — dashboard */}
        <div className="hidden lg:flex items-center justify-center px-[5%] py-12 pl-12 bg-site-bg relative z-[1]">
          <div className="bg-white rounded-lg shadow-[0_12px_40px_rgba(0,0,0,0.15)] w-full max-w-[400px] overflow-hidden border border-brand-border">
            {/* Header */}
            <div className="bg-dark px-5 py-[0.85rem] flex items-center justify-between">
              <span className="text-[0.78rem] font-semibold text-white tracking-[0.04em] uppercase">Farm Dashboard · Live</span>
              <span className="flex items-center gap-1.5 text-[0.68rem] text-lime font-medium">
                <span className="w-1.5 h-1.5 bg-lime rounded-full blink" />
                All systems
              </span>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 border-b border-brand-border">
              {[
                { label: 'Tank Level', value: tankVal, unit: '%', color: '#9db032', status: '▲ Filling · Pump on', statusClass: 'text-[#27ae60]' },
                { label: 'Soil · Zone 2', value: 38, unit: '%VWC', color: '#27ae60', status: '● Optimal range', statusClass: 'text-[#27ae60]' },
                { label: 'Cold Room A', value: 4.2, unit: '°C', color: '#2980b9', status: '● Within setpoint', statusClass: 'text-[#27ae60]' },
                { label: 'Humidity A', value: 91, unit: '%RH', color: '#e67e22', status: '▲ Slightly elevated', statusClass: 'text-[#e67e22]' },
              ].map(({ label, value, unit, color, status, statusClass }, i) => (
                <div key={label} className={`p-4 ${i % 2 === 0 ? 'border-r' : ''} border-b border-brand-border`}>
                  <div className="text-[0.65rem] uppercase tracking-[0.08em] text-brand-grey mb-1">{label}</div>
                  <div className="text-[1.5rem] font-extrabold leading-none tracking-[-0.02em]" style={{ color }}>
                    {value}<span className="text-[0.75rem] font-normal text-brand-grey">{unit}</span>
                  </div>
                  <div className={`text-[0.68rem] mt-1 font-medium ${statusClass}`}>{status}</div>
                </div>
              ))}
            </div>

            {/* Alert */}
            <div className="m-3 p-[0.65rem_0.85rem] bg-[#fff5f5] border border-[#f5c6c6] border-l-[3px] border-l-brand-red rounded flex gap-2 items-center">
              <span className="text-[0.9rem]">⚠️</span>
              <div>
                <div className="text-[0.72rem] font-semibold text-brand-red mb-0.5">Zone 4 — Soil moisture low</div>
                <div className="text-[0.68rem] text-brand-grey">32% VWC · Below 35% threshold · 8 min ago</div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-5 py-[0.6rem] bg-light flex justify-between text-[0.65rem] text-brand-grey border-t border-brand-border">
              <span>Last sync: 2 min ago</span>
              <span>4 sensors active · 1 alert</span>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge band */}
      <div className="bg-lime px-[5%] py-4 flex items-center gap-8 overflow-hidden flex-wrap">
        <div className="text-[0.7rem] font-extrabold tracking-[0.12em] uppercase text-brand-black whitespace-nowrap border-r-2 border-black/15 pr-8 shrink-0">
          SA Reality
        </div>
        <div className="flex gap-10 flex-wrap">
          {challenges.map(({ icon, bold, text }) => (
            <div key={bold} className="text-[0.8rem] font-medium text-dark flex items-center gap-1.5">
              {icon} <strong className="font-extrabold">{bold}</strong> {text}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
