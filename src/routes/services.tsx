import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileBottomBar } from "@/components/site/MobileBottomBar";
import { services, toneClasses } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "All Security Services — SafeNest" },
      { name: "description", content: "Browse CCTV, intercom, biometric and smart-lock services. Same-day booking, verified technicians, transparent pricing from ₹499." },
      { property: "og:title", content: "All Security Services — SafeNest" },
      { property: "og:description", content: "Verified technicians. Same-day service. Transparent pricing." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pb-24 lg:pb-0">
        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">All Services</h1>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Pick a service — we'll match you with a verified technician in your area.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const tone = toneClasses[s.tone];
              const Icon = s.icon;
              return (
                <Link
                  key={s.id}
                  to="/book"
                  search={{ service: s.id }}
                  className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-elevated"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.name}
                      loading="lazy"
                      width={800}
                      height={500}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className={`absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-xl ${tone.bg} shadow-soft`}>
                      <Icon className={`h-5 w-5 ${tone.text}`} />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold">{s.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
                    <div className="mt-4 flex items-center justify-between text-sm">
                      <span className="font-semibold">From ₹{s.startingPrice.toLocaleString("en-IN")}</span>
                      <span className="inline-flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" /> {s.duration}
                      </span>
                    </div>
                    <Button variant="soft" size="sm" className="mt-5 w-full justify-between">
                      Book this service
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </Button>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
