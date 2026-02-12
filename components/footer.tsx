export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">e</span>
            </div>
            <span className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
              Essentials Ingredients
            </span>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            {'Essentials Ingredients es una marca distribuida en Colombia por M&S VITAMINS S.A.S.'}
          </p>
          <p className="text-xs text-muted-foreground">
            {'Venta libre - Res. 2674 de 2013'}
          </p>
        </div>
      </div>
    </footer>
  )
}
