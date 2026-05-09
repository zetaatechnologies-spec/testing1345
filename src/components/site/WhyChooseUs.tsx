import { BadgeCheck, ShieldCheck, PackageCheck, Clock4, Trophy } from "lucide-react";
import { trustStats } from "@/data/services";

const reasons = [
  { icon: BadgeCheck, title: "Verified technicians", desc: "Background-checked & trained pros." },
  { icon: ShieldCheck, title: "6 months warranty", desc: "On every installation, no questions asked." },
  { icon: PackageCheck, title: "Genuine products", desc: "Authorised dealers — original invoices." },
  { icon: Clock4, title: "Same-day support", desc: "Help when you need it most." },
  { icon: Trophy, title: "1,000+ installs", desc: "Trusted across 5 metros." },
];

export function WhyChooseUs() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              Why families & businesses choose Zetaa Technologies
            </h2>
            <p className="mt-3 text-muted-foreground">
              We obsess over reliability — from the first call to the final test of your system.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {trustStats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-card p-4 shadow-soft">
                  <div className="font-display text-2xl font-bold">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8">
            {reasons.map((r) => (
              <div key={r.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <r.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display font-semibold">{r.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{r.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
