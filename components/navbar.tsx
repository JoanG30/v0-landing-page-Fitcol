"use client"

import { useState } from "react"
import { Menu, X, ShoppingCart } from "lucide-react"
import { useCheckout } from "./checkout-provider"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { openCheckout } = useCheckout()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">F</span>
            </div>
            <span className="font-display text-lg font-bold uppercase tracking-wider text-foreground">
              FitpoweCOL
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#beneficios" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Beneficios
            </a>
            <a href="#producto" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Producto
            </a>
            <a href="#testimonios" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Testimonios
            </a>
            <button
              onClick={openCheckout}
              className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground hover:brightness-110 transition-all"
            >
              <ShoppingCart className="h-4 w-4" />
              Comprar Ahora
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="flex flex-col gap-4 px-4 py-6">
            <a href="#beneficios" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Beneficios
            </a>
            <a href="#producto" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Producto
            </a>
            <a href="#testimonios" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Testimonios
            </a>
            <button
              onClick={() => {
                setIsOpen(false)
                openCheckout()
              }}
              className="flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground"
            >
              <ShoppingCart className="h-4 w-4" />
              Comprar Ahora
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
