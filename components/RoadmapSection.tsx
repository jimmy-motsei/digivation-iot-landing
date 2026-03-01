import Reveal from './Reveal'

const phases = [
  {
    num: '01',
    phaseLabel: 'Phase 1 — Available Now',
    phaseColor: 'text-lime-dark',
    icon: '🌱',
    title: 'Foundation',
    when: 'Q2 2026',
    desc: 'Tank monitoring, soil sensing, cold room alerts, SMS notifications and web dashboard. Operational within 2 hours of installation.',
    delay: 1 as const,
  },
  {
    num: '02',
    phaseLabel: 'Phase 2 — Growth',
    phaseColor: 'text-[#e67e22]',
    icon: '📱',
    title: 'Expand',
    when: 'Q3 2026',
    desc: 'Livestock GPS tracking, crop health monitoring, mobile app, and multi-farm dashboard for operations with multiple properties.',
    delay: 2 as const,
  },
  {
    num: '03',
    phaseLabel: 'Phase 3 — Intelligence',
    phaseColor: 'text-mid',
    icon: '🤖',
    title: 'Optimise',
    when: 'Q4 2026',
    desc: 'ML-driven irrigation recommendations, predictive equipment maintenance, and agronomist data portal with export tools.',
    delay: 3 as const,
  },
  {
    num: '04',
    phaseLabel: 'Phase 4 — Scale',
    phaseColor: 'text-brand-grey',
    icon: '🌍',
    title: 'Integrate',
    when: 'Q1 2027',
    desc: 'API integrations with farm management software, channel partner programme, and multi-region expansion across sub-Saharan Africa.',
    delay: 4 as const,
  },
]

export default function RoadmapSection() {
  return (
    <section className="px-[5%] py-20 bg-light">
      <div className="text-center max-w-[640px] mx-auto mb-12">
        <Reveal className="inline-flex items-center justify-center gap-2 text-[0.72rem] font-bold tracking-[0.14em] uppercase text-lime-dark mb-[0.85rem] before:content-[''] before:w-5 before:h-0.5 before:bg-lime before:inline-block">
          Product Roadmap
        </Reveal>
        <Reveal delay={1} as="h2" className="text-[clamp(1.7rem,3vw,2.6rem)] font-extrabold tracking-[-0.025em] leading-[1.1] text-dark mb-4">
          A platform that grows with your farm.
        </Reveal>
        <Reveal delay={2} as="p" className="text-base leading-[1.75] text-mid mx-auto">
          Start with what you need today. Add capability as your operation expands — the infrastructure is already in place.
        </Reveal>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-brand-border rounded-md overflow-hidden mt-12">
        {phases.map(({ num, phaseLabel, phaseColor, icon, title, when, desc, delay }, i) => (
          <Reveal
            key={title}
            delay={delay}
            className={`px-7 py-8 relative hover:bg-white transition-colors ${i < phases.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-brand-border' : ''}`}
          >
            <span className="text-[3.5rem] font-extrabold text-brand-border leading-none absolute top-4 right-5 tracking-[-0.04em] select-none">
              {num}
            </span>
            <div className={`text-[0.65rem] font-bold tracking-[0.12em] uppercase mb-2.5 ${phaseColor}`}>
              {phaseLabel}
            </div>
            <span className="text-[1.6rem] block mb-3">{icon}</span>
            <div className="text-[1rem] font-bold text-dark mb-1">{title}</div>
            <div className="text-[0.72rem] text-brand-grey mb-3 italic">{when}</div>
            <div className="text-[0.8rem] leading-[1.6] text-brand-grey">{desc}</div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
