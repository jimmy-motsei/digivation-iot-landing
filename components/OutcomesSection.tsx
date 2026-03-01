import Reveal from './Reveal'

const outcomes = [
  {
    num: '15%+',
    title: 'Water Savings',
    desc: "Data-driven irrigation eliminates guesswork over-watering. Critical in SA's water-stressed farming regions where every kilolitre counts.",
    delay: undefined,
  },
  {
    num: '25%+',
    title: 'Cold Chain Loss Reduction',
    desc: 'Real-time alerts catch temperature excursions before produce is compromised. Protecting your post-harvest margins around the clock.',
    delay: 1 as const,
  },
  {
    num: '<18mo',
    title: 'Target Payback Period',
    desc: 'Hardware and installation costs recovered within 18 months through reduced losses, water savings, and labour efficiencies.',
    delay: 2 as const,
  },
  {
    num: '24/7',
    title: 'Continuous Visibility',
    desc: 'No more relying on manual checks. Every sensor reports every 15 minutes — day and night, load shedding or not.',
    delay: 3 as const,
  },
]

export default function OutcomesSection() {
  return (
    <section className="px-[5%] py-20 bg-white">
      <div className="text-center max-w-[640px] mx-auto mb-12">
        <Reveal className="inline-flex items-center justify-center gap-2 text-[0.72rem] font-bold tracking-[0.14em] uppercase text-lime-dark mb-[0.85rem] before:content-[''] before:w-5 before:h-0.5 before:bg-lime before:inline-block">
          Measurable Outcomes
        </Reveal>
        <Reveal delay={1} as="h2" className="text-[clamp(1.7rem,3vw,2.6rem)] font-extrabold tracking-[-0.025em] leading-[1.1] text-dark mb-4">
          ROI that shows up in your season-end numbers.
        </Reveal>
        <Reveal delay={2} as="p" className="text-base leading-[1.75] text-mid mx-auto">
          Conservative estimates based on comparable precision agriculture deployments in water-stressed agricultural regions.
          Target payback period under 18 months.
        </Reveal>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-brand-border rounded-md overflow-hidden mt-12">
        {outcomes.map(({ num, title, desc, delay }, i) => (
          <Reveal
            key={title}
            delay={delay}
            className={`px-8 py-10 hover:bg-lime-bg transition-colors ${i < outcomes.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-brand-border' : ''}`}
          >
            <div className="text-[2.8rem] font-extrabold text-lime-dark leading-none tracking-[-0.03em] mb-1.5">{num}</div>
            <div className="text-[0.9rem] font-bold text-dark mb-1.5">{title}</div>
            <div className="text-[0.8rem] leading-[1.6] text-brand-grey">{desc}</div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
