import Image from 'next/image'

const links = [
  { href: 'https://digivation.global/', label: 'Home' },
  { href: 'https://digivation.global/#About', label: 'About' },
  { href: 'https://digivation.global/iot-solutions/', label: 'IOT Solutions' },
  { href: 'https://digivation.global/contact/', label: 'Contact' },
  { href: 'https://digivation.global/privacy-policy/', label: 'Privacy Policy' },
  { href: 'https://digivation.global/data-request-process/', label: 'Data Request' },
]

export default function Footer() {
  return (
    <footer className="bg-dark2 px-[5%] py-10 border-t-[3px] border-lime grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] items-center gap-8 text-center lg:text-left">
      <div>
        <Image
          src="/digivation-logo.png"
          alt="Digivation"
          width={96}
          height={24}
          style={{ height: '24px', width: 'auto', filter: 'brightness(0) invert(1)' }}
          className="mx-auto lg:mx-0"
        />
      </div>

      <ul className="flex flex-wrap gap-6 list-none m-0 p-0 justify-center">
        {links.map(({ href, label }) => (
          <li key={label}>
            <a
              href={href}
              className="text-[0.75rem] text-white/40 font-normal uppercase tracking-[0.06em] hover:text-lime transition-colors no-underline"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className="text-[0.72rem] text-white/25 text-center lg:text-right">
        © Digivation 2026 · All rights reserved
      </div>
    </footer>
  )
}
