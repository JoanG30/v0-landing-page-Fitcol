"use client"

import Image from "next/image"
import { ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react"
import { useCheckout } from "./checkout-provider"

export function CtaSection() {
  const { openCheckout } = useCheckout()
  return (
    <section id="comprar" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(82_77%_45%/0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-primary/20 bg-card overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Product image side */}
            <div className="relative flex items-center justify-center p-8 lg:p-12 bg-[radial-gradient(circle_at_center,hsl(82_77%_45%/0.08)_0%,transparent_70%)]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5ntHMWrqPc8ckANQhMuUus84P9FwD8.png"
                alt="Creatina Monohidratada Essentials Ingredients - Informacion nutricional y de ingredientes"
                width={450}
                height={450}
                className="drop-shadow-xl w-full h-auto max-w-[450px]"
              />
            </div>

            {/* Purchase side */}
            <div className="flex flex-col justify-center p-8 lg:p-12 gap-6">
              <div>
                <span className="inline-block rounded-full bg-primary/10 border border-primary/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                  Oferta Limitada
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight">
                  <span className="text-foreground">{'Lleva tu '}</span>
                  <span className="text-primary">creatina hoy</span>
                </h2>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="font-display text-5xl font-bold text-primary">$89.900</span>
                <span className="text-lg text-muted-foreground line-through">$109.900</span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase">
                  -18%
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                300g de creatina monohidratada pura grado USP. 60 servicios de 5g cada uno para potenciar tu rendimiento al maximo.
              </p>

              <button
                onClick={openCheckout}
                className="animate-pulse-glow flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 font-bold uppercase tracking-wider text-primary-foreground text-lg hover:brightness-110 transition-all"
              >
                <ShoppingCart className="h-5 w-5" />
                Comprar Ahora
              </button>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="flex flex-col items-center gap-2 text-center">
                  <Truck className="h-5 w-5 text-primary" />
                  <span className="text-xs text-muted-foreground">{'Envio a todo Colombia'}</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-xs text-muted-foreground">Pago Seguro</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <RotateCcw className="h-5 w-5 text-primary" />
                  <span className="text-xs text-muted-foreground">Garantia de Calidad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
