"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Como debo tomar la creatina?",
    answer:
      "Mezcla 5g (1 servicio) con 200-300ml de agua, jugo o tu batido de proteina. Puedes tomarla en cualquier momento del dia, aunque muchos prefieren tomarla despues del entrenamiento.",
  },
  {
    question: "¿Necesito hacer fase de carga?",
    answer:
      "No es obligatorio. Puedes tomar 5g diarios de forma continua y en 3-4 semanas tus musculos estaran completamente saturados. La fase de carga (20g por 5-7 dias) simplemente acelera el proceso.",
  },
  {
    question: "¿Tiene efectos secundarios?",
    answer:
      "La creatina monohidratada es uno de los suplementos mas estudiados y seguros. No causa dano renal en personas sanas. Es importante mantener una buena hidratacion durante su uso.",
  },
  {
    question: "¿Es apta para mujeres?",
    answer:
      "Si, absolutamente. La creatina beneficia por igual a hombres y mujeres. Ayuda a mejorar la fuerza, la composicion corporal y la funcion cognitiva sin distincion de genero.",
  },
  {
    question: "¿Que significa 'Grado USP'?",
    answer:
      "USP (United States Pharmacopeia) es el estandar de calidad farmaceutica mas exigente. Significa que la materia prima cumple con los requisitos de pureza para uso en medicamentos.",
  },
  {
    question: "¿Cuanto dura un envase?",
    answer:
      "Cada envase de 300g contiene 60 servicios de 5g. Si tomas 1 servicio diario, te dura 2 meses completos.",
  },
]

export function FaqSection() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            FAQ
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-balance">
            <span className="text-foreground">Preguntas </span>
            <span className="text-primary">frecuentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-border">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
