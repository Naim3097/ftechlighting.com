import type { CollectionConfig } from 'payload'
import { revalidatePath } from 'next/cache'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'name',
  },
  hooks: {
    afterChange: [
      ({ doc }) => {
        revalidatePath('/projects')
        return doc
      },
    ],
    afterDelete: [
      () => {
        revalidatePath('/projects')
      },
    ],
  },
  access: {
    read: ({ req }) => {
      if (req.user) return true
      return { status: { equals: 'published' } }
    },
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Commercial', value: 'commercial' },
        { label: 'Residential', value: 'residential' },
        { label: 'Hospitality', value: 'hospitality' },
        { label: 'Retail', value: 'retail' },
        { label: 'Outdoor', value: 'outdoor' },
        { label: 'Industrial', value: 'industrial' },
        { label: 'Landscape', value: 'landscape' },
        { label: 'Automotive', value: 'automotive' },
        { label: 'Public Infrastructure', value: 'public-infrastructure' },
      ],
      required: true,
    },
    {
      name: 'scope',
      type: 'text',
      admin: {
        description: 'Custom scope description (e.g. "Luxury Residential Lighting", "Facade & Interior Lighting"). Overrides category label on frontend.',
      },
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'client',
      type: 'text',
    },
    {
      name: 'year',
      type: 'number',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'fullDescription',
      type: 'richText',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
    },
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Show on homepage',
      },
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        description: 'Display order (lower numbers first)',
      },
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
