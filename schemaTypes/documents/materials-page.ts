import {ImagesIcon} from '@sanity/icons/Images'
import {defineField, defineType} from 'sanity'

export const materialsPage = defineType({
  name: 'materialsPage',
  title: 'Materials page',
  type: 'document',
  icon: ImagesIcon,
  initialValue: {
    eyebrow: 'Materials',
    heading: 'The right surface changes the room.',
    partnerIntro:
      'Explore the surface collections we carry from our partners. Find a colour you love, then visit us to compare samples in person.',
    seoTitle: 'Countertop Materials | Canary Custom Surfaces',
    seoDescription: 'Explore countertop surfaces from Vicostone, Silestone, Cambria, and HanStone at Canary Custom Surfaces.',
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
      name: 'partnerIntro',
      title: 'Introduction',
      type: 'text',
      rows: 4,
      group: 'content',
      validation: (rule) => rule.required().max(350),
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
