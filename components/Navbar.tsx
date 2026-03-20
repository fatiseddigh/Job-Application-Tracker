import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-semibold text-foreground"
        >
          <div className="flex size-8 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Briefcase className="size-4" />
          </div>
          <span>Job Tracker</span>
        </Link>

        <div className="flex items-center gap-3">
          <Link href="/sign-in">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button size="sm" className="px-4">
              Start for free
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
