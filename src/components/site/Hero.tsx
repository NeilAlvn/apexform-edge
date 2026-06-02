import { useReveal } from "@/hooks/use-reveal";
import heroPortrait from "@/assets/hero-portrait.jpg";

export function Hero() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="top" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-radial-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_45%,oklch(0.28_0.03_250/0.45),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,oklch(0.75_0.13_85/0.08),transparent_70%)]" />
      <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:80px_80px]" />

      {/* Cinematic portrait — right side, bleeds off edge */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[60%] pointer-events-none">
        <img
          src={heroPortrait}
          alt="APEXFORM member portrait"
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-[60%_center] opacity-60 lg:opacity-90"
        />
        {/* Left-to-right fade into background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.08_0.005_270)_0%,oklch(0.08_0.005_270/0.7)_25%,transparent_60%)]" />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,oklch(0.08_0.005_270)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          <p className="eyebrow reveal">Precision Longevity Medicine</p>
          <h1 className="reveal mt-6 text-6xl sm:text-8xl lg:text-9xl font-bold tracking-[-0.05em] leading-[0.92]" style={{ transitionDelay: "100ms" }}>
            Your Biology<br />Is Your <span className="italic font-light text-primary">Edge.</span>
          </h1>
          <p className="reveal mt-8 max-w-xl text-lg sm:text-xl text-muted-foreground leading-relaxed" style={{ transitionDelay: "200ms" }}>
            APEXFORM delivers precision longevity protocols — bloodwork, hormones, peptides, and IV therapy — engineered for people who refuse to plateau.
          </p>
          <div className="reveal mt-10 flex flex-wrap gap-4" style={{ transitionDelay: "300ms" }}>
            <a href="#contact" className="group inline-flex items-center gap-2 border border-primary text-primary px-7 py-4 text-sm tracking-[0.18em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_-5px_oklch(0.75_0.13_85/0.6)]">
              Start Your Protocol
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#services" className="inline-flex items-center gap-2 border border-white/15 text-foreground px-7 py-4 text-sm tracking-[0.18em] uppercase hover:border-white/40 transition-colors">
              Explore Services
            </a>
          </div>
        </div>
      </div>

      <div className="reveal relative mx-auto max-w-6xl w-full px-6 pb-12" style={{ transitionDelay: "500ms" }}>
        <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-white/10 pt-8 gap-y-6">
          {[
            ["500+", "Members Optimized"],
            ["94%", "See Results in 60 Days"],
            ["6", "Core Protocols"],
          ].map(([n, l], i) => (
            <div key={i} className={`px-6 ${i !== 0 ? "sm:border-l sm:border-white/10" : ""}`}>
              <div className="text-3xl font-semibold text-foreground">{n}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
