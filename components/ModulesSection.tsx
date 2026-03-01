import Reveal from './Reveal'

const modules = [
  {
    icon: '💧',
    title: 'Irrigation Tank Monitoring',
    desc: 'Continuous ultrasonic water level sensing with SMS and app alerts before you run dry. Protect your irrigation pumps from dry-running damage with proactive low-level warnings.',
    tags: ['Ultrasonic sensor', 'Level % + litres', 'Pump protection', 'SMS alerts'],
    specs: [{ val: '15 min', label: 'Update interval' }, { val: '90 days', label: 'Data history' }],
    featured: false,
    delay: 1 as const,
  },
  {
    icon: '🌱',
    title: 'Soil Monitoring',
    desc: 'Volumetric water content (VWC), temperature, and electrical conductivity across up to 4 independent zones. Irrigate only when the soil tells you to — no guessing.',
    tags: ['Moisture %VWC', 'Temperature', 'EC / Salinity', '4 zones'],
    specs: [{ val: '±3%', label: 'VWC accuracy' }, { val: '4 zones', label: 'Standard config' }],
    featured: false,
    delay: 2 as const,
  },
  {
    icon: '❄️',
    title: 'Cold Room Monitoring',
    desc: '24/7 temperature and humidity surveillance with breach alerts in under 3 minutes. Protect your post-harvest margins and maintain automatic food safety compliance logs.',
    tags: ['-20 to +30°C', '±0.5°C accuracy', 'Compliance logs', 'Food safety'],
    specs: [{ val: '<3 min', label: 'Alert delivery' }, { val: '±0.5°C', label: 'Temp accuracy' }],
    featured: false,
    delay: 3 as const,
  },
  {
    icon: '🐄',
    title: 'Livestock Monitoring',
    desc: 'GPS location tracking with configurable geofence alerts. Know immediately when animals breach boundaries or show anomalous activity patterns indicating distress or theft.',
    tags: ['GPS tracking', 'Geofencing', 'Activity alerts', 'Theft protection'],
    specs: [],
    featured: false,
    delay: 1 as const,
  },
  {
    icon: '🌿',
    title: 'Crop Health & Environmental Monitoring',
    desc: 'Ambient temperature, humidity, and rule-based disease pressure scoring at canopy level. Catch the conditions that precede fungal outbreaks or heat stress before they become crop losses. Shareable data exports for your agronomist\'s advisory workflow.',
    tags: ['Canopy sensors', 'Disease risk scoring', 'L / M / H risk levels', 'Agronomist export', 'Historical trends'],
    specs: [{ val: '±1°C', label: 'Temp accuracy' }, { val: 'L/M/H', label: 'Risk scoring' }, { val: 'CSV', label: 'Agronomy export' }],
    featured: true,
    delay: 2 as const,
  },
]

export default function ModulesSection() {
  return (
    <section className="px-[5%] py-20 bg-site-bg" id="modules">
      <div className="mb-12">
        <Reveal className="inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.14em] uppercase text-lime-dark mb-[0.85rem] before:content-[''] before:w-5 before:h-0.5 before:bg-lime before:inline-block">
          Our Solution
        </Reveal>
        <Reveal delay={1} as="h2" className="text-[clamp(1.7rem,3vw,2.6rem)] font-extrabold tracking-[-0.025em] leading-[1.1] text-dark">
          Five integrated monitoring modules.<br />One unified platform.
        </Reveal>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map(({ icon, title, desc, tags, specs, featured, delay }) => (
          <Reveal
            key={title}
            delay={delay}
            className={`bg-white border border-brand-border rounded-md p-8 border-t-[3px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all flex flex-col ${
              featured ? 'border-t-lime bg-lime-bg lg:col-span-2' : 'border-t-brand-border hover:border-t-lime'
            }`}
          >
            <span className="text-[2rem] mb-[1.1rem] block">{icon}</span>
            <div className="text-[1.05rem] font-bold text-dark mb-[0.65rem] tracking-[-0.01em]">{title}</div>
            <div className="text-[0.85rem] leading-[1.65] text-mid mb-5">{desc}</div>

            <div className="flex flex-wrap gap-1.5 mt-auto">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-light border border-brand-border text-mid text-[0.68rem] font-medium px-2.5 py-1 rounded-sm uppercase tracking-[0.04em]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {specs.length > 0 && (
              <div className="flex gap-5 pt-4 border-t border-brand-border mt-5">
                {specs.map(({ val, label }) => (
                  <div key={label}>
                    <div className="text-[1.1rem] font-extrabold text-lime-dark leading-none">{val}</div>
                    <div className="text-[0.65rem] uppercase tracking-[0.06em] text-brand-grey mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
