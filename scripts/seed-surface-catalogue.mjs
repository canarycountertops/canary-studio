import {createReadStream} from 'node:fs'
import {resolve} from 'node:path'
import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2026-09-01'}).config({useCdn: false})
const dryRun = process.argv.includes('--dry-run')

const partners = [
  {name: 'Vicostone', slug: 'vicostone', order: 10, description: 'Browse the Vicostone surfaces available through Canary.'},
  {name: 'Silestone', slug: 'silestone', order: 20, description: 'Explore Silestone colours and finishes with the Canary team.', logoPath: '../partners/fwdwebsitestuff/Silestone - Red - Original.png'},
  {name: 'Cambria', slug: 'cambria', order: 30, description: 'Discover Cambria designs, including four colours in our program.', relationshipLabel: 'Brand Partner'},
  {name: 'HanStone', slug: 'hanstone', order: 40, description: 'See the HanStone surfaces available through Canary.', logoPath: '../partners/HanStone Logo Digital/HanStone_RGB_WEB.png'},
]

for (const partner of partners) {
  let document = await client.fetch(
    '*[_type == "partner" && slug.current == $slug][0]{_id}',
    {slug: partner.slug},
  )
  if (!document) {
    if (dryRun) {
      console.log(`Would create partner: ${partner.name}`)
      if (partner.slug === 'cambria') {
        for (const name of ['Everleigh', 'MacBeth', 'Whitendale', 'Warwick']) {
          console.log(`Would create product: ${name}`)
        }
      }
      continue
    }
    let logo
    if ('logoPath' in partner) {
      const filePath = resolve(process.cwd(), partner.logoPath)
      const asset = await client.assets.upload('image', createReadStream(filePath), {
        filename: partner.logoPath.split('/').at(-1),
      })
      logo = {_type: 'image', asset: {_type: 'reference', _ref: asset._id}, alt: `${partner.name} logo`}
    }
    document = await client.create({
      _type: 'partner',
      name: partner.name,
      slug: {_type: 'slug', current: partner.slug},
      description: partner.description,
      order: partner.order,
      ...('relationshipLabel' in partner ? {relationshipLabel: partner.relationshipLabel} : {}),
      ...(logo ? {logo} : {}),
    })
    console.log(`Created partner: ${partner.name}`)
  } else {
    console.log(`Partner already exists: ${partner.name}`)
  }

  if (partner.slug !== 'cambria') continue
  for (const name of ['Everleigh', 'MacBeth', 'Whitendale', 'Warwick']) {
    const existing = await client.fetch(
      '*[_type == "surfaceProduct" && partner._ref == $partnerId && name == $name][0]{_id}',
      {partnerId: document._id, name},
    )
    if (existing) {
      console.log(`Product already exists: ${name}`)
      continue
    }
    if (dryRun) {
      console.log(`Would create product: ${name}`)
      continue
    }
    await client.create({
      _type: 'surfaceProduct',
      name,
      partner: {_type: 'reference', _ref: document._id},
      featured: true,
      order: ['Everleigh', 'MacBeth', 'Whitendale', 'Warwick'].indexOf(name) + 1,
    })
    console.log(`Created product: ${name}`)
  }
}

if (!dryRun) {
  const materialsPage = await client.getDocument('materialsPage')
  if (materialsPage) {
    await client.patch('materialsPage').setIfMissing({
      partnerIntro: 'Explore the surface collections we carry from our partners. Find a colour you love, then visit us to compare samples in person.',
    }).commit()
    console.log('Updated materials page introduction when missing')
  }
}
