import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ArdComponents',
      formats: ['es', 'cjs'],
      fileName: (format) => {
        if (format === 'es') return 'index.esm.js'
        if (format === 'cjs') return 'index.js'
        return `index.${format}.js`
      },
    },
    rollupOptions: {
      external: (id) => {
        return id === 'react' || id === 'react-dom' || id.startsWith('react/') || id.startsWith('react-dom/')
      },
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
})
