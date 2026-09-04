import {ImagesIcon} from '@sanity/icons/Images'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const materialsPage = defineType({
  name: 'materialsPage',
  title: 'Materials page',
  type: 'document',
  icon: ImagesIcon,
  initialValue: {
    eyebrow: 'Materials',
    heading: 'The right surface changes the room.',
    intro:
      'Every material has a character of its own. Compare the appearance, care, and performance of the surfaces we work with, then see your favourites in person.',
    materials: [
      {
        _key: 'quartz',
        _type: 'material',
        name: 'Quartz',
        description:
          'Engineered quartz offers a clean, consistent surface with very little maintenance. Today’s collections range from quiet solids to convincing marble-inspired veining.',
        benefits: ['Low maintenance', 'Consistent colour', 'Wide design range', 'Non-porous'],
      },
      {
        _key: 'natural-stone',
        _type: 'material',
        name: 'Natural stone',
        description:
          'Granite, marble, quartzite, and other natural stones are shaped over millions of years. Each slab brings one-of-a-kind movement, colour, and depth.',
        benefits: [
          'One-of-a-kind pattern',
          'Heat resistant',
          'Timeless character',
          'Many stone types',
        ],
      },
      {
        _key: 'ultra-compact',
        _type: 'material',
        name: 'Ultra-compact',
        description:
          'Dense, sintered ultra-compact surfaces are designed for demanding indoor and outdoor applications, with strong resistance to UV, heat, scratches, and stains.',
        benefits: ['UV stable', 'Highly scratch resistant', 'Heat resistant', 'Indoor or outdoor'],
      },
    ],
    seoTitle: 'Countertop Materials | Canary Custom Surfaces',
    seoDescription: 'Compare quartz, natural stone, and ultra-compact countertop surfaces.',
  },
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'intro',
      title: 'Introduction',
      type: 'text',
      rows: 4,
      group: 'content',
      validation: (rule) => rule.required().max(350),
    }),
    defineField({
      name: 'materials',
      title: 'Materials',
      type: 'array',
      group: 'content',
      of: [defineArrayMember({type: 'material'})],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'seoTitle',
      title: 'Page title',
      type: 'string',
      group: 'seo',
      validation: (rule) => rule.max(65),
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta description',
      type: 'text',
      rows: 3,
      group: 'seo',
      validation: (rule) => rule.max(160),
    }),
  ],
  preview: {
    prepare: () => ({title: 'Materials page'}),
  },
})
