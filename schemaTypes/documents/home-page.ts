import {HomeIcon} from '@sanity/icons/Home'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home page',
  type: 'document',
  icon: HomeIcon,
  initialValue: {
  "eyebrow": "Vancouver Island surface specialists",
  "heading": "Countertops done right, with a smile.",
  "intro": "Beautiful stone is just the beginning. We’re a small, hands-on team bringing careful craftsmanship and a personal touch to your home, from the first sample to the final fit.",
  "heroImageAlt": "White waterfall countertop and warm wood cabinetry in a Canary kitchen",
  "heroCaption": "Made with care. Made for everyday life.",
  "primaryCta": {
    "_type": "callToAction",
    "label": "Plan a shop visit",
    "href": "/#visit"
  },
  "secondaryCta": {
    "_type": "callToAction",
    "label": "Request a quote",
    "href": "mailto:aleta@canarycustomsurfaces.com?subject=Countertop%20quote"
  },
  "highlights": [
    {
      "_type": "highlight",
      "_key": "consultation",
      "title": "Personal guidance",
      "description": "Real conversations, helpful answers, and a team that gets to know you and your project."
    },
    {
      "_type": "highlight",
      "_key": "craft",
      "title": "Careful craft",
      "description": "Thoughtful measuring, fabrication, and installation from a team that sweats the details."
    },
    {
      "_type": "highlight",
      "_key": "materials",
      "title": "Proven materials",
      "description": "Quartz, natural stone, and ultra-compact surfaces selected for beauty and everyday durability."
    }
  ],
  "featureHeading": "It’s the little things that make it yours.",
  "featureCopy": "From the way an edge feels to how a seam comes together, we care about the details you’ll live with every day. Our team takes extra care through fabrication and installation, because the finished result matters to us as much as it matters to you.",
  "featureEyebrow": "A closer look at our craft",
  "featureImageAlt": "A stone saw working carefully along the surface of a slab",
  "featurePoints": [
    "Thoughtful material selection",
    "Careful fabrication",
    "A personal approach to installation"
  ],
  "projectsEyebrow": "Made for real life",
  "projectsHeading": "A little inspiration for your place.",
  "projectsIntro": "Gathering places, quiet corners, and the details that bring a room together. Here’s a closer look at our work.",
  "projects": [],
  "materialsEyebrow": "Find your favourite",
  "materialsHeading": "Every slab has a story. Let’s find yours.",
  "materialsCopy": "Drawn to bold veining? Prefer something quiet? Explore quartz, natural stone, and ultra-compact surfaces, then see the possibilities up close with our team.",
  "materialsCta": {
    "_type": "callToAction",
    "label": "Explore materials",
    "href": "/materials"
  },
  "seoTitle": "Canary Custom Surfaces | Vancouver Island",
  "seoDescription": "Quartz and natural stone countertop fabrication and installation on Vancouver Island."
},
  groups: [
    {name: 'hero', title: 'Opening section', default: true},
    {name: 'projects', title: 'Selected work'},
    {name: 'craft', title: 'Craftsmanship'},
    {name: 'materials', title: 'Materials invitation'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({name: 'heroImageAlt', title: 'Default hero image description', type: 'string', group: 'hero'}),
    defineField({name: 'heroCaption', type: 'string', group: 'hero'}),
    defineField({name: 'heroVideo', title: 'Optional hero video', type: 'video', group: 'hero'}),
    defineField({name: 'featureEyebrow', title: 'Craft section introduction', type: 'string', group: 'projects'}),
    defineField({name: 'featureImageAlt', title: 'Default craft image description', type: 'string', group: 'craft'}),
    defineField({name: 'featurePoints', title: 'Craft details', type: 'array', of: [defineArrayMember({type: 'string'})], group: 'craft', validation: r => r.max(6)}),
    defineField({name: 'featureVideo', title: 'Optional craft video', type: 'video', group: 'craft'}),
    defineField({name: 'projectsEyebrow', type: 'string', group: 'projects'}),
    defineField({name: 'projectsHeading', type: 'string', group: 'projects'}),
    defineField({name: 'projectsIntro', type: 'text', rows: 3, group: 'projects'}),
    defineField({name: 'projects', title: 'Selected work', description: 'Add, reorder, or remove project highlights. An empty list hides this section.', type: 'array', group: 'craft', of: [defineArrayMember({type: 'projectHighlight'})], validation: r => r.max(6)}),
    defineField({name: 'materialsEyebrow', type: 'string', group: 'materials'}),
    defineField({name: 'materialsHeading', type: 'string', group: 'materials'}),
    defineField({name: 'materialsCopy', type: 'text', rows: 3, group: 'materials'}),
    defineField({name: 'materialsCta', title: 'Materials action', type: 'callToAction', group: 'materials'}),

    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      group: 'hero',
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      group: 'hero',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'intro',
      title: 'Introduction',
      type: 'text',
      rows: 4,
      group: 'hero',
      validation: (rule) => rule.required().max(350),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      group: 'hero',
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
      group: 'hero',
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Secondary action',
      type: 'callToAction',
      group: 'hero',
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      group: 'craft',
      of: [defineArrayMember({type: 'highlight'})],
      validation: (rule) => rule.required().min(1).max(3),
    }),
    defineField({
      name: 'featureHeading',
      title: 'Feature heading',
      type: 'string',
      group: 'craft',
      validation: (rule) => rule.required().max(90),
    }),
    defineField({
      name: 'featureCopy',
      title: 'Feature copy',
      type: 'text',
      rows: 5,
      group: 'craft',
      validation: (rule) => rule.required().max(450),
    }),
    defineField({
      name: 'featureImage',
      title: 'Feature image',
      type: 'image',
      group: 'craft',
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
