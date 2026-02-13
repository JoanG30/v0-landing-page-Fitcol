import Image from "next/image"
import { Check } from "lucide-react"

const specs = [
  { label: "Ingrediente", value: "Creatina Monohidratada Pura" },
  { label: "Formula Quimica", value: "C\u2084H\u2089N\u2083O\u2082 \u00b7 H\u2082O" },
  { label: "Numero CAS", value: "6020-87-7" },
  { label: "Peso Molecular", value: "149.15 g/mol" },
  { label: "Pureza", value: "99.5 - 102.0%" },
  { label: "Peso Neto", value: "300g / 10.5 oz" },
]

const features = [
  "Sin saborizantes artificiales",
  "Sin colorantes ni aditivos",
  "Grado farmaceutico USP",
  "Ideal para mezclar con cualquier bebida",
  "60 servicios por envase",
  "Registro INVIMA Colombia",
]

export function ProductSection() {
  return (
    <section id="producto" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Product Image */}
          <div className="relative flex items-center justify-center order-2 lg:order-1">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] rounded-full bg-primary/8 blur-3xl" />
            </div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Y09ZOUTPdOhClwUpBqWASPbblmrrHT.png"
              alt="Creatina Monohidratada FitpoweCOL - Vista frontal del producto"
              width={500}
              height={500}
              className="relative z-10 drop-shadow-2xl w-full h-auto max-w-[500px]"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-8 order-1 lg:order-2">
            <div>
              <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                Ficha Tecnica
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-balance">
                <span className="text-foreground">Calidad </span>
                <span className="text-primary">Comprobada</span>
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Cada lote es analizado para garantizar la pureza y potencia que tu cuerpo merece.
                Materia prima importada de grado farmaceutico.
              </p>
            </div>

            {/* Specs table */}
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              {specs.map((spec, idx) => (
                <div
                  key={spec.label}
                  className={`flex items-center justify-between px-5 py-3.5 ${idx !== specs.length - 1 ? "border-b border-border" : ""}`}
                >
                  <span className="text-sm text-muted-foreground">{spec.label}</span>
                  <span className="text-sm font-semibold text-foreground">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* Features checklist */}
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2.5">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
