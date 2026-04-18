import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { PostCard } from "@/components/blog/PostCard"
import { ArrowRight, Sparkles, TrendingUp, Zap } from "lucide-react"
import Link from "next/link"

// Dummy data for featured posts
const DUMMY_POSTS = [
  {
    id: "1",
    title: "The Future of Minimalist Design in 2026",
    slug: "future-of-minimalist-design",
    excerpt: "Exploring how minimalism is evolving with AI-driven interfaces and immersive glass textures.",
    coverImage: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2067&auto=format&fit=crop",
    createdAt: new Date(),
    category: { name: "Design" },
  },
  {
    id: "2",
    title: "Quantum Computing: Beyond the Hype",
    slug: "quantum-computing-beyond-hype",
    excerpt: "What developers actually need to know about the current state of quantum algorithms.",
    coverImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
    createdAt: new Date(),
    category: { name: "Tech" },
  },
  {
    id: "3",
    title: "Eco-Friendly Tech: Sustainable Innovation",
    slug: "eco-friendly-tech",
    excerpt: "How the next generation of hardware is prioritizing the planet without sacrificing power.",
    coverImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
    createdAt: new Date(),
    category: { name: "Environment" },
  },
]

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32">
        {/* --- HERO SECTION --- */}
        <section className="container mx-auto px-6 py-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-border bg-white/5 text-[10px] font-bold uppercase tracking-widest text-brand mb-8 animate-bounce">
              <Sparkles className="h-3 w-3" />
              <span>Next Gen Digital Publication</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-heading font-bold mb-8 leading-[1.1] tracking-tight">
              Elevating the <br />
              <span className="text-brand-gradient">Digital Dialogue</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/60 mb-12 leading-relaxed">
              Discover stories at the intersection of design, technology, and futuristic innovation. A premium experience for modern thinkers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/blog" 
                className="group relative px-8 py-4 rounded-full bg-brand text-white font-bold transition-all hover:scale-105 active:scale-95 glow-brand flex items-center gap-2"
              >
                Start Reading
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                href="/about" 
                className="px-8 py-4 rounded-full glass-morphism font-bold hover:bg-white/10 transition-all flex items-center gap-2"
              >
                Our Mission
              </Link>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-30">
             <div className="absolute top-[20%] left-[15%] w-64 h-64 bg-brand/20 blur-[100px] rounded-full" />
             <div className="absolute bottom-[20%] right-[15%] w-64 h-64 bg-accent/20 blur-[100px] rounded-full" />
          </div>
        </section>

        {/* --- STATS / TRUST --- */}
        <section className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-[40px] glass-border bg-white/[0.02]">
            <div className="text-center">
              <TrendingUp className="h-5 w-5 mx-auto mb-2 text-brand" />
              <div className="text-2xl font-bold font-heading">50K+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Readers</div>
            </div>
            <div className="text-center">
              <Zap className="h-5 w-5 mx-auto mb-2 text-brand" />
              <div className="text-2xl font-bold font-heading">200+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Articles</div>
            </div>
            <div className="text-center">
              <Sparkles className="h-5 w-5 mx-auto mb-2 text-brand" />
              <div className="text-2xl font-bold font-heading">15</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Awards</div>
            </div>
            <div className="text-center">
              <TrendingUp className="h-5 w-5 mx-auto mb-2 text-brand" />
              <div className="text-2xl font-bold font-heading">2026</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Founded</div>
            </div>
          </div>
        </section>

        {/* --- FEATURED ARTICLES --- */}
        <section className="container mx-auto px-6 py-32">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-4">Featured <span className="text-brand">Insights</span></h2>
              <p className="text-foreground/60">The handpicked selection of our most impactful stories.</p>
            </div>
            <Link href="/blog" className="hidden md:flex items-center gap-2 text-sm font-bold text-brand hover:underline">
              View all articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DUMMY_POSTS.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* --- NEWSLETTER --- */}
        <section className="container mx-auto px-6 py-32">
          <div className="relative p-12 md:p-24 rounded-[60px] glass-morphism overflow-hidden bg-gradient-to-br from-brand/10 to-transparent">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">Stay ahead of the <span className="text-brand">curve.</span></h2>
              <p className="text-lg text-foreground/60 mb-12">
                Join 50,000+ thinkers and gets the latest insights delivered weekly. No fluff, just pure innovation.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-8 py-4 rounded-full bg-black/20 border border-white/10 focus:outline-none focus:border-brand transition-colors backdrop-blur-md"
                />
                <button 
                  type="submit"
                  className="px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 active:scale-95 transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>
            
            {/* Background Shape */}
            <div className="absolute top-0 right-0 w-1/2 h-full -z-10 opacity-20 hidden md:block">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand blur-[150px] rounded-full" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
