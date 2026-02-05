import type { CollectionConfig } from 'payload'

export const CompanyInfo: CollectionConfig = {
  slug: 'company-info',
  admin: {
    useAsTitle: 'companyName',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'companyName',
      type: 'text',
      required: true,
      defaultValue: 'Ftech Lighting',
    },
    {
      name: 'tagline',
      type: 'text',
      defaultValue: 'Light Made Beautiful',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'logoWhite',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'White version of logo for dark backgrounds',
      },
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'whatsapp',
      type: 'text',
    },
    {
      name: 'socialMedia',
      type: 'group',
      fields: [
        {
          name: 'instagram',
          type: 'text',
        },
        {
          name: 'linkedin',
          type: 'text',
        },
        {
          name: 'facebook',
          type: 'text',
        },
      ],
    },
    {
      name: 'aboutCompany',
      type: 'group',
      fields: [
        {
          name: 'shortDescription',
          type: 'textarea',
        },
        {
          name: 'fullDescription',
          type: 'richText',
        },
        {
          name: 'vision',
          type: 'textarea',
        },
        {
          name: 'mission',
          type: 'textarea',
        },
        {
          name: 'values',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'description',
              type: 'textarea',
            },
          ],
        },
      ],
    },
    {
      name: 'stats',
      type: 'array',
      admin: {
        description: 'Company statistics to display (e.g., Years of Experience, Projects Completed)',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
        },
        {
          name: 'value',
          type: 'text',
        },
        {
          name: 'suffix',
          type: 'text',
          admin: {
            description: 'e.g., "+", "%", "K"',
          },
        },
      ],
    },
    {
      name: 'certifications',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
