import { useReveal } from "@/hooks/use-reveal";

export function FinalCTA() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="contact" className="relative py-40 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-radial-gold" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_50%,oklch(0.75_0.13_85/0.12),transparent_70%)]" />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="eyebrow reveal">Get Started</p>
        <h2 className="reveal mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[1.05]" style={{ transitionDelay: "100ms" }}>
          Ready to Know What<br />You're <span className="italic font-light text-primary">Made Of?</span>
        </h2>
        <p className="reveal mt-8 text-lg text-muted-foreground max-w-xl mx-auto" style={{ transitionDelay: "200ms" }}>
          Book a free discovery call. We'll build a protocol around your biology and your goals.
        </p>
        <div className="reveal mt-12" style={{ transitionDelay: "300ms" }}>
          <a href="#" className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 text-sm tracking-[0.2em] uppercase font-medium hover:shadow-[0_0_50px_-5px_oklch(0.75_0.13_85/0.7)] transition-all duration-300">
            Book Your Free Call
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
