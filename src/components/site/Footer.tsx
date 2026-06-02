export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="font-semibold tracking-[0.2em] text-sm">
          APEX<span className="text-primary">FORM</span>
        </div>
        <nav className="flex items-center gap-8 text-xs uppercase tracking-widest text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#why" className="hover:text-foreground transition-colors">About</a>
          <a href="#how" className="hover:text-foreground transition-colors">How It Works</a>
          <a href="#community" className="hover:text-foreground transition-colors">Members</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <div className="text-xs text-muted-foreground">© 2026 APEXFORM</div>
      </div>
    </footer>
  );
}
