import {ImagesIcon} from '@sanity/icons/Images'
import {defineField, defineType} from 'sanity'

export const projectHighlight = defineType({
  name: 'projectHighlight', title: 'Project highlight', type: 'object', icon: ImagesIcon,
  fields: [
    defineField({name: 'title', type: 'string', validation: r => r.required().max(90)}),
    defineField({name: 'description', type: 'text', rows: 3, validation: r => r.required().max(250)}),
    defineField({name: 'image', type: 'image', options: {hotspot: true}, validation: r => r.required(), fields: [
      defineField({name: 'alt', title: 'Image description', type: 'string', validation: r => r.required()}),
    ]}),
  ],
  preview: {select: {title: 'title', subtitle: 'description', media: 'image'}},
})
