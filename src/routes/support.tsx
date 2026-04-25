import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileBottomBar } from "@/components/site/MobileBottomBar";
import { Phone, MessageCircle, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support — SafeNest" },
      { name: "description", content: "Get help with bookings, installations and warranty. Reach our support team via call, WhatsApp or email." },
    ],
  }),
  component: SupportPage,
});

function SupportPage() {
  const channels = [
    { icon: Phone, title: "Call us", value: "+91 80000 12345", note: "Mon–Sun, 8am–10pm" },
    { icon: MessageCircle, title: "WhatsApp", value: "Chat with us", note: "Avg reply in 5 min" },
    { icon: Mail, title: "Email", value: "help@safenest.in", note: "Reply within 12 hrs" },
  ];
  const faqs = [
    { q: "How quickly can a technician reach me?", a: "Same-day visits are available in most metros if you book before 5pm. Otherwise we'll schedule the next slot you choose." },
    { q: "Are products genuine?", a: "Yes — we use only authorised products from Hikvision, CP Plus, Yale, Godrej, Realtime and similar brands. You receive original invoices." },
    { q: "What does warranty cover?", a: "All installations include a minimum 6 months service warranty. Hardware carries the manufacturer warranty (1–3 years)." },
    { q: "Can I reschedule a booking?", a: "Yes — free rescheduling up to 2 hours before your slot from the My Bookings page." },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pb-24 lg:pb-0">
        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">We're here to help</h1>
            <p className="mt-3 max-w-xl text-muted-foreground">Real humans, fast replies. Choose any channel below.</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {channels.map((c) => (
              <div key={c.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{c.title}</h3>
                <p className="mt-1 text-base font-medium">{c.value}</p>
                <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" /> {c.note}
                </p>
              </div>
            ))}
          </div>

          <h2 className="mt-16 font-display text-2xl font-bold">Frequently asked</h2>
          <div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card">
            {faqs.map((f) => (
              <details key={f.q} className="group p-5">
                <summary className="cursor-pointer list-none font-medium [&::-webkit-details-marker]:hidden flex justify-between items-center">
                  {f.q}
                  <span className="ml-4 text-muted-foreground transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
