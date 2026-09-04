import {DiamondIcon} from '@sanity/icons/Diamond'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const material = defineType({
  name: 'material',
  title: 'Material',
  type: 'object',
  icon: DiamondIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required().max(60),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
      validation: (rule) => rule.required().max(500),
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (rule) => rule.required().min(2).max(6).unique(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: (rule) => rule.required().warning('Alt text is important for accessibility.'),
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
})
