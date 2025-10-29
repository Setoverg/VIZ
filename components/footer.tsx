export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-2xl font-bold text-primary">TOVIZY</div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tovizy Studio. Crafted with light and passion.
          </p>
          <div className="flex gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Portfolio
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
