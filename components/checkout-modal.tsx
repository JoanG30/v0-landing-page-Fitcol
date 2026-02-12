"use client"

import { useState, type FormEvent } from "react"
import { X, ShoppingCart, Truck, CreditCard, ChevronDown, CheckCircle2 } from "lucide-react"

const DEPARTAMENTOS = [
  "Amazonas", "Antioquia", "Arauca", "Atlantico", "Bogota D.C.", "Bolivar", "Boyaca",
  "Caldas", "Caqueta", "Casanare", "Cauca", "Cesar", "Choco", "Cordoba", "Cundinamarca",
  "Guainia", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Narino",
  "Norte de Santander", "Putumayo", "Quindio", "Risaralda", "San Andres y Providencia",
  "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupes", "Vichada",
]

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [step, setStep] = useState<"form" | "confirm">("form")
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    departamento: "",
    ciudad: "",
    barrio: "",
    nomenclatura: "",
    tipoVivienda: "casa",
    detalleVivienda: "",
    correo: "",
    metodoPago: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setStep("confirm")
  }

  const handleConfirmAndRedirect = () => {
    const direccionCompleta = `${formData.nomenclatura}, ${formData.barrio}, ${formData.ciudad}, ${formData.departamento} - ${formData.tipoVivienda === "apto" ? `Apto ${formData.detalleVivienda}` : "Casa"}`

    const resumen = [
      `*PEDIDO - Creatina Monohidratada Essentials*`,
      ``,
      `*Producto:* Creatina Monohidratada 300g`,
      `*Precio:* $89.900 COP`,
      ``,
      `*--- Datos de Envio ---*`,
      `*Nombre:* ${formData.nombre} ${formData.apellido}`,
      `*Direccion:* ${direccionCompleta}`,
      formData.correo ? `*Correo:* ${formData.correo}` : "",
      ``,
      `*Metodo de Pago:* ${formData.metodoPago === "contraentrega" ? "Pago Contraentrega" : "Pago Anticipado (Transferencia)"}`,
    ]
      .filter(Boolean)
      .join("%0A")

    const waUrl = `https://wa.me/573004739332?text=${resumen}`
    window.open(waUrl, "_blank")
    onClose()
    setStep("form")
    setFormData({
      nombre: "",
      apellido: "",
      departamento: "",
      ciudad: "",
      barrio: "",
      nomenclatura: "",
      tipoVivienda: "casa",
      detalleVivienda: "",
      correo: "",
      metodoPago: "",
    })
  }

  const handleClose = () => {
    onClose()
    setStep("form")
  }

  if (!isOpen) return null

  const isFormValid =
    formData.nombre.trim() &&
    formData.apellido.trim() &&
    formData.departamento &&
    formData.ciudad.trim() &&
    formData.barrio.trim() &&
    formData.nomenclatura.trim() &&
    formData.metodoPago

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-primary/20 bg-card shadow-2xl shadow-primary/5">
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-border bg-card px-6 py-4 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <ShoppingCart className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-foreground">
                {step === "form" ? "Finalizar Compra" : "Confirmar Pedido"}
              </h3>
              <p className="text-xs text-muted-foreground">Creatina Monohidratada 300g</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Cerrar formulario"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {step === "form" ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6">
            {/* Product summary */}
            <div className="flex items-center gap-4 rounded-xl bg-secondary/50 p-4">
              <div className="h-14 w-14 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="font-display text-xl font-bold text-primary">e</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">Creatina Monohidratada 300g</p>
                <p className="text-xs text-muted-foreground">60 servicios - Grado USP</p>
              </div>
              <span className="font-display text-xl font-bold text-primary shrink-0">$89.900</span>
            </div>

            {/* Nombre */}
            <fieldset className="flex flex-col gap-4">
              <legend className="flex items-center gap-2 text-sm font-semibold text-foreground uppercase tracking-wider mb-1">
                <span className="h-px flex-1 bg-border" />
                Datos Personales
                <span className="h-px flex-1 bg-border" />
              </legend>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="nombre" className="text-xs font-medium text-muted-foreground">
                    Nombre <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={(e) => handleChange("nombre", e.target.value)}
                    className="rounded-lg border border-border bg-secondary/50 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="apellido" className="text-xs font-medium text-muted-foreground">
                    Apellido <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="apellido"
                    type="text"
                    required
                    placeholder="Tu apellido"
                    value={formData.apellido}
                    onChange={(e) => handleChange("apellido", e.target.value)}
                    className="rounded-lg border border-border bg-secondary/50 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>
              </div>
            </fieldset>

            {/* Direccion */}
            <fieldset className="flex flex-col gap-4">
              <legend className="flex items-center gap-2 text-sm font-semibold text-foreground uppercase tracking-wider mb-1">
                <span className="h-px flex-1 bg-border" />
                Direccion de Envio
                <span className="h-px flex-1 bg-border" />
              </legend>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="departamento" className="text-xs font-medium text-muted-foreground">
                    Departamento <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="departamento"
                      required
                      value={formData.departamento}
                      onChange={(e) => handleChange("departamento", e.target.value)}
                      className="w-full appearance-none rounded-lg border border-border bg-secondary/50 px-3 py-2.5 pr-8 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    >
                      <option value="" disabled>Seleccionar</option>
                      {DEPARTAMENTOS.map((dep) => (
                        <option key={dep} value={dep} className="bg-card text-foreground">{dep}</option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="ciudad" className="text-xs font-medium text-muted-foreground">
                    Ciudad <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="ciudad"
                    type="text"
                    required
                    placeholder="Ej: Medellin"
                    value={formData.ciudad}
                    onChange={(e) => handleChange("ciudad", e.target.value)}
                    className="rounded-lg border border-border bg-secondary/50 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="barrio" className="text-xs font-medium text-muted-foreground">
                  Barrio <span className="text-destructive">*</span>
                </label>
                <input
                  id="barrio"
                  type="text"
                  required
                  placeholder="Nombre del barrio"
                  value={formData.barrio}
                  onChange={(e) => handleChange("barrio", e.target.value)}
                  className="rounded-lg border border-border bg-secondary/50 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="nomenclatura" className="text-xs font-medium text-muted-foreground">
                  Direccion / Nomenclatura <span className="text-destructive">*</span>
                </label>
                <input
                  id="nomenclatura"
                  type="text"
                  required
                  placeholder="Ej: Cra 45 #32-10"
                  value={formData.nomenclatura}
                  onChange={(e) => handleChange("nomenclatura", e.target.value)}
                  className="rounded-lg border border-border bg-secondary/50 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-medium text-muted-foreground">
                  Tipo de vivienda <span className="text-destructive">*</span>
                </span>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      handleChange("tipoVivienda", "casa")
                      handleChange("detalleVivienda", "")
                    }}
                    className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
                      formData.tipoVivienda === "casa"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-secondary/50 text-muted-foreground hover:border-muted-foreground"
                    }`}
                  >
                    Casa
                  </button>
                  <button
                    type="button"
                    onClick={() => handleChange("tipoVivienda", "apto")}
                    className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
                      formData.tipoVivienda === "apto"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-secondary/50 text-muted-foreground hover:border-muted-foreground"
                    }`}
                  >
                    Apartamento
                  </button>
                </div>
              </div>

              {formData.tipoVivienda === "apto" && (
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="detalleVivienda" className="text-xs font-medium text-muted-foreground">
                    Torre / Piso / Apartamento
                  </label>
                  <input
                    id="detalleVivienda"
                    type="text"
                    placeholder="Ej: Torre 3, Apto 502"
                    value={formData.detalleVivienda}
                    onChange={(e) => handleChange("detalleVivienda", e.target.value)}
                    className="rounded-lg border border-border bg-secondary/50 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>
              )}
            </fieldset>

            {/* Correo */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="correo" className="text-xs font-medium text-muted-foreground">
                Correo Electronico <span className="text-muted-foreground/50">(opcional)</span>
              </label>
              <input
                id="correo"
                type="email"
                placeholder="tu@correo.com"
                value={formData.correo}
                onChange={(e) => handleChange("correo", e.target.value)}
                className="rounded-lg border border-border bg-secondary/50 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              />
            </div>

            {/* Metodo de pago */}
            <fieldset className="flex flex-col gap-3">
              <legend className="flex items-center gap-2 text-sm font-semibold text-foreground uppercase tracking-wider mb-1">
                <span className="h-px flex-1 bg-border" />
                Metodo de Pago
                <span className="h-px flex-1 bg-border" />
              </legend>

              <button
                type="button"
                onClick={() => handleChange("metodoPago", "contraentrega")}
                className={`flex items-center gap-4 rounded-xl border p-4 text-left transition-all ${
                  formData.metodoPago === "contraentrega"
                    ? "border-primary bg-primary/5 ring-1 ring-primary"
                    : "border-border bg-secondary/30 hover:border-muted-foreground"
                }`}
              >
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                  formData.metodoPago === "contraentrega" ? "bg-primary/20" : "bg-secondary"
                }`}>
                  <Truck className={`h-5 w-5 ${formData.metodoPago === "contraentrega" ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-semibold ${formData.metodoPago === "contraentrega" ? "text-primary" : "text-foreground"}`}>
                    Pago Contraentrega
                  </p>
                  <p className="text-xs text-muted-foreground">Paga cuando recibas tu producto en la puerta de tu casa</p>
                </div>
                {formData.metodoPago === "contraentrega" && (
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                )}
              </button>

              <button
                type="button"
                onClick={() => handleChange("metodoPago", "anticipado")}
                className={`flex items-center gap-4 rounded-xl border p-4 text-left transition-all ${
                  formData.metodoPago === "anticipado"
                    ? "border-primary bg-primary/5 ring-1 ring-primary"
                    : "border-border bg-secondary/30 hover:border-muted-foreground"
                }`}
              >
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                  formData.metodoPago === "anticipado" ? "bg-primary/20" : "bg-secondary"
                }`}>
                  <CreditCard className={`h-5 w-5 ${formData.metodoPago === "anticipado" ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-semibold ${formData.metodoPago === "anticipado" ? "text-primary" : "text-foreground"}`}>
                    Pago Anticipado
                  </p>
                  <p className="text-xs text-muted-foreground">Transferencia bancaria antes del envio</p>
                </div>
                {formData.metodoPago === "anticipado" && (
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                )}
              </button>
            </fieldset>

            {/* Submit */}
            <button
              type="submit"
              disabled={!isFormValid}
              className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-bold uppercase tracking-wider text-primary-foreground transition-all hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:brightness-100"
            >
              Revisar Pedido
            </button>
          </form>
        ) : (
          /* Confirmation Step */
          <div className="flex flex-col gap-6 p-6">
            <div className="rounded-xl bg-primary/5 border border-primary/20 p-5 flex flex-col gap-4">
              <h4 className="font-display text-base font-bold uppercase tracking-wider text-primary">
                Resumen de tu Pedido
              </h4>

              <div className="flex items-center gap-4 pb-4 border-b border-border">
                <div className="h-12 w-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="font-display text-lg font-bold text-primary">e</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">Creatina Monohidratada 300g</p>
                  <p className="text-xs text-muted-foreground">60 servicios - Grado USP</p>
                </div>
                <span className="font-display text-lg font-bold text-primary">$89.900</span>
              </div>

              <div className="flex flex-col gap-2.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Nombre</span>
                  <span className="font-medium text-foreground">{formData.nombre} {formData.apellido}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-muted-foreground shrink-0">Direccion</span>
                  <span className="font-medium text-foreground text-right">
                    {formData.nomenclatura}, {formData.barrio}, {formData.ciudad}, {formData.departamento}
                    {formData.tipoVivienda === "apto" && formData.detalleVivienda
                      ? ` - Apto ${formData.detalleVivienda}`
                      : " - Casa"}
                  </span>
                </div>
                {formData.correo && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Correo</span>
                    <span className="font-medium text-foreground">{formData.correo}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Metodo de Pago</span>
                  <span className="font-medium text-primary">
                    {formData.metodoPago === "contraentrega" ? "Contraentrega" : "Pago Anticipado"}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleConfirmAndRedirect}
                className="animate-pulse-glow flex items-center justify-center gap-3 rounded-full bg-primary px-6 py-4 text-base font-bold uppercase tracking-wider text-primary-foreground transition-all hover:brightness-110"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.305 0-4.461-.654-6.29-1.785l-.44-.267-2.834.95.95-2.834-.267-.44A9.956 9.956 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                </svg>
                Confirmar y Enviar por WhatsApp
              </button>
              <button
                onClick={() => setStep("form")}
                className="rounded-full border border-border px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-colors"
              >
                Modificar Datos
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
