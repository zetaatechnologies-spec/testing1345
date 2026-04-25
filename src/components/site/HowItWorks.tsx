import { MousePointerClick, CalendarClock, UserCheck } from "lucide-react";

const steps = [
  { icon: MousePointerClick, title: "Choose your service", desc: "Pick from CCTV, intercom, biometric or smart locks." },
  { icon: CalendarClock, title: "Pick date & time", desc: "Same-day or schedule a slot that suits you." },
  { icon: UserCheck, title: "Technician arrives", desc: "Verified pro shows up on time, with all tools." },
];

export function HowItWorks() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">How it works</h2>
          <p className="mt-2 text-muted-foreground">Three simple steps from booking to peace of mind.</p>
        </div>

        <div className="relative mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div aria-hidden className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
          {steps.map((s, i) => (
            <div key={s.title} className="relative flex flex-col items-center rounded-2xl bg-card p-6 text-center shadow-soft">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-elevated">
                <s.icon className="h-7 w-7" />
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground shadow">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
