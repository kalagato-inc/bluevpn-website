import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'c2x83nrr',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: false, // Use fresh data (no CDN cache) - important for seeing updates immediately
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2024-01-01',
  // token: import.meta.env.VITE_SANITY_TOKEN, // Only if you have a private dataset
})

// Helper to generate image URLs
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Portable Text to HTML serializer
export const portableTextToHtml = (blocks: any[]): string => {
  if (!blocks) return ''

  let currentList: { type: string; items: string[] } | null = null
  const result: string[] = []

  blocks.forEach((block, index) => {
    // Handle regular text blocks
    if (block._type === 'block') {
      const children = block.children
        ?.map((child: any) => {
          let text = child.text || ''

          // Handle links first (from markDefs)
          if (child.marks && child.marks.length > 0 && block.markDefs) {
            const linkMark = child.marks.find((mark: string) =>
              block.markDefs.some((def: any) => def._key === mark && def._type === 'link')
            )

            if (linkMark) {
              const linkDef = block.markDefs.find((def: any) => def._key === linkMark)
              if (linkDef && linkDef.href) {
                const target = linkDef.blank ? ' target="_blank" rel="noopener noreferrer"' : ''
                const linkClass = linkDef.linkType === 'external' ? 'external-link' : 'internal-link'
                text = `<a href="${linkDef.href}" class="${linkClass}"${target}>${text}</a>`
              }
            }
          }

          // Apply text marks (bold, italic, code) - but not if already wrapped in link
          if (child.marks && child.marks.length > 0 && !text.startsWith('<a ')) {
            child.marks.forEach((mark: string) => {
              if (mark === 'strong') text = `<strong>${text}</strong>`
              if (mark === 'em') text = `<em>${text}</em>`
              if (mark === 'code') text = `<code>${text}</code>`
            })
          }

          return text
        })
        .join('')

      // Handle list items
      if (block.listItem) {
        const listType = block.listItem === 'bullet' ? 'ul' : 'ol'

        if (!currentList || currentList.type !== listType) {
          // Close previous list if different type
          if (currentList) {
            result.push(`</${currentList.type}>`)
          }
          // Start new list
          currentList = { type: listType, items: [] }
        }

        currentList.items.push(`<li>${children}</li>`)

        // Close list if next block is not a list item or is last block
        const nextBlock = blocks[index + 1]
        if (!nextBlock || !nextBlock.listItem) {
          result.push(`<${currentList.type}>${currentList.items.join('')}</${currentList.type}>`)
          currentList = null
        }
      } else {
        // Close any open list
        if (currentList) {
          result.push(`<${currentList.type}>${currentList.items.join('')}</${currentList.type}>`)
          currentList = null
        }

        // Apply block-level styling
        const style = block.style || 'normal'

        if (style === 'h2') result.push(`<h2>${children}</h2>`)
        else if (style === 'h3') result.push(`<h3>${children}</h3>`)
        else if (style === 'h4') result.push(`<h4>${children}</h4>`)
        else if (style === 'blockquote') result.push(`<blockquote>${children}</blockquote>`)
        else result.push(`<p>${children}</p>`)
      }
    }
    // Handle images
    else if (block._type === 'image') {
      // Close any open list
      if (currentList) {
        result.push(`<${currentList.type}>${currentList.items.join('')}</${currentList.type}>`)
        currentList = null
      }

      const imageUrl = urlFor(block).width(1200).url()
      const alt = block.alt || ''
      result.push(`<img src="${imageUrl}" alt="${alt}" class="w-full rounded-xl my-8" />`)
    }
  })

  // Close any remaining open list
  if (currentList) {
    result.push(`<${currentList.type}>${currentList.items.join('')}</${currentList.type}>`)
  }

  return result.join('\n')
}

// Query to fetch all blog posts
export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  author,
  "mainImage": mainImage.asset->url,
  category,
  themeColor,
  publishedAt,
  readTime,
  excerpt,
  metaDescription,
  metaKeywords
}`

// Query to fetch a single blog post by slug
export const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  author,
  "mainImage": mainImage.asset->url,
  category,
  themeColor,
  publishedAt,
  readTime,
  excerpt,
  body,
  metaDescription,
  metaKeywords
}`

// Types
export interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  author: string
  mainImage: string
  category: string
  themeColor: 'blue' | 'purple' | 'emerald'
  publishedAt: string
  readTime: string
  excerpt: string
  body?: any[]
  metaDescription?: string
  metaKeywords?: string[]
}

// Fetch all posts
export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    console.log('📡 Sanity client config:', {
      projectId: client.config().projectId,
      dataset: client.config().dataset,
      useCdn: client.config().useCdn,
    })
    console.log('🔎 Running query:', POSTS_QUERY)
    const posts = await client.fetch(POSTS_QUERY)
    console.log('📦 Sanity returned posts:', posts)
    return posts
  } catch (error) {
    console.error('❌ Error fetching posts from Sanity:', error)
    return []
  }
}

// Fetch single post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const post = await client.fetch(POST_QUERY, { slug })
    return post
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}
