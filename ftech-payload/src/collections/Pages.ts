import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier (e.g., "about", "services")',
      },
    },
    {
      name: 'metaTitle',
      type: 'text',
      admin: {
        description: 'SEO title for browser tab and search engines',
      },
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      admin: {
        description: 'SEO description for search engines',
      },
    },
    {
      name: 'heroSection',
      type: 'group',
      fields: [
        {
          name: 'headline',
          type: 'text',
        },
        {
          name: 'subheadline',
          type: 'textarea',
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'backgroundVideo',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'sections',
      type: 'array',
      fields: [
        {
          name: 'sectionType',
          type: 'select',
          options: [
            { label: 'Text Block', value: 'text' },
            { label: 'Image Gallery', value: 'gallery' },
            { label: 'CTA', value: 'cta' },
            { label: 'Accordion', value: 'accordion' },
            { label: 'Tabs', value: 'tabs' },
          ],
        },
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'content',
          type: 'richText',
        },
        {
          name: 'images',
          type: 'array',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      defaultValue: 'draft',
    },
  ],
}
