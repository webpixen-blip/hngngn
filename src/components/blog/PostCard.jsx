"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function PostCard({ post }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col h-full rounded-3xl glass-morphism overflow-hidden transition-all"
    >
      <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10" />
      
      {/* Cover Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-brand/20 to-accent/10 flex items-center justify-center">
            <span className="text-4xl">✨</span>
          </div>
        )}
        
        {/* Category Tag */}
        {post.category && (
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest text-brand">
              {post.category.name}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-4 text-[10px] text-foreground/40 mb-4 font-bold uppercase tracking-widest">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>5 min read</span>
          </div>
        </div>

        <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-brand transition-colors leading-tight">
          {post.title}
        </h3>
        
        <p className="text-sm text-foreground/60 line-clamp-2 mb-6 leading-relaxed">
          {post.excerpt || "Discover the future of high-end design and modern technology interfaces..."}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-xs font-bold text-premium group-hover:text-brand transition-colors flex items-center gap-1">
            Read Article
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </div>
      </div>
    </motion.div>
  )
}
