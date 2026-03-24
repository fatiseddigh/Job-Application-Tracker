"use client";

import { Briefcase, LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { signOut, useSession } from "@/lib/auth/auth-client";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const router = useRouter();
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/20 bg-background/90 backdrop-blur-xl shadow-sm">
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

        {/* Actions */}
        <div className="flex items-center gap-3">
          {session?.user ? (
            <>
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  Dashboard
                </Button>
              </Link>

              {/* User Avatar Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative h-10 w-10 rounded-full p-0"
                  onClick={() => setOpen(!open)}
                >
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary text-white">
                      {session.user.name[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>

                {open && (
                  <div className="absolute right-0 mt-2 w-56 rounded-md border border-border bg-card shadow-lg py-2 z-50">
                    <div className="px-4 py-2 border-b border-border">
                      <p className="text-sm font-medium">{session.user.name}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        {session.user.email}
                      </p>
                    </div>

                    <Link
                      href="/"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-muted cursor-pointer"
                    >
                      <User className="size-4" />
                      Profile
                    </Link>
                    <Link
                      href="/"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-muted cursor-pointer"
                    >
                      <Settings className="size-4" />
                      Settings
                    </Link>
                    <div
                      onClick={async () => {
                        const result = await signOut();
                        if (result.data) router.push("/sign-in");
                        else alert("Error signing out");
                      }}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-muted cursor-pointer"
                    >
                      <LogOut className="size-4" />
                      Log Out
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
