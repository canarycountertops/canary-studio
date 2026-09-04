import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'y0f8bylk',
    dataset: 'production',
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
  typegen: {
    enabled: true,
    path: '../web/app/**/*.{ts,tsx}',
    schema: 'schema.json',
    generates: '../web/app/sanity/generated.ts',
    overloadClientMethods: true,
  },
})
