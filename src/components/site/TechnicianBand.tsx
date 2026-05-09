import { Link } from "@tanstack/react-router";
import { BadgeCheck, Award, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import technicianImg from "@/assets/technician.jpg";

export function TechnicianBand() {
  return (
    <section className="border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-12 lg:gap-16">
        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-3xl shadow-elevated">
            <img
              src={technicianImg}
              alt="Verified Zetaa Technologies technician at the doorstep"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          {/* Floating verified badge */}
          <div className="absolute -bottom-4 -right-2 flex items-center gap-3 rounded-2xl bg-card p-3 text-foreground shadow-elevated md:-right-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-success/15 text-success">
              <BadgeCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-bold">ID-verified pro</div>
              <div className="text-[11px] text-muted-foreground">Background-checked</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Real people. Real expertise.
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Vetted technicians. <br className="hidden sm:block" />
            Trained, uniformed, on time.
          </h2>
          <p className="mt-4 max-w-xl text-base text-primary-foreground/80">
            Every Zetaa Technologies pro is background-verified, factory-trained on the brands we install,
            and rated after every visit. You know exactly who's at your door — before they ring the bell.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Pill icon={<BadgeCheck className="h-4 w-4" />} text="Police-verified ID" />
            <Pill icon={<Award className="h-4 w-4" />} text="Brand-certified pros" />
            <Pill icon={<Wrench className="h-4 w-4" />} text="Tools & parts in-hand" />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button variant="cta" size="lg" asChild className="shadow-glow">
              <Link to="/book">Book a visit</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild className="text-primary-foreground hover:bg-white/10">
              <Link to="/support">Talk to our team</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 text-sm font-medium backdrop-blur">
      <span className="text-accent">{icon}</span>
      {text}
    </div>
  );
}
