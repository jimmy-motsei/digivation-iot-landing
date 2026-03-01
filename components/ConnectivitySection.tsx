import Reveal from './Reveal'

const features = [
  {
    icon: '📡',
    title: 'LoRaWAN Long-Range Sensor Network',
    desc: 'Sensors transmit over 2km with no Wi-Fi required. Battery life exceeds 5 years. The gateway handles all connectivity to the cloud independently of your farm\'s internet.',
    delay: 2 as const,
  },
  {
    icon: '⚡',
    title: 'Load Shedding Proof',
    desc: 'Gateway UPS provides minimum 4-hour backup. Sensor nodes run on solar-charged batteries. Critical alerts still fire during Stage 6 — no cloud dependency required.',
    delay: 3 as const,
  },
  {
    icon: '📵',
    title: '72-Hour Offline Data Buffer',
    desc: 'Data is logged locally during any connectivity loss. The moment your connection restores — via Ethernet, Wi-Fi, or LTE — everything syncs automatically. Zero data loss, guaranteed.',
    delay: 4 as const,
  },
]

const layers = [
  { icon: '🌱', title: 'Sensor Nodes · LoRaWAN', sub: '2km+ range · 5yr battery · IP67 rated · Solar option', badge: 'Field', badgeClass: 'bg-lime/20 text-lime border border-lime/30' },
  { icon: '📡', title: 'Industrial IoT Gateway', sub: 'Local edge processing · 72h offline buffer · UPS backed', badge: 'Gateway', badgeClass: 'bg-lime/20 text-lime border border-lime/30' },
  { icon: '🌐', title: 'Ethernet Backhaul', sub: 'Primary connectivity — LAN / fibre / ADSL', badge: 'Primary', badgeClass: 'bg-lime/20 text-lime border border-lime/30' },
  { icon: '📶', title: 'Wi-Fi Backhaul', sub: 'Auto-failover from Ethernet · Seamless switchover', badge: 'Failover', badgeClass: 'bg-[#e67e22]/15 text-[#e67e22] border border-[#e67e22]/30' },
  { icon: '📱', title: 'LTE / 4G Cellular Backhaul', sub: 'Tertiary · All major SA networks · Auto-failover', badge: 'Failover', badgeClass: 'bg-[#e67e22]/15 text-[#e67e22] border border-[#e67e22]/30' },
  { icon: '☁️', title: 'Cloud Platform & Dashboard', sub: 'Web + mobile · 99.5% uptime SLA · SA data residency', badge: 'SA Hosted', badgeClass: 'bg-lime/10 text-lime-light border border-lime/20' },
]

export default function ConnectivitySection() {
  return (
    <section className="px-[5%] py-20 bg-dark">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left */}
        <div>
          <Reveal className="inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.14em] uppercase text-lime mb-[0.85rem] before:content-[''] before:w-5 before:h-0.5 before:bg-lime before:inline-block">
            Built for South Africa
          </Reveal>
          <Reveal delay={1} as="h2" className="text-[clamp(1.7rem,3vw,2.6rem)] font-extrabold tracking-[-0.025em] leading-[1.1] text-white mb-4">
            Works where your farm is —<br />not where the internet is.
          </Reveal>
          <Reveal delay={2} as="p" className="text-base leading-[1.75] text-white/60 mb-10 max-w-[560px]">
            Most IoT platforms are designed for European and North American farms with reliable power and fibre connectivity.
            We engineered this solution specifically for the South African agricultural reality: remote terrain, load shedding,
            and patchy cellular coverage.
          </Reveal>

          <div className="flex flex-col gap-7">
            {features.map(({ icon, title, desc, delay }) => (
              <Reveal key={title} delay={delay} className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-md bg-lime/10 border border-lime/20 flex items-center justify-center text-[1.1rem] shrink-0">
                  {icon}
                </div>
                <div>
                  <div className="text-[0.95rem] font-bold text-white mb-1">{title}</div>
                  <div className="text-[0.82rem] text-white/45 leading-[1.6]">{desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right — connectivity stack */}
        <Reveal delay={1} className="flex flex-col border border-white/10 rounded-lg overflow-hidden">
          {layers.map(({ icon, title, sub, badge, badgeClass }, i) => (
            <div
              key={title}
              className={`flex items-center gap-4 px-[1.4rem] py-[1.1rem] hover:bg-white/[0.03] transition-colors ${i < layers.length - 1 ? 'border-b border-white/[0.06]' : ''}`}
            >
              <div className="w-[42px] h-[42px] rounded-full bg-lime/[0.12] border border-lime/25 flex items-center justify-center text-[1.1rem] shrink-0">
                {icon}
              </div>
              <div className="flex-1">
                <div className="text-[0.9rem] font-semibold text-white mb-0.5">{title}</div>
                <div className="text-[0.75rem] text-white/40 leading-[1.4]">{sub}</div>
              </div>
              <span className={`text-[0.62rem] font-bold px-[0.55rem] py-[0.2rem] rounded-sm uppercase tracking-[0.07em] shrink-0 ${badgeClass}`}>
                {badge}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
