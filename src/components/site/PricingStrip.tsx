import { IndianRupee, ShieldCheck, Eye } from "lucide-react";

export function PricingStrip() {
  const items = [
    { icon: IndianRupee, title: "Starting from ₹499", desc: "Honest, upfront pricing" },
    { icon: ShieldCheck, title: "No hidden charges", desc: "Final price = quoted price" },
    { icon: Eye, title: "Free inspection", desc: "We assess before you commit" },
  ];
  return (
    <section className="border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-8 md:grid-cols-3 md:px-6">
        {items.map((it) => (
          <div key={it.title} className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <it.icon className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display font-semibold">{it.title}</div>
              <div className="text-sm opacity-80">{it.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
