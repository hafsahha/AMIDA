"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#works", label: "Works" },
    { href: "#experience", label: "Exp" },
  ]

  return (
    <>
      {/* <CHANGE> Replaced editorial layout with floating glass pill navigation */}
      {/* Desktop/Tablet: Floating Glass Pill at Top Center */}
      <div className="hidden md:block">
        {/* Logo moved to fixed top-left position */}
        <div className="fixed top-6 left-8 z-50 flex items-center gap-3">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold tracking-[0.15em] text-foreground leading-none">
            AMIDA
          </h1>
          <span className="text-primary font-bold text-2xl">谧</span>
        </div>

        {/* Floating Glass Pill Navigation at Top Center */}
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
          <div className="glass-panel px-6 py-3 rounded-full border border-foreground/10 backdrop-blur-xl bg-background/30 shadow-2xl transition-all duration-300 hover:px-8 hover:shadow-[0_0_40px_rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              
              <div className="w-px h-4 bg-foreground/10" />
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full h-8 w-8"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile: Keep existing mobile navigation */}
      <div className="md:hidden">
        <div className="fixed top-6 left-6 z-50 flex items-center gap-2">
          <h1 className="font-serif text-3xl font-bold tracking-[0.15em] text-foreground leading-none">AMIDA</h1>
          <span className="text-primary font-bold text-xl">谧</span>
        </div>

        <div className="fixed top-6 right-6 z-50 flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[60vh] rounded-t-3xl glass-panel border-t">
              <nav className="flex flex-col items-center justify-center h-full gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-serif font-bold hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  )
}
