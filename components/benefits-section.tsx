import { Dumbbell, Zap, Timer, Brain, Shield, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: Dumbbell,
    title: "Aumento de Fuerza",
    description: "Incrementa tu fuerza maxima hasta un 15% en ejercicios compuestos como sentadilla y press banca.",
  },
  {
    icon: Zap,
    title: "Produccion de Energia",
    description: "Recarga tus reservas de ATP para entrenamientos mas intensos y explosivos desde la primera semana.",
  },
  {
    icon: Timer,
    title: "Recuperacion Acelerada",
    description: "Reduce el dolor muscular post-entrenamiento y acelera la regeneracion de fibras musculares.",
  },
  {
    icon: Brain,
    title: "Funcion Cognitiva",
    description: "Estudios demuestran mejoras en memoria y rendimiento mental con suplementacion de creatina.",
  },
  {
    icon: Shield,
    title: "Grado Farmaceutico USP",
    description: "Materia prima pura verificada con pureza del 99.5-102%, sin aditivos ni rellenos.",
  },
  {
    icon: TrendingUp,
    title: "Masa Muscular",
    description: "Favorece la hidratacion celular y la sintesis proteica para un mayor volumen muscular.",
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,hsl(0_0%_8%)_10%,hsl(0_0%_8%)_90%,transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Respaldado por la ciencia
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-balance">
            <span className="text-foreground">{'¿Por que elegir '}</span>
            <span className="text-primary">nuestra creatina?</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Formulada con materia prima de grado farmaceutico USP para resultados reales y comprobados.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group relative rounded-2xl border border-border bg-card p-6 lg:p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
