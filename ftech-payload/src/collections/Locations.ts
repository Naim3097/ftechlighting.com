import type { CollectionConfig } from 'payload'

export const Locations: CollectionConfig = {
  slug: 'locations',
  admin: {
    useAsTitle: 'city',
  },
  access: {
    read: () => true,
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
      type: 'textarea',
      admin: {
        description: 'Google Maps embed iframe code',
      },
    },
    {
      name: 'order',
      type: 'number',
    },
  ],
}
