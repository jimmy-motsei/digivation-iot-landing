import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-archivo',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://digivation-iot-landing.vercel.app'),
  title: 'Smart Agricultural IoT Monitoring | Digivation',
  description:
    'Industrial-grade IoT sensors for South African farms — real-time monitoring of water, soil, cold storage and livestock.',
  openGraph: {
    title: 'Smart Agricultural IoT Monitoring | Digivation',
    description:
      'Industrial-grade IoT sensors for South African farms — real-time monitoring of water, soil, cold storage and livestock.',
    url: 'https://digivation-iot-landing.vercel.app',
    siteName: 'Digivation',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Agricultural IoT Monitoring | Digivation',
    description:
      'Industrial-grade IoT sensors for South African farms — real-time monitoring of water, soil, cold storage and livestock.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>{children}</body>
    </html>
  )
}
