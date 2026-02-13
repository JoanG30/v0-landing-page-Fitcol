import type { Metadata, Viewport } from 'next'
import { Inter, Oswald } from 'next/font/google'
import { CheckoutProvider } from '@/components/checkout-provider'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' })

export const metadata: Metadata = {
  title: 'Creatina Monohidratada | FitpoweCOL',
  description: 'Creatina Monohidratada Grado USP - 60 servicios, 300g. Aumenta tu fuerza, energia y recuperacion con materia prima pura de grado farmaceutico.',
}

export const viewport: Viewport = {
  themeColor: '#0d0d0d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${_inter.variable} ${_oswald.variable} font-sans antialiased`}>
        <CheckoutProvider>{children}</CheckoutProvider>
      </body>
    </html>
  )
}
