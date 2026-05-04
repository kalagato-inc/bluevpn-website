import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schema'

export default defineConfig({
  name: 'default',
  title: 'Blue VPN Blog',

  projectId: 'c2x83nrr',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  // Allow CORS for local development
  cors: {
    origin: ['http://localhost:5173', 'http://localhost:3000'],
  },
})
