import type { CollectionConfig } from 'payload'

export const Locations: CollectionConfig = {
  slug: 'locations',
  admin: {
    useAsTitle: 'city',
  },
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    {
      name: 'city',
      type: 'text',
      required: true,
    },
    {
      name: 'country',
      type: 'text',
      required: true,
    },
    {
      name: 'isHeadquarters',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'address',
      type: 'group',
      fields: [
        {
          name: 'street',
          type: 'text',
        },
        {
          name: 'building',
          type: 'text',
        },
        {
          name: 'floor',
          type: 'text',
        },
        {
          name: 'postalCode',
          type: 'text',
        },
      ],
    },
    {
      name: 'contact',
      type: 'group',
      fields: [
        {
          name: 'phone',
          type: 'text',
        },
        {
          name: 'email',
          type: 'email',
        },
        {
          name: 'whatsapp',
          type: 'text',
        },
      ],
    },
    {
      name: 'businessHours',
      type: 'array',
      admin: {
        description: 'Office business hours (e.g. Monday - Friday: 9:00 AM - 6:00 PM)',
      },
      fields: [
        {
          name: 'day',
          type: 'text',
          required: true,
          admin: {
            description: 'e.g. Monday - Friday, Saturday, Sunday',
          },
        },
        {
          name: 'time',
          type: 'text',
          required: true,
          admin: {
            description: 'e.g. 9:00 AM - 6:00 PM, Closed',
          },
        },
      ],
    },
    {
      name: 'coordinates',
      type: 'group',
      fields: [
        {
          name: 'latitude',
          type: 'number',
        },
        {
          name: 'longitude',
          type: 'number',
        },
      ],
    },
    {
      name: 'mapEmbed',
      type: 'text',
      admin: {
        description: 'Google Maps embed URL only (not raw HTML). Example: https://www.google.com/maps/embed?pb=...',
      },
    },
    {
      name: 'order',
      type: 'number',
    },
  ],
}
