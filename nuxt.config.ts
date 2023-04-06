// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'Profori',
            meta: [
                { name: 'description', content: 'My amazing site.' }
            ],
            link: [
                { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/destyle.css@1.0.15/destyle.css' }
            ]
        }
    },
})