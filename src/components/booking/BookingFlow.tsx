import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { services, toneClasses, type Service } from "@/data/services";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  CalendarDays,
  MapPin,
  Loader2,
  PartyPopper,
  ShieldCheck,
} from "lucide-react";

type Step = 1 | 2 | 3 | 4;

const SLOTS = [
  "09:00 AM",
  "11:00 AM",
  "01:00 PM",
  "03:00 PM",
  "05:00 PM",
  "07:00 PM",
];

export function BookingFlow({ initialServiceId }: { initialServiceId?: string }) {
  const [step, setStep] = useState<Step>(1);
  const [serviceId, setServiceId] = useState<string | null>(initialServiceId ?? null);
  const [date, setDate] = useState<string | null>(null);
  const [slot, setSlot] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [bookingId, setBookingId] = useState<string | null>(null);

  const service = useMemo<Service | undefined>(
    () => services.find((s) => s.id === serviceId),
    [serviceId],
  );

  const dates = useMemo(() => {
    const out: { iso: string; label: string; sub: string; isToday: boolean }[] = [];
    const now = new Date();
    for (let i = 0; i < 7; i++) {
      const d = new Date(now);
      d.setDate(now.getDate() + i);
      out.push({
        iso: d.toISOString().slice(0, 10),
        label: d.toLocaleDateString("en-IN", { weekday: "short" }),
        sub: d.toLocaleDateString("en-IN", { day: "2-digit", month: "short" }),
        isToday: i === 0,
      });
    }
    return out;
  }, []);

  const isSlotDisabled = (s: string) => {
    if (!date) return true;
    if (date !== dates[0].iso) return false;
    // For today, disable past slots based on current hour
    const hour = parseInt(s, 10) + (s.includes("PM") && !s.startsWith("12") ? 12 : 0);
    return hour <= new Date().getHours();
  };

  const validPhone = /^[6-9]\d{9}$/.test(phone);
  const validPincode = /^\d{6}$/.test(pincode);
  const step3Valid = name.trim().length >= 2 && validPhone && address.trim().length >= 8 && validPincode;

  const goNext = () => {
    if (step === 1 && service) setStep(2);
    else if (step === 2 && date && slot) setStep(3);
    else if (step === 3 && step3Valid) submit();
  };
  const goBack = () => setStep((s) => (s > 1 ? ((s - 1) as Step) : s));

  const submit = async () => {
    setSubmitting(true);
    // Backend hook: replace with API call (e.g. Lovable Cloud functions)
    await new Promise((r) => setTimeout(r, 1100));
    const id = "SN" + Math.random().toString(36).slice(2, 8).toUpperCase();
    setBookingId(id);
    setStep(4);
    setSubmitting(false);
  };

  if (step === 4 && bookingId && service) {
    return <Success bookingId={bookingId} service={service} date={date!} slot={slot!} address={address} />;
  }

  return (
    <div className="mx-auto max-w-4xl">
      <ProgressBar step={step} />

      <div className="mt-8 rounded-3xl border border-border bg-card p-5 shadow-soft md:p-8">
        {step === 1 && (
          <StepService selected={serviceId} onSelect={setServiceId} />
        )}
        {step === 2 && (
          <StepDateTime
            dates={dates}
            date={date}
            slot={slot}
            onDate={setDate}
            onSlot={setSlot}
            slotDisabled={isSlotDisabled}
          />
        )}
        {step === 3 && (
          <StepConfirm
            service={service!}
            date={date!}
            slot={slot!}
            name={name}
            phone={phone}
            address={address}
            pincode={pincode}
            onName={setName}
            onPhone={setPhone}
            onAddress={setAddress}
            onPincode={setPincode}
            validPhone={validPhone}
            validPincode={validPincode}
          />
        )}
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <Button variant="ghost" onClick={goBack} disabled={step === 1}>
          <ChevronLeft className="h-4 w-4" /> Back
        </Button>
        <Button
          variant="cta"
          size="lg"
          onClick={goNext}
          disabled={
            (step === 1 && !service) ||
            (step === 2 && (!date || !slot)) ||
            (step === 3 && !step3Valid) ||
            submitting
          }
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Confirming…
            </>
          ) : step === 3 ? (
            <>Confirm booking <Check className="h-4 w-4" /></>
          ) : (
            <>Continue <ChevronRight className="h-4 w-4" /></>
          )}
        </Button>
      </div>
    </div>
  );
}

function ProgressBar({ step }: { step: Step }) {
  const labels = ["Service", "Date & Time", "Confirm"];
  return (
    <ol className="grid grid-cols-3 gap-3">
      {labels.map((label, i) => {
        const idx = i + 1;
        const active = step === idx;
        const done = step > idx;
        return (
          <li key={label} className="flex flex-col items-center gap-2">
            <div className="flex w-full items-center gap-2">
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition ${
                  done
                    ? "bg-success text-success-foreground"
                    : active
                    ? "bg-accent text-accent-foreground shadow-glow"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {done ? <Check className="h-4 w-4" /> : idx}
              </div>
              <div className={`h-1 w-full rounded-full ${done ? "bg-success" : active ? "bg-accent/40" : "bg-muted"}`} />
            </div>
            <span className={`text-xs font-semibold ${active || done ? "text-foreground" : "text-muted-foreground"}`}>
              {label}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

function StepService({ selected, onSelect }: { selected: string | null; onSelect: (id: string) => void }) {
  return (
    <div>
      <h2 className="font-display text-xl font-bold md:text-2xl">Select a service</h2>
      <p className="mt-1 text-sm text-muted-foreground">Pick what you need — you can change packages later.</p>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {services.map((s) => {
          const tone = toneClasses[s.tone];
          const Icon = s.icon;
          const active = selected === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => onSelect(s.id)}
              className={`flex items-start gap-4 rounded-2xl border p-4 text-left transition ${
                active
                  ? "border-accent bg-accent/5 shadow-card ring-2 ring-accent/30"
                  : "border-border bg-background hover:border-foreground/20 hover:shadow-soft"
              }`}
            >
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${tone.bg}`}>
                <Icon className={`h-6 w-6 ${tone.text}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <div className="font-semibold">{s.name}</div>
                  {active && <Check className="h-4 w-4 text-accent" />}
                </div>
                <div className="mt-0.5 text-xs text-muted-foreground">{s.description}</div>
                <div className="mt-2 flex items-center gap-3 text-xs">
                  <span className="font-semibold">From ₹{s.startingPrice.toLocaleString("en-IN")}</span>
                  <span className="inline-flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-3 w-3" /> {s.duration}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepDateTime({
  dates,
  date,
  slot,
  onDate,
  onSlot,
  slotDisabled,
}: {
  dates: { iso: string; label: string; sub: string; isToday: boolean }[];
  date: string | null;
  slot: string | null;
  onDate: (d: string) => void;
  onSlot: (s: string) => void;
  slotDisabled: (s: string) => boolean;
}) {
  return (
    <div>
      <h2 className="font-display text-xl font-bold md:text-2xl">When should we come?</h2>
      <p className="mt-1 text-sm text-muted-foreground">Same-day visits available — pick your slot below.</p>

      <div className="mt-6">
        <div className="text-sm font-semibold">Select date</div>
        <div className="mt-3 -mx-1 flex gap-2 overflow-x-auto px-1 pb-2 scrollbar-hide">
          {dates.map((d) => {
            const active = date === d.iso;
            return (
              <button
                key={d.iso}
                type="button"
                onClick={() => onDate(d.iso)}
                className={`flex min-w-[78px] flex-col items-center rounded-2xl border px-3 py-3 transition ${
                  active
                    ? "border-accent bg-accent/10 ring-2 ring-accent/30"
                    : "border-border bg-background hover:border-foreground/20"
                }`}
              >
                <span className="text-xs font-medium text-muted-foreground">{d.isToday ? "Today" : d.label}</span>
                <span className="mt-1 font-display text-base font-bold">{d.sub}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-7">
        <div className="text-sm font-semibold">Select time slot</div>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {SLOTS.map((s) => {
            const disabled = slotDisabled(s);
            const active = slot === s;
            return (
              <button
                key={s}
                type="button"
                disabled={disabled}
                onClick={() => onSlot(s)}
                className={`rounded-xl border p-3 text-sm font-semibold transition ${
                  disabled
                    ? "cursor-not-allowed border-border bg-muted text-muted-foreground line-through opacity-60"
                    : active
                    ? "border-accent bg-accent/10 text-foreground ring-2 ring-accent/30"
                    : "border-border bg-background hover:border-foreground/20"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Past time slots are disabled. All visits include a free inspection.
        </p>
      </div>
    </div>
  );
}

function StepConfirm({
  service,
  date,
  slot,
  name,
  phone,
  address,
  pincode,
  onName,
  onPhone,
  onAddress,
  onPincode,
  validPhone,
  validPincode,
}: {
  service: Service;
  date: string;
  slot: string;
  name: string;
  phone: string;
  address: string;
  pincode: string;
  onName: (v: string) => void;
  onPhone: (v: string) => void;
  onAddress: (v: string) => void;
  onPincode: (v: string) => void;
  validPhone: boolean;
  validPincode: boolean;
}) {
  const tone = toneClasses[service.tone];
  const Icon = service.icon;
  const dateLabel = new Date(date).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "2-digit",
    month: "short",
  });

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <h2 className="font-display text-xl font-bold md:text-2xl">Where should we come?</h2>
        <p className="mt-1 text-sm text-muted-foreground">We'll call to confirm before dispatching the technician.</p>

        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <Field label="Full name" htmlFor="b-name">
            <input
              id="b-name"
              value={name}
              onChange={(e) => onName(e.target.value)}
              placeholder="e.g. Rohan Mehta"
              className="h-11 w-full rounded-xl border border-input bg-background px-3 outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
              required
            />
          </Field>

          <Field
            label="Phone number"
            htmlFor="b-phone"
            error={phone.length > 0 && !validPhone ? "Enter a valid 10-digit Indian mobile." : undefined}
          >
            <div className="flex h-11 overflow-hidden rounded-xl border border-input focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/20">
              <span className="flex items-center bg-muted px-3 text-sm font-medium">+91</span>
              <input
                id="b-phone"
                type="tel"
                inputMode="numeric"
                maxLength={10}
                value={phone}
                onChange={(e) => onPhone(e.target.value.replace(/\D/g, ""))}
                placeholder="10-digit mobile"
                className="flex-1 bg-transparent px-3 outline-none"
                required
              />
            </div>
          </Field>

          <Field label="Address" htmlFor="b-address">
            <textarea
              id="b-address"
              value={address}
              onChange={(e) => onAddress(e.target.value)}
              placeholder="House / flat no., street, area, landmark"
              rows={3}
              className="w-full resize-none rounded-xl border border-input bg-background p-3 outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
              required
            />
          </Field>

          <Field
            label="Pincode"
            htmlFor="b-pincode"
            error={pincode.length > 0 && !validPincode ? "Enter a valid 6-digit pincode." : undefined}
          >
            <input
              id="b-pincode"
              inputMode="numeric"
              maxLength={6}
              value={pincode}
              onChange={(e) => onPincode(e.target.value.replace(/\D/g, ""))}
              placeholder="e.g. 560001"
              className="h-11 w-full rounded-xl border border-input bg-background px-3 outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
              required
            />
          </Field>
        </form>
      </div>

      <aside className="lg:col-span-2">
        <div className="sticky top-24 rounded-2xl border border-border bg-surface p-5">
          <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Booking summary</div>

          <div className="mt-4 flex items-start gap-3">
            <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${tone.bg}`}>
              <Icon className={`h-5 w-5 ${tone.text}`} />
            </div>
            <div>
              <div className="font-semibold">{service.name}</div>
              <div className="text-xs text-muted-foreground">{service.duration}</div>
            </div>
          </div>

          <dl className="mt-5 space-y-3 text-sm">
            <Row icon={<CalendarDays className="h-4 w-4 text-muted-foreground" />} k="Date" v={dateLabel} />
            <Row icon={<Clock className="h-4 w-4 text-muted-foreground" />} k="Time" v={slot} />
            <Row
              icon={<MapPin className="h-4 w-4 text-muted-foreground" />}
              k="Address"
              v={address ? `${address}${pincode ? `, ${pincode}` : ""}` : "—"}
            />
          </dl>

          <div className="mt-5 border-t border-border pt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Visit charge (waived on booking)</span>
              <span className="line-through">₹199</span>
            </div>
            <div className="mt-1 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Starting price</span>
              <span className="font-semibold">₹{service.startingPrice.toLocaleString("en-IN")}</span>
            </div>
            <div className="mt-3 flex items-center justify-between rounded-xl bg-success/10 px-3 py-2 text-xs font-medium text-success">
              <span>Free inspection included</span>
              <ShieldCheck className="h-4 w-4" />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-sm font-medium">
        {label}
      </label>
      <div className="mt-1.5">{children}</div>
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function Row({ icon, k, v }: { icon: React.ReactNode; k: string; v: string }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div className="flex items-center gap-2 text-muted-foreground">
        {icon}
        <span>{k}</span>
      </div>
      <span className="text-right font-medium">{v}</span>
    </div>
  );
}

function Success({
  bookingId,
  service,
  date,
  slot,
  address,
}: {
  bookingId: string;
  service: Service;
  date: string;
  slot: string;
  address: string;
}) {
  const dateLabel = new Date(date).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "2-digit",
    month: "short",
  });
  return (
    <div className="mx-auto max-w-xl text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success text-success-foreground shadow-elevated">
        <PartyPopper className="h-8 w-8" />
      </div>
      <h2 className="mt-5 font-display text-2xl font-bold md:text-3xl">Booking confirmed!</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Your booking ID is <span className="font-semibold text-foreground">{bookingId}</span>. We've sent details to your phone.
      </p>

      <div className="mt-8 rounded-2xl border border-border bg-card p-6 text-left shadow-soft">
        <Row icon={<ShieldCheck className="h-4 w-4 text-muted-foreground" />} k="Service" v={service.name} />
        <div className="my-3 h-px bg-border" />
        <Row icon={<CalendarDays className="h-4 w-4 text-muted-foreground" />} k="Date" v={dateLabel} />
        <div className="my-3 h-px bg-border" />
        <Row icon={<Clock className="h-4 w-4 text-muted-foreground" />} k="Time" v={slot} />
        <div className="my-3 h-px bg-border" />
        <Row icon={<MapPin className="h-4 w-4 text-muted-foreground" />} k="Address" v={address} />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button variant="outline" asChild>
          <Link to="/bookings">View my bookings</Link>
        </Button>
        <Button variant="cta" asChild>
          <Link to="/">Back to home</Link>
        </Button>
      </div>
    </div>
  );
}
