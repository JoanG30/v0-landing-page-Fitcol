import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos M.",
    role: "Powerlifter",
    rating: 5,
    text: "Llevo 3 meses usandola y mi press banca subio 12kg. La pureza se nota, no me genera molestias gastricas como otras marcas.",
    initials: "CM",
  },
  {
    name: "Valentina R.",
    role: "CrossFit Athlete",
    rating: 5,
    text: "La mejor creatina que he probado en Colombia. Se disuelve super bien y los resultados son visibles desde la segunda semana.",
    initials: "VR",
  },
  {
    name: "Andres P.",
    role: "Entrenador Personal",
    rating: 5,
    text: "Se la recomiendo a todos mis clientes. Grado farmaceutico real, no como muchas que dicen serlo. Excelente relacion calidad-precio.",
    initials: "AP",
  },
  {
    name: "Maria F.",
    role: "Fitness Lifestyle",
    rating: 5,
    text: "No tiene sabor asi que la mezclo con mi batido de proteina. 60 servicios me duran 2 meses. Definitivamente recompro.",
    initials: "MF",
  },
  {
    name: "Diego L.",
    role: "Bodybuilder Natural",
    rating: 5,
    text: "La pureza del 99.5% marca la diferencia. Mi volumen muscular mejoro notablemente y mi rendimiento en el gym es otro nivel.",
    initials: "DL",
  },
  {
    name: "Laura S.",
    role: "Runner",
    rating: 4,
    text: "Al principio dudaba de la creatina para running, pero la recuperacion muscular ha mejorado mucho. Ya no llego tan destruida al dia siguiente.",
    initials: "LS",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,hsl(0_0%_8%)_10%,hsl(0_0%_8%)_90%,transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Prueba Social
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-balance">
            <span className="text-foreground">{'Miles ya '}</span>
            <span className="text-primary">confian en nosotros</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {'+ de 5,000 atletas en Colombia ya potencian su rendimiento con FitpowerCOL.'}
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { number: "5,000+", label: "Clientes Satisfechos" },
            { number: "4.9/5", label: "Calificacion Promedio" },
            { number: "98%", label: "Recomendarian" },
            { number: "12,000+", label: "Envases Vendidos" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card p-5 text-center"
            >
              <div className="font-display text-2xl sm:text-3xl font-bold text-primary">
                {stat.number}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < t.rating ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {`"${t.text}"`}
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
