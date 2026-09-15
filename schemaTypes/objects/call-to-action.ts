import {LinkIcon} from '@sanity/icons/Link'
import {defineField, defineType} from 'sanity'

export const callToAction = defineType({
  name: 'callToAction',
  title: 'Call to action',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (rule) => rule.required().max(40),
    }),
    defineField({
      name: 'href',
      title: 'Link',
      type: 'string',
      description: 'Use a site path such as /materials, an email link, or a full URL.',
      validation: (rule) =>
        rule.required().custom((value) => {
          if (!value) return true
          return /^(\/(?!\/)|mailto:|tel:|https?:\/\/)/.test(value)
            ? true
            : 'Use /path, mailto:, tel:, or a full http(s) URL.'
        }),
    }),
  ],
  preview: {
    select: {title: 'label', subtitle: 'href'},
  },
})
