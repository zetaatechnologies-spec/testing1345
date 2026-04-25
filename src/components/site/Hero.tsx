import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, Zap, ShieldCheck, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-cctv-home.jpg";

const popular = ["CCTV Installation", "Smart Locks", "Intercom", "Biometric"];

export function Hero() {
  const [q, setQ] = useState("");

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-10 md:px-6 md:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium shadow-soft">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            Same-day service available in 5 cities
          </div>
          <h1 className="mt-5 font-display text-[2.5rem] font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-[4.25rem]">
            Book trusted{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-br from-accent to-[oklch(0.55_0.2_15)] bg-clip-text text-transparent">
                security experts
              </span>
              <span aria-hidden className="absolute bottom-1 left-0 right-0 -z-0 h-3 rounded-sm bg-accent/15" />
            </span>{" "}
            near you
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            CCTV • Intercom • Biometric • Smart Locks — installed by verified pros, with transparent pricing and a 6-month warranty.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-7 flex flex-col gap-2 rounded-2xl border border-border bg-card p-2 shadow-elevated sm:flex-row sm:items-center"
          >
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <label htmlFor="hero-search" className="sr-only">What service do you need?</label>
              <input
                id="hero-search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="What service do you need?"
                className="h-12 w-full rounded-xl bg-transparent pl-11 pr-3 text-base outline-none"
              />
            </div>
            <Button variant="cta" size="lg" asChild>
              <Link to="/book">Book Service</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/book" search={{ quote: 1 }}>Get Free Quote</Link>
            </Button>
          </form>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-muted-foreground">Popular:</span>
            {popular.map((p) => (
              <Link
                key={p}
                to="/book"
                className="rounded-full border border-border bg-card px-3 py-1 font-medium text-foreground/80 hover:bg-muted"
              >
                {p}
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border pt-6">
            <Stat value="4.8★" label="12,400+ reviews" />
            <Stat value="1,000+" label="Installations done" />
            <Stat value="6 mo" label="Warranty included" />
          </div>
        </div>

        <div className="relative lg:col-span-6 xl:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-elevated">
            <img
              src={heroImg}
              alt="Modern living room with a discreet security camera installed near the ceiling"
              className="h-full w-full object-cover"
              width={1024}
              height={1280}
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 40%, oklch(0.18 0.02 250 / 0.55) 100%)",
              }}
            />

            {/* Floating: live monitoring badge */}
            <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold shadow-card backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-destructive" />
              </span>
              Live • Recording
            </div>

            {/* Floating: rating chip */}
            <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-card">
              <Star className="h-3.5 w-3.5 fill-warning text-warning" />
              4.8 · Verified pros
            </div>

            {/* Floating booking card (bottom-left) */}
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/40 bg-card/95 p-3 shadow-elevated backdrop-blur sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-[280px]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Zap className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                    Next available
                  </div>
                  <div className="font-display text-sm font-bold">Today, 4:00 PM</div>
                </div>
                <Button size="sm" variant="cta" asChild>
                  <Link to="/book">Book</Link>
                </Button>
              </div>
            </div>

            {/* Floating: warranty badge */}
            <div className="absolute -left-3 top-1/3 hidden rotate-[-6deg] rounded-2xl bg-card px-3 py-2 shadow-elevated lg:flex lg:items-center lg:gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-success/15 text-success">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-bold">6 mo warranty</div>
                <div className="text-[10px] text-muted-foreground">Every installation</div>
              </div>
            </div>

            {/* Floating: starting price */}
            <div className="absolute -right-2 bottom-1/3 hidden rotate-[4deg] items-center gap-2 rounded-2xl bg-primary px-3 py-2 text-primary-foreground shadow-elevated lg:flex">
              <Sparkles className="h-4 w-4 text-accent" />
              <div>
                <div className="text-[10px] uppercase tracking-wide opacity-70">Starting</div>
                <div className="font-display text-sm font-bold">₹499</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* trusted-by strip */}
      <div className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 py-5 text-xs font-medium text-muted-foreground md:px-6">
          <span className="opacity-70">We install only authorised products from</span>
          {["Hikvision", "CP Plus", "Yale", "Godrej", "Realtime", "Honeywell"].map((b) => (
            <span key={b} className="font-display text-sm font-bold text-foreground/70 tracking-tight">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-xl font-bold leading-none">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
