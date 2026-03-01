import Reveal from './Reveal'

const problems = [
  {
    icon: '💧',
    title: 'Over-irrigation is wasting your water and money',
    desc: 'Without soil moisture data, South African farmers over-irrigate by an estimated 20–35% — a critical problem in one of the world\'s most water-stressed countries.',
  },
  {
    icon: '❄️',
    title: 'Cold chain failures happen after hours',
    desc: 'Temperature excursions occur overnight or over weekends. Without real-time alerts, you walk in the next morning to damaged stock and food safety compliance failures.',
  },
  {
    icon: '⚙️',
    title: 'Equipment failure surprises you every time',
    desc: 'Pump failures, empty tanks, and motor burnout cost you both the repair bill and the yield impact. Predictive sensor data changes reactive into proactive.',
  },
  {
    icon: '👷',
    title: 'Manual checking costs you labour every day',
    desc: 'Field checks, tank inspections, and manual logs consume labour hours that could be redirected to value-adding activities. Automate the data, deploy the people better.',
  },
]

export default function ProblemSection() {
  return (
    <section className="px-[5%] py-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left copy */}
        <div>
          <Reveal as="div" className="inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.14em] uppercase text-lime-dark mb-[0.85rem] before:content-[''] before:w-5 before:h-0.5 before:bg-lime before:inline-block">
            The Problem
          </Reveal>
          <Reveal delay={1} as="h2" className="text-[clamp(1.7rem,3vw,2.6rem)] font-extrabold tracking-[-0.025em] leading-[1.1] text-dark mb-4">
            You're managing a multi-million rand operation with yesterday's information.
          </Reveal>
          <Reveal delay={2} as="p" className="text-base leading-[1.75] text-mid max-w-[560px] mb-4">
            Farm operations are largely managed reactively — problems are discovered after damage has occurred, not before.
            Manual checks are infrequent, inconsistent, and incapable of providing the 24/7 visibility modern farming demands.
            By the time you discover a pump failure, cold room breach, or irrigation leak, the damage is done.
          </Reveal>
          <Reveal delay={3} as="p" className="text-base leading-[1.75] text-mid max-w-[560px]">
            The Digivation Smart Agricultural IoT Solution moves your operation from{' '}
            <strong className="font-bold text-dark">reactive management to proactive control.</strong>
          </Reveal>
        </div>

        {/* Right cards */}
        <Reveal delay={1} className="flex flex-col">
          {problems.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className={`flex gap-5 px-6 py-[1.35rem] border-b border-brand-border border-l-[3px] border-l-transparent hover:border-l-lime hover:bg-light hover:pl-7 transition-all cursor-default ${i === 0 ? 'border-t border-brand-border' : ''}`}
            >
              <div className="text-[1.5rem] shrink-0 mt-0.5">{icon}</div>
              <div>
                <div className="text-[0.95rem] font-bold text-dark mb-1">{title}</div>
                <div className="text-[0.84rem] leading-[1.6] text-brand-grey">{desc}</div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
