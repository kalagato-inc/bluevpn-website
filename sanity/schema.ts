import { defineField, defineType } from 'sanity'

export const blogPost = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Security', value: 'Security' },
          { title: 'Streaming', value: 'Streaming' },
          { title: 'Gaming', value: 'Gaming' },
          { title: 'Travel', value: 'Travel' },
          { title: 'Privacy', value: 'Privacy' },
          { title: 'Remote Work', value: 'Remote Work' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'themeColor',
      title: 'Theme Color',
      type: 'string',
      options: {
        list: [
          { title: 'Blue', value: 'blue' },
          { title: 'Purple', value: 'purple' },
          { title: 'Emerald', value: 'emerald' },
        ],
      },
      initialValue: 'blue',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      placeholder: 'e.g., 5 min read',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                title: 'Link',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'Link Type',
                    name: 'linkType',
                    type: 'string',
                    options: {
                      list: [
                        { title: 'Internal Link (to your site)', value: 'internal' },
                        { title: 'External Link', value: 'external' },
                      ],
                      layout: 'radio',
                    },
                    initialValue: 'external',
                  },
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                    description: 'For external links, use full URL (https://...). For internal, use path like /blog or /streaming',
                    validation: (Rule) => Rule.uri({
                      allowRelative: true,
                      scheme: ['http', 'https', 'mailto', 'tel']
                    })
                  },
                  {
                    title: 'Open in new tab?',
                    name: 'blank',
                    type: 'boolean',
                    description: 'Recommended for external links',
                    initialValue: true,
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            }
          ]
        },
      ],
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description (SEO)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(160),
      description: 'This will be used for SEO. Keep it under 160 characters.',
    }),
    defineField({
      name: 'metaKeywords',
      title: 'Meta Keywords (SEO)',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})

export const schemaTypes = [blogPost]
