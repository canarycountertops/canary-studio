import {HomeIcon} from '@sanity/icons/Home'
import {ImagesIcon} from '@sanity/icons/Images'
import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Canary website')
    .items([
      S.listItem()
        .title('Site settings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings').title('Site settings')),
      S.listItem()
        .title('Home page')
        .icon(HomeIcon)
        .child(S.document().schemaType('homePage').documentId('homePage').title('Home page')),
      S.listItem()
        .title('Materials page')
        .icon(ImagesIcon)
        .child(
          S.document()
            .schemaType('materialsPage')
            .documentId('materialsPage')
            .title('Materials page'),
        ),
      S.documentTypeListItem('partner').title('Surface partners'),
      S.documentTypeListItem('surfaceProduct').title('Surface products'),
    ])
