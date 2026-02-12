"use client"

import { Zap, ArrowDown } from "lucide-react"
import Image from "next/image"
import { useCheckout } from "./checkout-provider"

export function HeroSection() {
  const { openCheckout } = useCheckout()
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(82_77%_45%/0.08)_0%,transparent_70%)]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Copy */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 self-center lg:self-start">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Nuevo lanzamiento
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase leading-[0.9] tracking-tight text-balance">
              <span className="text-foreground">Potencia</span>
              <br />
              <span className="text-primary">Tu Fuerza</span>
              <br />
              <span className="text-foreground">Al Maximo</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 leading-relaxed">
              Creatina Monohidratada <strong className="text-foreground">Grado USP</strong> con pureza del 99.5%.
              60 servicios de rendimiento puro en cada envase de 300g.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button
                onClick={openCheckout}
                className="animate-pulse-glow w-full sm:w-auto rounded-full bg-primary px-8 py-4 text-center font-bold uppercase tracking-wider text-primary-foreground text-lg hover:brightness-110 transition-all"
              >
                Comprar Ahora - $89.900
              </button>
              <a
                href="#beneficios"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Conoce los beneficios
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex items-center gap-6 justify-center lg:justify-start pt-4">
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-display text-3xl font-bold text-primary">60</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Servicios</span>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-display text-3xl font-bold text-primary">300g</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Peso Neto</span>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-display text-3xl font-bold text-primary">99.5%</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Pureza</span>
              </div>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] rounded-full bg-primary/10 blur-2xl" />
            </div>
            <div className="animate-float relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cEXzQ9B6UOaelid3BAxk46CxKuercC.png"
                alt="Creatina Monohidratada Essentials Ingredients - 300g 60 servicios"
                width={600}
                height={600}
                className="relative z-10 drop-shadow-2xl w-full h-auto max-w-[600px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
