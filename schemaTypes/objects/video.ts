import {PlayIcon} from '@sanity/icons/Play'
import {defineField, defineType} from 'sanity'

export const video = defineType({
  name: 'video', title: 'Video', type: 'object', icon: PlayIcon,
  description: 'Choose a YouTube or Vimeo video. Visitors choose when to play; the section image stays visible beforehand. Manage captions with the video provider.',
  fields: [
    defineField({name: 'title', type: 'string', validation: r => r.required()}),
    defineField({
      name: 'url', title: 'Video link', type: 'url',
      description: 'Use a YouTube watch / short link or a public Vimeo video link. Restricted videos may not allow embedding.',
      validation: r => r.required().uri({scheme: ['https']}).custom(value => {
        if (!value) return true
        try {
          const u = new URL(value)
          if (['www.youtube.com', 'youtube.com'].includes(u.hostname) && u.pathname === '/watch' && /^[\w-]{11}$/.test(u.searchParams.get('v') || '')) return true
          if (u.hostname === 'youtu.be' && /^\/[\w-]{11}$/.test(u.pathname)) return true
          if (['vimeo.com', 'www.vimeo.com'].includes(u.hostname) && /^\/\d+$/.test(u.pathname)) return true
        } catch { /* Validation message below. */ }
        return 'Use https://www.youtube.com/watch?v=VIDEO_ID, https://youtu.be/VIDEO_ID or https://vimeo.com/VIDEO_ID.'
      }),
    }),
    defineField({name: 'playLabel', title: 'Play button text', type: 'string', initialValue: 'Watch the film', validation: r => r.required()}),
    defineField({name: 'closeLabel', title: 'Close button text', type: 'string', initialValue: 'Back to image', validation: r => r.required()}),
  ],
  preview: {select: {title: 'title', subtitle: 'url'}},
})
