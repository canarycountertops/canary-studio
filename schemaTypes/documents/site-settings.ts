import {CogIcon} from '@sanity/icons/Cog'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings', title: 'Site settings', type: 'document', icon: CogIcon,
  initialValue: {
  "brandName": "Canary Custom Surfaces",
  "navigation": [
    {
      "_type": "callToAction",
      "_key": "work",
      "label": "Our work",
      "href": "/#our-work"
    },
    {
      "_type": "callToAction",
      "_key": "materials",
      "label": "Materials",
      "href": "/materials"
    },
    {
      "_type": "callToAction",
      "_key": "craft",
      "label": "Our craft",
      "href": "/#our-craft"
    },
    {
      "_type": "callToAction",
      "_key": "visit",
      "label": "Visit the shop",
      "href": "/#visit"
    }
  ],
  "headerCta": {
    "_type": "callToAction",
    "label": "Request a quote",
    "href": "mailto:aleta@canarycustomsurfaces.com?subject=Countertop%20quote"
  },
  "menuLabel": "Menu",
  "footerCopy": "Beautiful materials. Thoughtful craftsmanship. Good people to work with.",
  "footerLinks": [
    {
      "_type": "callToAction",
      "_key": "home",
      "label": "Home",
      "href": "/"
    },
    {
      "_type": "callToAction",
      "_key": "materials",
      "label": "Materials",
      "href": "/materials"
    },
    {
      "_type": "callToAction",
      "_key": "visit",
      "label": "Visit the shop",
      "href": "/#visit"
    }
  ],
  "email": "aleta@canarycustomsurfaces.com",
  "emailLabel": "Say hello",
  "socialLinks": [],
  "visitEyebrow": "Good materials. Good company.",
  "visitHeading": "Come for the samples. Stay for a chat.",
  "visitCopy": "Bring your ideas, your questions, and that cabinet colour you’re trying to match. Our friendly team can help you explore the options and find samples to take home. Get in touch to plan your shop visit.",
  "visitCta": {
    "_type": "callToAction",
    "label": "Plan a shop visit",
    "href": "mailto:aleta@canarycustomsurfaces.com?subject=Planning%20a%20shop%20visit"
  },
  "visitImageAlt": "Andrew beside a newly installed white countertop"
},
  groups: [
    {name: 'brand', title: 'Brand & navigation', default: true},
    {name: 'contact', title: 'Contact & social'},
    {name: 'visit', title: 'Shop visit'},
    {name: 'footer', title: 'Footer'},
  ],
  fields: [
    defineField({name: 'brandName', type: 'string', group: 'brand', initialValue: 'Canary Custom Surfaces', validation: r => r.required()}),
    defineField({name: 'logo', type: 'image', group: 'brand', options: {hotspot: true}, fields: [defineField({name: 'alt', type: 'string', validation: r => r.required()})]}),
    defineField({name: 'navigation', type: 'array', group: 'brand', of: [defineArrayMember({type: 'callToAction'})], validation: r => r.max(6)}),
    defineField({name: 'headerCta', title: 'Header action', type: 'callToAction', group: 'brand'}),
    defineField({name: 'menuLabel', type: 'string', group: 'brand', initialValue: 'Menu', validation: r => r.required()}),
    defineField({name: 'email', type: 'string', group: 'contact', validation: r => r.required().email()}),
    defineField({name: 'emailLabel', title: 'Email link label', type: 'string', group: 'contact', initialValue: 'Say hello'}),
    defineField({name: 'phone', type: 'string', group: 'contact'}),
    defineField({name: 'address', type: 'text', rows: 3, group: 'contact', description: 'Confirm the current shop address before publishing.'}),
    defineField({name: 'hours', type: 'text', rows: 3, group: 'contact', description: 'Include whether visits need to be arranged in advance.'}),
    defineField({name: 'directions', type: 'callToAction', group: 'contact'}),
    defineField({name: 'socialLinks', title: 'Social and review links', type: 'array', group: 'contact', of: [defineArrayMember({type: 'callToAction'})]}),
    defineField({name: 'visitEyebrow', title: 'Shop section introduction', type: 'string', group: 'visit'}),
    defineField({name: 'visitHeading', type: 'string', group: 'visit', validation: r => r.required().max(100)}),
    defineField({name: 'visitCopy', type: 'text', rows: 4, group: 'visit', validation: r => r.required()}),
    defineField({name: 'visitCta', title: 'Shop visit action', type: 'callToAction', group: 'visit'}),
    defineField({name: 'visitImage', type: 'image', options: {hotspot: true}, group: 'visit', fields: [defineField({name: 'alt', type: 'string', validation: r => r.required()})]}),
    defineField({name: 'visitImageAlt', title: 'Default shop image description', type: 'string', group: 'visit', description: 'Used until you choose your own shop image.'}),
    defineField({name: 'footerCopy', type: 'text', rows: 3, group: 'footer'}),
    defineField({name: 'footerLinks', type: 'array', group: 'footer', of: [defineArrayMember({type: 'callToAction'})]}),
  ],
  preview: {prepare: () => ({title: 'Site settings'})},
})
