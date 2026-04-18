"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "bg-background/60 backdrop-blur-md border-b border-white/5 py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand to-accent glow-brand flex items-center justify-center transition-transform group-hover:rotate-12">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <span className="text-2xl font-heading font-bold tracking-tight text-premium">
            Aura<span className="text-brand">Blog</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/blog" className="text-sm font-medium text-foreground/70 hover:text-brand transition-colors">
            Articles
          </Link>
          <Link href="/categories" className="text-sm font-medium text-foreground/70 hover:text-brand transition-colors">
            Categories
          </Link>
          <Link href="/about" className="text-sm font-medium text-foreground/70 hover:text-brand transition-colors">
            About
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="/admin" 
            className="hidden sm:block text-sm font-medium px-4 py-2 rounded-full glass-border hover:bg-white/5 transition-colors"
          >
            Dashboard
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
