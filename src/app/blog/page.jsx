import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { PostCard } from "@/components/blog/PostCard"
import { Search } from "lucide-react"

// Dummy data for now
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
  {
    id: "4",
    title: "Neural Interfaces: The Next Human Epoch",
    slug: "neural-interfaces",
    excerpt: "Bridging the gap between biological thought and digital computation.",
    coverImage: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop",
    createdAt: new Date(),
    category: { name: "Science" },
  },
  {
    id: "5",
    title: "Ethical AI: Building for Humanity",
    slug: "ethical-ai",
    excerpt: "Frameworks for ensuring a responsible and fair digital future.",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    createdAt: new Date(),
    category: { name: "AI" },
  },
  {
    id: "6",
    title: "Space Tourism: A New Frontier",
    slug: "space-tourism",
    excerpt: "The commercialization of the cosmos and what it means for the adventurous soul.",
    coverImage: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop",
    createdAt: new Date(),
    category: { name: "Space" },
  },
]

const CATEGORIES = ["All", "Design", "Tech", "Science", "AI", "Space", "Environment"]

export default function BlogListingPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <section className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Archive of <span className="text-brand">Future</span></h1>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Explore our complete collection of insights, investigations, and stories about the world of tomorrow.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full glass-border text-[10px] font-bold uppercase tracking-widest whitespace-nowrap hover:bg-brand/10 hover:text-brand transition-all"
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full pl-12 pr-4 py-3 rounded-full glass-border bg-white/[0.02] focus:outline-none focus:border-brand transition-colors text-sm"
              />
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DUMMY_POSTS.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-20 flex justify-center items-center gap-4">
            <button className="h-10 w-10 rounded-full glass-border flex items-center justify-center hover:bg-white/5 transition-colors disabled:opacity-30" disabled>
              1
            </button>
            <button className="h-10 w-10 rounded-full glass-border flex items-center justify-center hover:bg-white/5 transition-colors">
              2
            </button>
            <button className="h-10 w-10 rounded-full glass-border flex items-center justify-center hover:bg-white/5 transition-colors">
              3
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
