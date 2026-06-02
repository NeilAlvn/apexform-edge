import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Root, P as Portal, C as Content, a as Close, T as Title, D as Description, O as Overlay } from "../_libs/radix-ui__react-dialog.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { R as Root$1 } from "../_libs/radix-ui__react-label.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { R as Root2, V as Value, T as Trigger, I as Icon, P as Portal$1, C as Content2, a as Viewport, b as Item, c as ItemIndicator, d as ItemText, S as ScrollUpButton, e as ScrollDownButton, L as Label$1, f as Separator } from "../_libs/radix-ui__react-select.mjs";
import { e as emailjs } from "../_libs/emailjs__browser.mjs";
import { G as GoogleGenerativeAI } from "../_libs/google__generative-ai.mjs";
import { A as Activity, D as Droplet, a as Dna, F as Flame, M as Moon, I as Infinity, C as CircleCheckBig, L as LoaderCircle, X, b as MessageCircle, c as ArrowUp, d as ChevronDown, e as Check, f as ChevronUp } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
function Nav({ onBookCall }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 h-16 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "font-semibold tracking-[0.2em] text-sm", children: [
      "APEX",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "FORM" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-10 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services", className: "hover:text-foreground transition-colors", children: "Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#why", className: "hover:text-foreground transition-colors", children: "Why Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#how", className: "hover:text-foreground transition-colors", children: "How It Works" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#community", className: "hover:text-foreground transition-colors", children: "Community" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "hover:text-foreground transition-colors", children: "Contact" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: onBookCall,
        className: "text-xs tracking-widest uppercase border border-primary/60 text-primary px-4 py-2 hover:bg-primary/10 transition-colors",
        children: "Book Call"
      }
    )
  ] }) });
}
function useReveal() {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
          } else {
            e.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );
    el.querySelectorAll(".reveal").forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);
  return ref;
}
function useCountUp(target, trigger, duration = 1800) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!trigger || !ref.current) return;
    const start = performance.now();
    const el = ref.current;
    let raf = 0;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * target).toLocaleString();
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, trigger, duration]);
  return ref;
}
const heroPortrait = "/assets/hero-portrait-BXOg_P2_.jpg";
function Hero({ onBookCall }) {
  const ref = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref, id: "top", className: "relative min-h-screen flex flex-col justify-center overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-radial-dark" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_45%,oklch(0.28_0.03_250/0.45),transparent_70%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,oklch(0.75_0.13_85/0.08),transparent_70%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:80px_80px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-y-0 right-0 w-full lg:w-[60%] pointer-events-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: heroPortrait,
          alt: "APEXFORM member portrait",
          width: 1920,
          height: 1080,
          className: "h-full w-full object-cover object-[60%_center] opacity-60 lg:opacity-90"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,oklch(0.08_0.005_270)_0%,oklch(0.08_0.005_270/0.7)_25%,transparent_60%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,oklch(0.08_0.005_270)_100%)]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-6xl px-6 pt-32 pb-32 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow reveal", children: "Precision Longevity Medicine" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "reveal mt-6 text-6xl sm:text-8xl lg:text-9xl font-bold tracking-[-0.05em] leading-[0.92]", style: { transitionDelay: "100ms" }, children: [
        "Your Biology",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Is Your ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-light text-primary", children: "Edge." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "reveal mt-8 max-w-xl text-lg sm:text-xl text-muted-foreground leading-relaxed", style: { transitionDelay: "200ms" }, children: "APEXFORM delivers precision longevity protocols — bloodwork, hormones, peptides, and IV therapy — engineered for people who refuse to plateau." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mt-10 flex flex-wrap gap-4", style: { transitionDelay: "300ms" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: onBookCall,
            className: "group inline-flex items-center gap-2 border border-primary text-primary px-7 py-4 text-sm tracking-widest uppercase hover:bg-primary/10 transition-all duration-300 hover:shadow-[0_0_30px_-5px_oklch(0.75_0.13_85/0.6)]",
            children: [
              "Start Your Protocol",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "group-hover:translate-x-1 transition-transform", children: "→" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services", className: "inline-flex items-center gap-2 border border-white/15 text-foreground px-7 py-4 text-sm tracking-widest uppercase hover:border-white/40 transition-colors", children: "Explore Services" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal relative mx-auto max-w-6xl w-full px-6 pb-12", style: { transitionDelay: "500ms" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 border-t border-white/10 pt-8 gap-y-6", children: [
      ["500+", "Members Optimized"],
      ["94%", "See Results in 60 Days"],
      ["6", "Core Protocols"]
    ].map(([n, l], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `px-6 ${i !== 0 ? "sm:border-l sm:border-white/10" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-semibold text-foreground", children: n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: l })
    ] }, i)) }) })
  ] });
}
const images = [
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&h=400&fit=crop"
];
const scrollingImages = [...images, ...images];
function ImageStrip() {
  const ref = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref, className: "relative py-20 overflow-hidden bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[#0A0A0B] to-transparent pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[#0A0A0B] to-transparent pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-fit animate-scroll gap-4", children: scrollingImages.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-none w-72 h-48", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src,
          alt: `Wellness visual ${i + 1}`,
          className: "w-full h-full object-cover rounded-lg border border-white/5",
          loading: "lazy"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/40 rounded-lg pointer-events-none" })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 0.5rem)); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      ` })
  ] });
}
const services = [
  { icon: Activity, name: "Bloodwork", desc: "See everything. Miss nothing. Comprehensive panels that reveal what's actually happening inside." },
  { icon: Droplet, name: "IV Therapy", desc: "Fuel at the cellular level. Rapid nutrient delivery for recovery, energy, and immune resilience." },
  { icon: Dna, name: "Peptides", desc: "Signal your body to perform. Targeted protocols for fat loss, muscle growth, and tissue repair." },
  { icon: Flame, name: "Hormone Optimization", desc: "Balance is performance. Restore your baseline — feel like yourself again, only better." },
  { icon: Moon, name: "Recovery", desc: "Recover faster. Train harder. Protocols built around inflammation, sleep, and tissue repair." },
  { icon: Infinity, name: "Longevity", desc: "Play the long game. Biomarker tracking and interventions designed to extend your healthspan." }
];
function Services() {
  const ref = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref, id: "services", className: "relative py-44 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow reveal", children: "What We Offer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "reveal mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em]", style: { transitionDelay: "100ms" }, children: [
        "Every Protocol.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-light text-primary", children: "One Practice." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10", children: services.map((s, i) => {
      const Icon2 = s.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "#contact",
          className: "reveal group relative bg-background p-10 transition-colors duration-500 overflow-hidden focus:outline-none",
          style: { transitionDelay: `${i * 60}ms` },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,oklch(0.75_0.13_85/0.10),transparent_70%)]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none border border-primary opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 shadow-[0_0_40px_-10px_oklch(0.75_0.13_85/0.5)]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-7 w-7 text-primary", strokeWidth: 1.5 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-8 text-xl font-semibold", children: s.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: s.desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs uppercase tracking-widest text-muted-foreground/60 group-hover:text-primary transition-colors", children: [
                  "0",
                  i + 1,
                  " / 06"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs uppercase tracking-widest text-primary inline-flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity", children: [
                  "Learn More",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-1", children: "→" })
                ] })
              ] })
            ] })
          ]
        },
        s.name
      );
    }) })
  ] }) });
}
const pillars = [
  { n: "01", title: "Data-Driven", desc: "Built on your biomarkers — not a template." },
  { n: "02", title: "Concierge Access", desc: "Direct access to practitioners who know your name, your file, and your goals." },
  { n: "03", title: "Performance-First", desc: "Built for executives, athletes, and founders who operate at their best every day." }
];
const miniStats = [
  { v: "300+", l: "Biomarkers per panel" },
  { v: "48 hr", l: "Avg. results turnaround" },
  { v: "1:1", l: "Practitioner access" },
  { v: "24/7", l: "Concierge support" }
];
function WhyApexform() {
  const ref = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref, id: "why", className: "relative py-44 px-6 bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto mb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow reveal", children: "Why Choose Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "reveal mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em]", style: { transitionDelay: "100ms" }, children: [
        "Precision. Personalized. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-light text-primary", children: "Proven." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6", children: pillars.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal text-center md:text-left md:px-8", style: { transitionDelay: `${i * 100}ms` }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-xs tracking-widest font-medium", children: p.n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 h-px w-12 bg-primary/40 mx-auto md:mx-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-8 text-2xl font-semibold", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground leading-relaxed", children: p.desc })
    ] }, p.n)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mt-24 pt-16 border-t border-white/10", style: { transitionDelay: "400ms" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-center mb-10", children: "By The Numbers" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: miniStats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-primary", children: s.v }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: s.l })
      ] }, s.l)) })
    ] })
  ] }) });
}
const steps = [
  { n: "01", title: "Complete Your Intake", desc: "Quick health history + goals form. Tell us where you are and where you want to go." },
  { n: "02", title: "Get Your Bloodwork Done", desc: "Full diagnostic panel at a lab near you, reviewed line-by-line by our medical team." },
  { n: "03", title: "Receive Your Protocol", desc: "A custom plan built around your biology — hormones, peptides, recovery, the whole stack." }
];
function HowItWorks() {
  const ref = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref, id: "how", className: "relative py-44 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto mb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow reveal", children: "How It Works" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "reveal mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em]", style: { transitionDelay: "100ms" }, children: [
        "Three Steps. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-light text-primary", children: "One Protocol." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10 relative", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "reveal text-center md:px-6",
          style: { transitionDelay: `${i * 120}ms` },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative inline-flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 w-16 rounded-full bg-background border border-primary/40 flex items-center justify-center text-primary font-semibold tracking-[0.1em] shadow-[0_0_40px_-10px_oklch(0.75_0.13_85/0.5)]", children: s.n }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-8 text-xl sm:text-2xl font-semibold", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto", children: s.desc })
          ]
        },
        s.n
      )) })
    ] })
  ] }) });
}
const stats = [
  { value: 500, suffix: "+", label: "Members Optimized" },
  { value: 94, suffix: "%", label: "See Results in 60 Days" },
  { value: 12e3, suffix: "+", label: "Biomarkers Tracked" }
];
const testimonials = [
  {
    name: "Marcus T.",
    title: "Entrepreneur, 42",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    quote: "I've optimized everything in my business. APEXFORM was the missing piece for my body. My energy, focus, and recovery are on a different level. The bloodwork results alone changed how I think about my health."
  },
  {
    name: "Derek R.",
    title: "Former D1 Athlete, 38",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    quote: "After my playing career ended I felt like I was declining every year. Three months into the hormone protocol and I feel like I'm 28 again. No exaggeration."
  },
  {
    name: "Priya S.",
    title: "Surgeon, 45",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    quote: "As a physician I was skeptical. Then I saw my own labs. APEXFORM caught deficiencies my annual physical completely missed. The protocol they built around my results was precise and it worked."
  },
  {
    name: "James K.",
    title: "CEO, 51",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    quote: "I was sleeping 8 hours and still exhausted. Turns out my testosterone was at the floor. Six weeks into the protocol — different person. My team noticed before I did."
  },
  {
    name: "Sofia M.",
    title: "Triathlete, 34",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
    quote: "The recovery protocol cut my post-race inflammation time in half. My coach couldn't believe my turnaround numbers. This is the edge I didn't know I was missing."
  },
  {
    name: "Ryan C.",
    title: "Founder, 39",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&crop=face",
    quote: "I thought feeling worn down was just part of building a company. It's not. It was my cortisol, my sleep quality, my nutrition gaps — all fixable. APEXFORM showed me the data and fixed it."
  }
];
function Stat({ value, suffix, label }) {
  const [start, setStart] = reactExports.useState(false);
  const containerRef = reactExports.useRef(null);
  const numRef = useCountUp(value, start);
  reactExports.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      setStart(e.isIntersecting);
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: containerRef, className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-5xl sm:text-7xl font-bold tracking-[-0.03em] text-primary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ref: numRef, children: "0" }),
      suffix
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-xs uppercase tracking-widest text-muted-foreground", children: label })
  ] });
}
function Stars() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 text-primary text-lg", "aria-label": "5 out of 5 stars", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "★" }, i)) });
}
function SocialProof() {
  const ref = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref, id: "community", className: "relative py-44 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto mb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow reveal", children: "The Community" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "reveal mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em]", style: { transitionDelay: "100ms" }, children: [
        "500+ High Performers ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-light text-primary", children: "Optimized." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-12 py-16 border-y border-white/10 mb-20", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { ...s }, s.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "figure",
      {
        className: "reveal bg-background p-8 lg:p-10 flex flex-col",
        style: { transitionDelay: `${i % 3 * 100}ms` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stars, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-5 text-sm leading-relaxed flex-1 text-[#F5F0E8]/90 italic", children: [
            '"',
            t.quote,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-8 pt-6 border-t border-white/10 flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: t.photo,
                alt: t.name,
                width: 56,
                height: 56,
                loading: "lazy",
                className: "h-14 w-14 rounded-full object-cover ring-1 ring-primary/30"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-white", children: t.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary", children: t.title })
            ] })
          ] })
        ]
      },
      t.name
    )) })
  ] }) });
}
function FinalCTA({ onBookCall }) {
  const ref = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref, id: "contact", className: "relative py-44 px-6 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_50%,oklch(0.75_0.13_85/0.08),transparent_70%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_50%_70%,oklch(0.45_0.10_70/0.05),transparent_75%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow reveal mt-8", children: "Get Started" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "reveal mt-8 font-bold tracking-[-0.03em] leading-[1.05]", style: { transitionDelay: "100ms" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-4xl sm:text-6xl lg:text-7xl text-foreground", children: "Ready to Know What" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block italic font-light text-primary text-5xl sm:text-7xl lg:text-[5.5rem] mt-2", children: "You're Made Of?" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "reveal mt-10 text-base text-muted-foreground max-w-xl mx-auto leading-relaxed", style: { transitionDelay: "200ms" }, children: "Book a free discovery call. We'll build a protocol around your biology and your goals." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal mt-12", style: { transitionDelay: "300ms" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: onBookCall,
          className: "group inline-flex items-center gap-3 border border-primary text-primary px-12 py-4 text-xs tracking-[0.25em] uppercase font-medium hover:bg-primary/10 hover:shadow-[0_0_40px_-10px_oklch(0.75_0.13_85/0.5)] transition-all duration-300",
          children: [
            "Book Your Free Call",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-light group-hover:translate-x-1 transition-transform", children: "→" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "reveal mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs tracking-widest text-gray-500 uppercase text-center",
          style: { transitionDelay: "400ms" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "HIPAA COMPLIANT" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/10 mx-2", children: "|" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "BOARD-CERTIFIED PRACTITIONERS" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/10 mx-2", children: "|" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "NO LONG-TERM CONTRACTS" })
          ]
        }
      )
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-white/10 py-10 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-semibold tracking-[0.2em] text-sm", children: [
      "APEX",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "FORM" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex items-center gap-8 text-xs uppercase tracking-widest text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services", className: "hover:text-foreground transition-colors", children: "Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#why", className: "hover:text-foreground transition-colors", children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#how", className: "hover:text-foreground transition-colors", children: "How It Works" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#community", className: "hover:text-foreground transition-colors", children: "Members" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "hover:text-foreground transition-colors", children: "Contact" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "© 2026 APEXFORM" })
  ] }) });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Dialog = Root;
const DialogPortal = Portal;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root$1, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root$1.displayName;
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Select = Root2;
const SelectValue = Value;
const SelectTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = Trigger.displayName;
const SelectScrollUpButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  ScrollUpButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = ScrollUpButton.displayName;
const SelectScrollDownButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  ScrollDownButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = ScrollDownButton.displayName;
const SelectContent = reactExports.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Content2,
  {
    ref,
    className: cn(
      "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = Content2.displayName;
const SelectLabel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Label$1,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = Label$1.displayName;
const SelectItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ItemText, { children })
    ]
  }
));
SelectItem.displayName = Item.displayName;
const SelectSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = Separator.displayName;
function BookingModal({ isOpen, onClose }) {
  const [isSending, setIsSending] = reactExports.useState(false);
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    objective: ""
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);
    console.log("Submitting Intake Form Data:", formData);
    const submissionTime = (/* @__PURE__ */ new Date()).toLocaleString();
    try {
      const clientHtml = `
        <div style="background-color: #0A0A0B; color: #F5F0E8; font-family: Arial, sans-serif; padding: 40px; border-top: 4px solid #C9A84C;">
          <div style="color: #C9A84C; font-size: 24px; font-weight: bold; letter-spacing: 0.2em; margin-bottom: 20px;">APEXFORM</div>
          <hr style="border: none; border-top: 1px solid rgba(201, 168, 76, 0.2); margin-bottom: 30px;" />
          <h1 style="font-size: 32px; font-weight: bold; margin-bottom: 20px;">Intake Received, ${formData.name}.</h1>
          <p style="font-size: 16px; line-height: 1.6; color: #A1A1AA; margin-bottom: 30px;">
            Our clinical team has received your intake and will review your primary objective: <strong style="color: #C9A84C;">${formData.objective}</strong>. 
            Expect to hear from us within 24 hours to schedule your complimentary discovery call.
          </p>
          <a href="${window.location.origin}" style="display: inline-block; background-color: #C9A84C; color: #0A0A0B; padding: 16px 32px; text-decoration: none; font-weight: bold; border-radius: 4px; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em;">
            Learn More About Your Protocol
          </a>
          <div style="margin-top: 40px; font-size: 12px; color: #52525B;">
            APEXFORM — Precision Longevity Medicine
          </div>
        </div>
      `;
      const teamPlain = `
New intake submission received
Name: ${formData.name}
Email: ${formData.email}
Health Objective: ${formData.objective}
Submitted at: ${submissionTime}

Respond within 24 hours per APEXFORM SLA
      `;
      await emailjs.send(
        "service_6l04zta",
        "template_ermb0pd",
        {
          from_name: formData.name,
          from_email: formData.email,
          health_objective: formData.objective,
          submission_time: submissionTime,
          html_message: clientHtml,
          reply_to: "noreply@apexform.com"
        },
        "HE9ymiTTJtpbQX7-F"
      );
      await emailjs.send(
        "service_6l04zta",
        "template_ermb0pd",
        {
          from_name: formData.name,
          from_email: formData.email,
          health_objective: formData.objective,
          submission_time: submissionTime,
          message: teamPlain,
          reply_to: formData.email
        },
        "HE9ymiTTJtpbQX7-F"
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSending(false);
    }
  };
  const handleClose = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", objective: "" });
    setError(null);
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isOpen, onOpenChange: (open) => !open && handleClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "sm:max-w-[500px] bg-[#0A0A0B]/98 backdrop-blur-3xl border-white/5 p-0 overflow-hidden rounded-none shadow-[0_0_100px_-20px_oklch(0.75_0.13_85/0.2)] [&>button]:text-white/50 [&>button]:hover:text-primary [&>button]:transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-8 sm:p-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-48 h-48 bg-primary/10 blur-[100px] rounded-full -mr-24 -mt-24 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-32 h-32 bg-primary/5 blur-[80px] rounded-full -ml-16 -mb-16 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { className: "relative text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-6", children: "Patient Onboarding" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight", children: submitted ? "Intake Received." : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Optimize Your ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-light text-primary", children: "Potential." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "mt-6 text-base text-muted-foreground/80 leading-relaxed", children: submitted ? "Check your inbox — we'll be in touch within 24 hours to schedule your discovery call." : "Precision health starts with data. Provide your details to begin the clinical consultation process." })
    ] }),
    submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 py-10 text-center reveal in-view", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "mx-auto h-20 w-20 text-primary mb-8 animate-in zoom-in duration-500", strokeWidth: 1 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-primary tracking-widest uppercase mb-10", children: formData.email }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleClose,
          className: "text-xs uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors",
          children: "Close"
        }
      )
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "mt-12 space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", className: "text-[11px] uppercase tracking-[0.2em] text-primary/80 font-semibold", children: "Full Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "name",
            placeholder: "Marcus Aurelius",
            required: true,
            value: formData.name,
            onChange: (e) => setFormData({ ...formData, name: e.target.value }),
            className: "bg-white/[0.03] border-white/10 rounded-none h-14 focus-visible:ring-0 focus-visible:border-primary/50 text-white placeholder:text-white/10 transition-colors"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", className: "text-[11px] uppercase tracking-[0.2em] text-primary/80 font-semibold", children: "Secure Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "email",
            type: "email",
            placeholder: "marcus@performance.com",
            required: true,
            value: formData.email,
            onChange: (e) => setFormData({ ...formData, email: e.target.value }),
            className: "bg-white/[0.03] border-white/10 rounded-none h-14 focus-visible:ring-0 focus-visible:border-primary/50 text-white placeholder:text-white/10 transition-colors"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "goal", className: "text-[11px] uppercase tracking-[0.2em] text-primary/80 font-semibold", children: "Primary Health Objective" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            required: true,
            onValueChange: (val) => setFormData({ ...formData, objective: val }),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "bg-white/[0.03] border-white/10 rounded-none h-14 focus:ring-0 text-white focus:border-primary/50 transition-colors text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select objective" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { className: "bg-[#0D0D0F] border-white/10 text-white rounded-none shadow-2xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "longevity", className: "focus:bg-primary/10 focus:text-primary py-3", children: "Longevity & Healthspan" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "performance", className: "focus:bg-primary/10 focus:text-primary py-3", children: "Executive Performance" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "hormone", className: "focus:bg-primary/10 focus:text-primary py-3", children: "Hormone Optimization" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "recovery", className: "focus:bg-primary/10 focus:text-primary py-3", children: "Elite Recovery" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "peptides", className: "focus:bg-primary/10 focus:text-primary py-3", children: "Targeted Peptides" })
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "submit",
            disabled: isSending,
            className: "w-full group relative overflow-hidden border border-primary text-primary px-7 py-5 text-[11px] tracking-[0.25em] uppercase font-bold hover:text-primary-foreground transition-colors duration-500 disabled:opacity-70",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-primary transition-transform duration-500 ${isSending ? "translate-y-0" : "translate-y-full group-hover:translate-y-0"}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative flex items-center justify-center gap-3", children: isSending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
                "Sending..."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                "Submit Secure Intake",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "group-hover:translate-x-1 transition-transform duration-500", children: "→" })
              ] }) })
            ]
          }
        ),
        error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-red-400/80 text-center animate-in fade-in slide-in-from-top-1", children: error })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-center text-gray-500 uppercase tracking-widest opacity-60", children: "Encrypted Submission • HIPAA Compliant" })
    ] })
  ] }) }) });
}
const apiKey = "AQ.Ab8RN6KDlko1L_z2nqL_iERTtdVUdpdvQ00-Ugalm24Nm3TF-A";
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: "gemini-3-flash-preview",
  systemInstruction: `You are APEX, a knowledgeable and premium health 
  concierge for APEXFORM — a concierge longevity and performance medicine 
  clinic.
    
  Your personality: warm but precise, confident, like a brilliant friend 
  who happens to be a doctor. Never robotic. Never generic. 
    
  You help potential clients understand:
  - Our 6 services: Bloodwork, IV Therapy, Peptides, Hormone Optimization, 
    Recovery, Longevity protocols
  - How our process works: intake → bloodwork → custom protocol
  - What results people typically experience
  - Pricing: premium concierge medicine, typically $200-500/month 
    depending on protocol
  - Who we serve: executives, athletes, founders, high performers 35-60
  - How to book: direct them to click "Book Your Free Call"
    
  Rules:
  - Never diagnose or prescribe
  - Keep responses concise (2-4 sentences max unless they ask for detail)
  - If asked something complex and medical say "That's exactly the kind 
    of thing we'd assess in your bloodwork panel"
  - Always end with a subtle nudge toward booking when appropriate
  - If asked about cost, be transparent about the premium range 
    without being salesy
  - Speak as part of the APEXFORM team using "we" and "our team"
  - If asked anything completely unrelated to health or APEXFORM, 
    politely steer back: "I'm best equipped to help with anything 
    health and performance related — what goals are you working toward?"`
});
function ChatBot({ onBookCall }) {
  const [uiMessages, setUiMessages] = reactExports.useState([
    {
      role: "model",
      content: "Hey — I'm APEX, your health concierge. Whether you're curious about our protocols, want to know if we're the right fit, or just have questions about longevity medicine — I'm here. What's on your mind?"
    }
  ]);
  const [apiHistory, setApiHistory] = reactExports.useState([]);
  const [input, setInput] = reactExports.useState("");
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [hasOpened, setHasOpened] = reactExports.useState(false);
  const [sessionCount, setSessionCount] = reactExports.useState(0);
  const [isCooldown, setIsCooldown] = reactExports.useState(false);
  const scrollRef = reactExports.useRef(null);
  const checkDailyLimit = () => {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const stored = localStorage.getItem("apex_chat_count");
    if (stored) {
      const { count, date } = JSON.parse(stored);
      if (date === today) {
        return count;
      }
    }
    return 0;
  };
  const incrementDailyLimit = () => {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const count = checkDailyLimit() + 1;
    localStorage.setItem("apex_chat_count", JSON.stringify({ count, date: today }));
  };
  reactExports.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [uiMessages, isLoading]);
  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading || isCooldown || sessionCount >= 10) return;
    if (checkDailyLimit() >= 20) {
      setUiMessages((prev) => [
        ...prev,
        { role: "model", content: "You've reached today's limit for free consultations. To continue, book a call with our team directly — we'd love to connect." }
      ]);
      return;
    }
    const userMessage = input.trim();
    setInput("");
    const newUserUiMsg = { role: "user", content: userMessage };
    const newUserApiMsg = { role: "user", parts: [{ text: userMessage }] };
    setUiMessages((prev) => [...prev, newUserUiMsg]);
    setIsLoading(true);
    setIsCooldown(true);
    setSessionCount((prev) => prev + 1);
    setTimeout(() => setIsCooldown(false), 2e3);
    try {
      const recentHistory = apiHistory.slice(-10);
      const chat = model.startChat({ history: recentHistory });
      const result = await chat.sendMessage(userMessage);
      const response = await result.response;
      const text = response.text();
      const newModelUiMsg = { role: "model", content: text };
      const newModelApiMsg = { role: "model", parts: [{ text }] };
      setUiMessages((prev) => [...prev, newModelUiMsg]);
      setApiHistory((prev) => [...prev, newUserApiMsg, newModelApiMsg]);
      incrementDailyLimit();
    } catch (error) {
      console.error("Gemini Full Error Object:", error);
      const errorMessage = error.message || "I'm experiencing a slight connection issue. Could you try that again?";
      setUiMessages((prev) => [
        ...prev,
        { role: "error", content: `Error: ${errorMessage}` }
      ]);
    } finally {
      setIsLoading(false);
    }
  };
  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!hasOpened) setHasOpened(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: toggleChat,
        className: "fixed bottom-6 right-6 h-14 w-14 flex items-center justify-center rounded-full bg-[#0A0A0B] border-2 border-[#C9A84C]/40 text-[#C9A84C] hover:border-[#C9A84C] hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-all duration-300 z-50 cursor-pointer group",
        "aria-label": "Toggle AI Concierge",
        children: [
          !hasOpened && !isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 bg-red-500 rounded-full absolute top-0 right-0 border-2 border-[#0A0A0B]" }),
          isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-6 w-6 group-hover:scale-110 transition-transform" })
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-24 right-6 w-96 h-[580px] bg-[#0A0A0B]/95 backdrop-blur-xl border border-[rgba(201,168,76,0.2)] rounded-2xl shadow-[0_0_60px_rgba(201,168,76,0.08)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300 z-50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-b border-[#C9A84C]/20 flex items-center justify-between bg-[#0A0A0B]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse shadow-[0_0_8px_rgba(201,168,76,0.8)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[#C9A84C] tracking-widest text-sm", children: "APEX" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-gray-500 text-xs font-medium uppercase tracking-tighter", children: "Health Concierge" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setIsOpen(false),
            className: "text-gray-500 hover:text-white transition-colors cursor-pointer",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          ref: scrollRef,
          className: "flex-1 overflow-y-auto p-4 space-y-6 scroll-smooth",
          children: [
            uiMessages.map((m, i) => {
              const isFirstBot = m.role === "model" && (i === 0 || uiMessages[i - 1].role !== "model");
              const isDailyLimit = m.content.includes("reached today's limit");
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                isFirstBot && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#C9A84C] text-[9px] font-bold tracking-[0.2em] uppercase ml-1", children: "APEX" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `${m.role === "user" ? "ml-auto max-w-[85%] bg-[rgba(201,168,76,0.12)] border border-[rgba(201,168,76,0.25)] rounded-2xl rounded-tr-sm text-right" : "mr-auto max-w-[85%] bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm"} px-4 py-3 text-sm transition-all duration-300 animate-in fade-in zoom-in-95`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[#F5F0E8] leading-relaxed", children: [
                      m.content,
                      (isDailyLimit || sessionCount >= 10 && i === uiMessages.length - 1) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: onBookCall,
                          className: "w-full py-2 bg-[#C9A84C] text-[#0A0A0B] text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-[#D4B96E] transition-colors",
                          children: "Book Your Free Call"
                        }
                      ) })
                    ] })
                  }
                )
              ] }, i);
            }),
            isLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5 mr-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#C9A84C] text-[9px] font-bold tracking-[0.2em] uppercase ml-1", children: "APEX" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 bg-[#C9A84C]/60 rounded-full animate-bounce [animation-duration:0.8s]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 bg-[#C9A84C]/60 rounded-full animate-bounce [animation-duration:0.8s] [animation-delay:0.15s]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 bg-[#C9A84C]/60 rounded-full animate-bounce [animation-duration:0.8s] [animation-delay:0.3s]" })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-t border-white/10 bg-[#0A0A0B]/50", children: sessionCount >= 10 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-2 space-y-3 animate-in fade-in slide-in-from-bottom-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#C9A84C] font-medium tracking-wide", children: "Session complete. Ready to take the next step?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: onBookCall,
            className: "w-full py-3 bg-[#C9A84C] text-[#0A0A0B] text-xs font-bold uppercase tracking-widest rounded-xl hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-all",
            children: "Book Your Free Call"
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSend, className: "flex gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: input,
              onChange: (e) => setInput(e.target.value),
              placeholder: "Ask about our protocols...",
              disabled: isLoading || isCooldown,
              className: "flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-[#F5F0E8] placeholder-gray-600 focus:outline-none focus:border-[#C9A84C]/40 transition-colors disabled:opacity-50"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              disabled: !input.trim() || isLoading || isCooldown,
              className: "bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-xl p-2.5 hover:bg-[#C9A84C]/20 transition-all text-[#C9A84C] disabled:opacity-30 flex items-center justify-center cursor-pointer",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "h-5 w-5" })
            }
          )
        ] }),
        sessionCount >= 8 && sessionCount < 10 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-center text-[#C9A84C]/60 uppercase tracking-widest mt-3 animate-pulse", children: [
          10 - sessionCount,
          " questions remaining in this session"
        ] })
      ] }) })
    ] })
  ] });
}
function Index() {
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { onBookCall: () => setIsModalOpen(true) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, { onBookCall: () => setIsModalOpen(true) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ImageStrip, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyApexform, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HowItWorks, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SocialProof, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCTA, { onBookCall: () => setIsModalOpen(true) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BookingModal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChatBot, { onBookCall: () => setIsModalOpen(true) })
  ] });
}
export {
  Index as component
};
