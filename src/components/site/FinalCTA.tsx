import { useReveal } from "@/hooks/use-reveal";

export function FinalCTA() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="contact" className="relative py-44 px-6 overflow-hidden">
      {/* Layered radial glows — warm gold center + deeper amber offset below */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_50%,oklch(0.75_0.13_85/0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_50%_70%,oklch(0.45_0.10_70/0.05),transparent_75%)]" />

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Thin top rule */}
        <div className="reveal mx-auto h-px w-24 bg-white/10" />
        <p className="eyebrow reveal mt-8">Get Started</p>

        <h2 className="reveal mt-8 font-bold tracking-[-0.03em] leading-[1.05]" style={{ transitionDelay: "100ms" }}>
          <span className="block text-4xl sm:text-6xl lg:text-7xl text-foreground">Ready to Know What</span>
          <span className="block italic font-light text-primary text-5xl sm:text-7xl lg:text-[5.5rem] mt-2">You're Made Of?</span>
        </h2>

        <p className="reveal mt-10 text-base text-muted-foreground max-w-xl mx-auto leading-relaxed" style={{ transitionDelay: "200ms" }}>
          Book a free discovery call. We'll build a protocol around your biology and your goals.
        </p>

        <div className="reveal mt-12" style={{ transitionDelay: "300ms" }}>
          <a
            href="#"
            className="group inline-flex items-center gap-3 border border-primary text-primary px-12 py-4 text-xs tracking-[0.25em] uppercase font-medium hover:bg-primary/10 hover:shadow-[0_0_40px_-10px_oklch(0.75_0.13_85/0.5)] transition-all duration-300"
          >
            Book Your Free Call
            <span className="text-base font-light group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        <div
          className="reveal mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] tracking-[0.15em] uppercase text-muted-foreground"
          style={{ transitionDelay: "400ms" }}
        >
          <span>HIPAA Compliant</span>
          <span className="text-white/15">|</span>
          <span>Board-Certified Practitioners</span>
          <span className="text-white/15">|</span>
          <span>No Long-Term Contracts</span>
        </div>
      </div>
    </section>
  );
}
