import { readFile, mkdir, writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import { projects } from './src/data/projects.ts'

function staticRouteEntries(): Plugin {
  let outDir = ''

  return {
    name: 'static-route-entries',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    async closeBundle() {
      const html = await readFile(join(outDir, 'index.html'), 'utf8')

      await Promise.all(
        projects.map(async ({ slug }) => {
          const routeDir = join(outDir, 'work', slug)
          await mkdir(routeDir, { recursive: true })
          await writeFile(join(routeDir, 'index.html'), html)
        }),
      )

      await writeFile(join(outDir, '404.html'), html)
      await writeFile(join(outDir, '.nojekyll'), '')
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), staticRouteEntries()],
})
