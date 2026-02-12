"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { CheckoutModal } from "./checkout-modal"

const CheckoutContext = createContext<{ openCheckout: () => void }>({
  openCheckout: () => {},
})

export function useCheckout() {
  return useContext(CheckoutContext)
}

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <CheckoutContext.Provider value={{ openCheckout: () => setIsOpen(true) }}>
      {children}
      <CheckoutModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </CheckoutContext.Provider>
  )
}
