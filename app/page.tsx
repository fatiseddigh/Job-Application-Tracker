import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        <section className="relative container mx-auto px-4 py-32 text-center">
          {/* subtle gradient glow */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_60%)]" />

          <div className="mx-auto max-w-3xl">
            {/* headline */}
            <h1 className="mb-6 text-5xl sm:text-6xl font-bold tracking-tight text-foreground">
              Land Your Dream Job <span className="text-primary">Faster</span>
            </h1>

            {/* subtitle */}
            <p className="mb-10 text-lg sm:text-xl text-muted-foreground">
              Track applications, interviews, and follow-ups in one smart
              dashboard. Stay organized. Stay ahead.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/sign-up">
                <Button size="lg" className="px-8">
                  Get Started Free
                  <ArrowRight className="ml-2 size-5" />
                </Button>
              </Link>

              <Link href="/learn-more">
                <Button variant="outline" size="lg" className="px-8">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
