import type { Metadata, Viewport } from 'next'
import { Inter, Oswald } from 'next/font/google'
import { CheckoutProvider } from '@/components/checkout-provider'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' })

export const metadata: Metadata = {
  title: 'Creatina Monohidratada | FitpowerCOL',
  description:
    'Creatina Monohidratada Grado USP – 60 servicios, 300 g. Aumenta tu fuerza, energía y recuperación con materia prima pura de grado farmacéutico.',
}

export const viewport: Viewport = {
  themeColor: '#0d0d0d',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <meta
          name="facebook-domain-verification"
          content="ekhvpftxaiv47exdadq1co1yfrme3h"
        />
      </head>
      <body
        className={`${_inter.variable} ${_oswald.variable} font-sans antialiased`}
      >
        <CheckoutProvider>{children}</CheckoutProvider>
      </body>
    </html>
  )
}
