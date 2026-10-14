import {DiamondIcon} from '@sanity/icons/Diamond'
import {defineField, defineType} from 'sanity'

export const surfaceProduct = defineType({
  name: 'surfaceProduct',
  title: 'Surface product',
  type: 'document',
  icon: DiamondIcon,
  fields: [
    defineField({name: 'name', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'partner',
      type: 'reference',
      to: [{type: 'partner'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Swatch or slab image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', type: 'string', validation: (rule) => rule.required()})],
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 3,
      description: 'Optional, factual colour or pattern description.',
    }),
    defineField({
      name: 'featured',
      title: 'Feature on materials page',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
      initialValue: 100,
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'partner.name', media: 'image'},
  },
})
