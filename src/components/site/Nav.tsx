export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-[0.2em] text-sm">
          APEX<span className="text-primary">FORM</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#why" className="hover:text-foreground transition-colors">Why Us</a>
          <a href="#community" className="hover:text-foreground transition-colors">Community</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <a href="#contact" className="text-xs tracking-widest uppercase border border-primary/60 text-primary px-4 py-2 rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors">
          Book Call
        </a>
      </div>
    </header>
  );
}
