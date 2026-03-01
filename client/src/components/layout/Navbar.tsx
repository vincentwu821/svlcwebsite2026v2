import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Mission", href: "#about" },
    { name: "People", href: "#people" },
    { name: "Events", href: "#events" },
    { name: "Members", href: "#membership" },
    { name: "Donation", href: "/support" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "glass bg-white/80 border-black/5 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-700 text-white flex items-center justify-center text-sm font-bold tracking-wide shadow-md shadow-slate-300/70">
              SV
            </span>
            <span className="leading-tight">
              <span className="block text-xl font-bold tracking-tight text-gray-900">SVLC</span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.16em] text-gray-500">
                Silicon Valley Leadership Community
              </span>
            </span>
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="rounded-full px-6" size="sm">
            <Link href="/join">
              <a>Join Now</a>
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-4 md:hidden shadow-lg animate-in slide-in-from-top-2">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-600 hover:text-black"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="w-full rounded-full mt-2">
            <Link href="/join">
              <a onClick={() => setMobileMenuOpen(false)}>Join Now</a>
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
