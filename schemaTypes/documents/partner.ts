import {TagIcon} from '@sanity/icons/Tag'
import {defineField, defineType} from 'sanity'

export const partner = defineType({
  name: 'partner',
  title: 'Surface partner',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({name: 'name', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name', maxLength: 80},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Introduction',
      type: 'text',
      rows: 3,
      description: 'A short introduction to the range Canary carries.',
    }),
    defineField({
      name: 'relationshipLabel',
      title: 'Partnership label',
      type: 'string',
      description: 'Optional verified designation, such as Brand Partner.',
    }),
    defineField({
      name: 'logo',
      type: 'image',
      fields: [defineField({name: 'alt', type: 'string', validation: (rule) => rule.required()})],
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
      description: 'Lower numbers appear first on the materials page.',
      initialValue: 100,
    }),
  ],
  preview: {select: {title: 'name', media: 'logo'}},
})
