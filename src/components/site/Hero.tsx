import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, Zap, IndianRupee, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const popular = ["CCTV Installation", "Smart Locks", "Intercom", "Biometric"];

export function Hero() {
  const [q, setQ] = useState("");

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 0%, oklch(0.95 0.05 35 / 0.5), transparent 60%), radial-gradient(50% 40% at 0% 100%, oklch(0.95 0.04 270 / 0.4), transparent 60%)",
        }}
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 md:px-6 md:py-20 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium shadow-soft">
            <span className="flex h-2 w-2 rounded-full bg-success" />
            Same-day service available
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Book trusted{" "}
            <span className="bg-gradient-to-r from-accent to-[oklch(0.6_0.2_15)] bg-clip-text text-transparent">
              security experts
            </span>{" "}
            near you
          </h1>
          <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
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

          <div className="mt-8 grid grid-cols-3 gap-3 max-w-lg">
            <Trust icon={<Zap className="h-4 w-4 text-accent" />} label="Same-day service" />
            <Trust icon={<IndianRupee className="h-4 w-4 text-accent" />} label="Starting ₹499" />
            <Trust icon={<ShieldCheck className="h-4 w-4 text-accent" />} label="6-mo warranty" />
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative mx-auto max-w-md">
            <div className="rounded-3xl border border-border bg-card p-5 shadow-elevated">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium text-muted-foreground">Next available slot</div>
                  <div className="mt-0.5 font-display text-lg font-bold">Today, 4:00 PM</div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/15 text-success">
                  <Zap className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  { name: "CCTV Installation", price: "From ₹1,499", tone: "bg-[oklch(0.95_0.04_270)] text-[oklch(0.45_0.18_270)]" },
                  { name: "Smart Door Locks", price: "From ₹2,499", tone: "bg-[oklch(0.95_0.04_230)] text-[oklch(0.5_0.15_230)]" },
                  { name: "Biometric Attendance", price: "From ₹1,799", tone: "bg-[oklch(0.95_0.04_300)] text-[oklch(0.5_0.18_300)]" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between rounded-xl border border-border bg-background p-3">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${item.tone}`}>
                        <ShieldCheck className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{item.name}</div>
                        <div className="text-xs text-muted-foreground">{item.price}</div>
                      </div>
                    </div>
                    <Button size="sm" variant="soft" asChild>
                      <Link to="/book">Book</Link>
                    </Button>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between rounded-xl bg-primary p-3 text-primary-foreground">
                <div className="flex items-center gap-2 text-sm">
                  <Star className="h-4 w-4 fill-warning text-warning" />
                  <span className="font-semibold">4.8</span>
                  <span className="opacity-80">• 12,400+ reviews</span>
                </div>
                <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide">
                  Verified pros
                </span>
              </div>
            </div>

            <div className="absolute -left-4 -top-4 hidden rounded-2xl bg-card p-3 shadow-elevated sm:block">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-success/15 text-success">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold">Warranty included</div>
                  <div className="text-[10px] text-muted-foreground">6 months on every install</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-xs font-medium shadow-soft">
      {icon}
      <span>{label}</span>
    </div>
  );
}
