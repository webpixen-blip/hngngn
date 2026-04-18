"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function getPosts() {
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      include: {
        author: true,
        category: true,
      },
      orderBy: { createdAt: "desc" },
    })
    return { success: true, data: posts }
  } catch (error) {
    console.error("Error fetching posts:", error)
    return { success: false, error: "Failed to fetch posts" }
  }
}

export async function getPostBySlug(slug) {
  try {
    const post = await prisma.post.findUnique({
      where: { slug },
      include: {
        author: true,
        category: true,
      },
    })
    return { success: true, data: post }
  } catch (error) {
    console.error("Error fetching post:", error)
    return { success: false, error: "Failed to fetch post" }
  }
}

export async function createPost(data) {
  try {
    const post = await prisma.post.create({
      data,
    })
    revalidatePath("/blog")
    revalidatePath("/admin")
    return { success: true, data: post }
  } catch (error) {
    console.error("Error creating post:", error)
    return { success: false, error: "Failed to create post" }
  }
}
