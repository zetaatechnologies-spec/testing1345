import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — Zetaa Technologies" },
      { name: "description", content: "Sign in to manage bookings and AMC plans." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const valid = /^[6-9]\d{9}$/.test(phone);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-elevated">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <h1 className="mt-5 text-center font-display text-2xl font-bold">Welcome back</h1>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Login with your phone to manage bookings.
          </p>

          {!sent ? (
            <form
              className="mt-8 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                if (valid) setSent(true);
              }}
            >
              <div>
                <label htmlFor="phone" className="text-sm font-medium">Phone number</label>
                <div className="mt-1.5 flex h-12 overflow-hidden rounded-xl border border-input focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/20">
                  <span className="flex items-center bg-muted px-3 text-sm font-medium">+91</span>
                  <input
                    id="phone"
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                    placeholder="10-digit mobile number"
                    className="flex-1 bg-transparent px-3 outline-none"
                    aria-invalid={phone.length > 0 && !valid}
                  />
                </div>
                {phone.length > 0 && !valid && (
                  <p className="mt-1.5 text-xs text-destructive">Enter a valid 10-digit Indian mobile number.</p>
                )}
              </div>
              <Button variant="cta" size="lg" className="w-full" type="submit" disabled={!valid}>
                Send OTP
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                By continuing you agree to our <Link to="/" className="underline">Terms</Link>.
              </p>
            </form>
          ) : (
            <div className="mt-8 rounded-xl bg-primary-soft p-4 text-center text-sm text-primary">
              OTP sent to +91 {phone}. (Demo — connect Lovable Cloud to enable real auth.)
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
