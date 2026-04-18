import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import Image from "next/image"
import { Calendar, Clock, Share2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Dummy data for a single post
const DUMMY_POST = {
  title: "The Future of Minimalist Design in 2026",
  slug: "future-of-minimalist-design",
  content: `
    <p>Minimalism has always been about more than just the absence of clutter. It's a philosophy of intentionality. As we move into 2026, we're seeing this philosophy merge with advanced technology to create something entirely new: <strong>Immersive Minimalism</strong>.</p>
    
    <h2>The Rise of Tactile Digital Interfaces</h2>
    <p>In the past, minimalist digital design meant flat surfaces and simple colors. Today, we're utilizing glassmorphism, depth, and spatial audio to create interfaces that feel physically present yet visually silent. This paradox is the heart of modern premium design.</p>
    
    <blockquote>"The best design is the one you don't even notice until it's gone." - Aura Design Bureau</blockquote>
    
    <h2>AI-Driven Personalization</h2>
    <p>We are no longer building static pages. The layouts of tomorrow adapt in real-time to the user's focus, lighting conditions, and cognitive load. By removing everything that isn't necessary for the current moment, we achieve a state of pure flow.</p>
    
    <p>As we continue to explore these boundaries, the line between the physical and digital becomes increasingly blurred, leaving us with a seamless, high-end experience that respects the user's attention above all else.</p>
  `,
  excerpt: "Exploring how minimalism is evolving with AI-driven interfaces and immersive glass textures.",
  coverImage: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2067&auto=format&fit=crop",
  createdAt: new Date(),
  category: { name: "Design" },
  author: { name: "Aura Team", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop" }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <Navbar />
      <main className="flex-1 pb-20">
        {/* POST HEADER */}
        <header className="relative w-full h-[60vh] md:h-[70vh] flex items-end pb-12 overflow-hidden">
          <Image 
            src={DUMMY_POST.coverImage} 
            alt={DUMMY_POST.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          
          <div className="container mx-auto px-6 relative z-10">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-sm font-bold text-brand mb-6 hover:-translate-x-1 transition-transform"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Archive
            </Link>
            
            <div className="max-w-4xl">
              <span className="px-3 py-1 rounded-full bg-brand text-white text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">
                {DUMMY_POST.category.name}
              </span>
              <h1 className="text-4xl md:text-7xl font-heading font-bold mb-6 leading-tight text-premium">
                {DUMMY_POST.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-foreground/60">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full overflow-hidden relative">
                    <Image src={DUMMY_POST.author.image} alt={DUMMY_POST.author.name} fill className="object-cover" />
                  </div>
                  <span className="font-medium">{DUMMY_POST.author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{DUMMY_POST.createdAt.toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>6 min read</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* POST CONTENT */}
        <section className="container mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row gap-20">
            <article className="flex-1 max-w-3xl">
              <div 
                className={cn(
                  "prose prose-invert prose-lg max-w-none",
                  "prose-headings:font-heading prose-headings:font-bold prose-headings:tracking-tight",
                  "prose-p:text-foreground/80 prose-p:leading-relaxed",
                  "prose-blockquote:border-brand prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:italic"
                )}
                dangerouslySetInnerHTML={{ __html: DUMMY_POST.content }}
              />
              
              <div className="mt-20 pt-12 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-foreground/40">Share</span>
                  <div className="flex gap-2">
                    <button className="h-10 w-10 rounded-full glass-border flex items-center justify-center hover:bg-white/5 transition-colors">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  {["Design", "Future", "UI"].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-[10px] text-foreground/60 font-medium">#{tag}</span>
                  ))}
                </div>
              </div>
            </article>

            {/* SIDEBAR / RELATED */}
            <aside className="lg:w-80">
              <div className="sticky top-32 space-y-12">
                <div className="p-8 rounded-3xl glass-border bg-white/[0.02]">
                  <h3 className="font-heading font-bold mb-6">Newsletter</h3>
                  <p className="text-sm text-foreground/60 mb-6">Get the latest insights directly in your inbox.</p>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/10 mb-4 text-sm"
                  />
                  <button className="w-full py-2 rounded-lg bg-brand text-white font-bold text-sm">Join</button>
                </div>

                <div>
                  <h3 className="font-heading font-bold mb-6">Related Posts</h3>
                  <div className="space-y-6">
                    {[1, 2].map((i) => (
                      <div key={i} className="group relative flex items-center gap-4">
                        <div className="h-16 w-16 rounded-xl overflow-hidden relative shrink-0">
                          <Image src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2067&auto=format&fit=crop" alt="Related" fill className="object-cover" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold group-hover:text-brand transition-colors line-clamp-2">The Evolution of Digital Art in 2026</h4>
                          <span className="text-[10px] text-foreground/40 font-bold uppercase tracking-widest">Jan 12, 2026</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
