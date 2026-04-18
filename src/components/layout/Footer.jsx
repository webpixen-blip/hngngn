import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="h-6 w-6 rounded bg-gradient-to-br from-brand to-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-heading font-bold tracking-tight text-premium">
                Aura<span className="text-brand">Blog</span>
              </span>
            </Link>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Exploring the frontiers of design, technology, and futuristic interfaces. A premium publication for the modern era.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold mb-6 text-sm uppercase tracking-wider text-foreground/40">Sections</h3>
            <ul className="space-y-4">
              <li><Link href="/blog" className="text-sm text-foreground/70 hover:text-brand transition-colors">Latest Articles</Link></li>
              <li><Link href="/categories" className="text-sm text-foreground/70 hover:text-brand transition-colors">Categories</Link></li>
              <li><Link href="/newsletter" className="text-sm text-foreground/70 hover:text-brand transition-colors">Newsletter</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-6 text-sm uppercase tracking-wider text-foreground/40">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm text-foreground/70 hover:text-brand transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-foreground/70 hover:text-brand transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-sm text-foreground/70 hover:text-brand transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-6 text-sm uppercase tracking-wider text-foreground/40">Social</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-foreground/70 hover:text-brand transition-colors">Twitter</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-brand transition-colors">GitHub</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-brand transition-colors">Discord</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground/40">
            © {new Date().getFullYear()} AuraBlog. All rights reserved.
          </p>
          <div className="flex gap-6">
            <p className="text-xs text-foreground/40 italic">Built with Next.js & Passion</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
