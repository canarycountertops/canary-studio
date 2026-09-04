import {HomeIcon} from '@sanity/icons/Home'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home page',
  type: 'document',
  icon: HomeIcon,
  initialValue: {
    eyebrow: 'Vancouver Island surface specialists',
    heading: 'Beautiful surfaces, built around your life.',
    intro:
      'From the first sample to the final seam, we bring care, clarity, and exacting craftsmanship to every countertop project.',
    primaryCta: {_type: 'callToAction', label: 'Explore materials', href: '/materials'},
    secondaryCta: {
      _type: 'callToAction',
      label: 'Request an estimate',
      href: 'mailto:aleta@canarycustomsurfaces.com',
    },
    highlights: [
      {
        _key: 'consultation',
        _type: 'highlight',
        title: 'Personal guidance',
        description:
          'Complimentary in-home consultations help you see each surface in your space and lighting.',
      },
      {
        _key: 'craft',
        _type: 'highlight',
        title: 'Careful craft',
        description:
          'Thoughtful measuring, fabrication, and installation from a team that sweats the details.',
      },
      {
        _key: 'materials',
        _type: 'highlight',
        title: 'Proven materials',
        description:
          'Quartz, natural stone, and ultra-compact surfaces selected for beauty and everyday durability.',
      },
    ],
    featureHeading: 'Confidence in every choice.',
    featureCopy:
      'A countertop is part work surface, part gathering place, and part design statement. We help you understand the trade-offs and choose a material you will be happy to live with.',
    seoTitle: 'Canary Custom Surfaces | Vancouver Island',
    seoDescription:
      'Quartz and natural stone countertop fabrication and installation on Vancouver Island.',
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
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      group: 'content',
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
    defineField({
      name: 'primaryCta',
      title: 'Primary action',
      type: 'callToAction',
      group: 'content',
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Secondary action',
      type: 'callToAction',
      group: 'content',
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      group: 'content',
      of: [defineArrayMember({type: 'highlight'})],
      validation: (rule) => rule.required().min(1).max(3),
    }),
    defineField({
      name: 'featureHeading',
      title: 'Feature heading',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required().max(90),
    }),
    defineField({
      name: 'featureCopy',
      title: 'Feature copy',
      type: 'text',
      rows: 5,
      group: 'content',
      validation: (rule) => rule.required().max(450),
    }),
    defineField({
      name: 'featureImage',
      title: 'Feature image',
      type: 'image',
      group: 'content',
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
    prepare: () => ({title: 'Home page'}),
  },
})
