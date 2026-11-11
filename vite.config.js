import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { apiPlugin } from './vite-plugin-api.js'

// Adresse publique du site, injectée dans les balises de partage
// (index.html, __SITE_URL__) : LinkedIn, WhatsApp & co exigent des URL
// absolues pour l'image d'aperçu.
// - VITE_SITE_URL si défini (pour forcer un domaine) ;
// - sinon l'adresse principale fournie par Netlify au build (variable URL :
//   le domaine personnalisé s'il existe, sinon le *.netlify.app) ;
// - sinon vide (dev local) : les URL deviennent relatives.
const siteUrl = () => {
  const url =
    process.env.VITE_SITE_URL ||
    (process.env.NETLIFY === 'true' ? process.env.URL : '') ||
    ''
  return url.replace(/\/$/, '')
}

const siteUrlPlugin = () => ({
  name: 'site-url',
  transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', siteUrl()),
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), apiPlugin(), siteUrlPlugin()],
})
