'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Top bar */}
      <div className="bg-dark py-[0.4rem] px-[5%] flex justify-end gap-6">
        {[
          { href: 'https://digivation.global/', label: 'Home' },
          { href: 'https://digivation.global/#About', label: 'About' },
          { href: 'https://digivation.global/news/', label: 'News' },
          { href: 'https://digivation.global/contact/', label: 'Contact' },
        ].map(({ href, label }) => (
          <a
            key={label}
            href={href}
            className="text-white/50 text-[0.75rem] font-normal tracking-[0.03em] hover:text-lime transition-colors no-underline"
          >
            {label}
          </a>
        ))}
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 z-[1000] bg-white border-b-[3px] border-lime px-[5%] flex items-center justify-between min-h-[72px] shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
        <Link href="https://digivation.global/" className="flex-shrink-0">
          <Image
            src="/digivation-logo-transparent.png"
            alt="Digivation"
            width={120}
            height={32}
            style={{ height: '32px', width: 'auto' }}
            priority
          />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-0 list-none m-0 p-0">
          {[
            { href: 'https://digivation.global/', label: 'Home' },
            { href: 'https://digivation.global/#About', label: 'About' },
          ].map(({ href, label }) => (
            <li key={label}>
              <a
                href={href}
                className="block px-[1.1rem] leading-[72px] text-dark text-[0.82rem] font-medium tracking-[0.04em] uppercase hover:text-lime-dark hover:bg-light transition-colors whitespace-nowrap no-underline"
              >
                {label}
              </a>
            </li>
          ))}

          {/* Projects dropdown */}
          <li className="relative group">
            <a
              href="#"
              className="block px-[1.1rem] leading-[72px] text-dark text-[0.82rem] font-medium tracking-[0.04em] uppercase group-hover:text-lime-dark group-hover:bg-light transition-colors whitespace-nowrap no-underline"
            >
              Projects ▾
            </a>
            <ul className="absolute top-full left-0 bg-white border-t-[3px] border-lime shadow-[0_8px_24px_rgba(0,0,0,0.12)] min-w-[200px] hidden group-hover:block list-none m-0 p-0 z-50">
              {[
                { href: 'https://digivation.global/surveys/', label: 'Surveys' },
                { href: 'https://digivation.global/iot-solutions/', label: 'IOT Solutions' },
                { href: 'https://digivation.global/radio-frequency/', label: 'Radio Frequency' },
                { href: 'https://digivation.global/point-to-point/', label: 'Point to Point' },
                { href: 'https://digivation.global/cloud-services/', label: 'Cloud Services' },
                { href: 'https://digivation.global/maintenance-services/', label: 'Maintenance' },
              ].map(({ href, label }, i, arr) => (
                <li key={label}>
                  <a
                    href={href}
                    className={`block px-5 py-[0.7rem] text-[0.8rem] text-mid font-normal hover:text-lime-dark hover:bg-light hover:pl-[1.6rem] transition-all no-underline ${i < arr.length - 1 ? 'border-b border-brand-border' : ''}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          {[
            { href: 'https://digivation.global/savvy-solutions/', label: 'Savvy Solutions' },
            { href: 'https://digivation.global/store/', label: 'Store' },
          ].map(({ href, label }) => (
            <li key={label}>
              <a
                href={href}
                className="block px-[1.1rem] leading-[72px] text-dark text-[0.82rem] font-medium tracking-[0.04em] uppercase hover:text-lime-dark hover:bg-light transition-colors whitespace-nowrap no-underline"
              >
                {label}
              </a>
            </li>
          ))}

          <li className="ml-4">
            <a
              href="#contact"
              className="bg-lime text-brand-black px-[1.4rem] py-[0.6rem] rounded-[3px] text-[0.82rem] font-bold tracking-[0.06em] uppercase hover:bg-lime-dark transition-colors no-underline"
            >
              Request a Demo
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-dark" />
          <span className="block w-6 h-0.5 bg-dark" />
          <span className="block w-6 h-0.5 bg-dark" />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-brand-border shadow-lg z-[999] relative">
          {[
            { href: 'https://digivation.global/', label: 'Home' },
            { href: 'https://digivation.global/#About', label: 'About' },
            { href: 'https://digivation.global/iot-solutions/', label: 'IOT Solutions' },
            { href: 'https://digivation.global/savvy-solutions/', label: 'Savvy Solutions' },
            { href: 'https://digivation.global/store/', label: 'Store' },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="block px-6 py-3 text-[0.85rem] text-dark font-medium border-b border-brand-border hover:bg-light hover:text-lime-dark transition-colors no-underline"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="block mx-4 my-3 bg-lime text-center text-brand-black px-4 py-3 rounded-[3px] text-[0.85rem] font-bold uppercase hover:bg-lime-dark transition-colors no-underline"
          >
            Request a Demo
          </a>
        </div>
      )}
    </>
  )
}
