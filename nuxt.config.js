export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'ASUS ODR OLED',
        htmlAttrs: {
            lang: 'fr',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: "Découvrez notre offre de reprise dédiée aux PCs OLED ! ASUS vous propose de reprendre votre PC ou MAC pour lui donner une seconde vie et vous rembourse de 100 à 1000€ pour l’achat d’un PC ASUS OLED de dernière génération" },
            { name: 'format-detection', content: 'telephone=no' },
            { hid: 'revisit-after', name: 'revisit-after', content: "1 days" },
            { name: 'format-detection', content: 'telephone=no' },
            // Open Graph / Facebook
            { hid: 'og:type', property: 'og:type', content: "website" },
            { hid: 'og:url', property: 'og:url', content: "https://www.asus.fr/event/trade-oled/" },
            { hid: 'og:title', property: 'og:title', content: "ASUS ODR OLED" },
            { hid: 'og:description', property: 'og:description', content: "Découvrez notre offre de reprise dédiée aux PCs OLED ! ASUS vous propose de reprendre votre PC ou MAC pour lui donner une seconde vie et vous rembourse de 100 à 1000€ pour l’achat d’un PC ASUS OLED de dernière génération" },
            // Twitter
            { hid: 'twitter:card', property: 'twitter:card', content: "summary_large_image" },
            { hid: 'twitter:url', property: 'twitter:url', content: "https://www.asus.fr/event/trade-oled/" },
            { hid: 'twitter:title', property: 'twitter:title', content: "ASUS ODR OLED" },
            { hid: 'twitter:description', property: 'twitter:description', content: "Découvrez notre offre de reprise dédiée aux PCs OLED ! ASUS vous propose de reprendre votre PC ou MAC pour lui donner une seconde vie et vous rembourse de 100 à 1000€ pour l’achat d’un PC ASUS OLED de dernière génération" },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/event/trade-oled/asus_ico.png' }],

    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/css/styles.css', ],

    //loading: '~/components/loading.vue',

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~/plugins/vuesax', '~/plugins/gtm'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ['nuxt-compress', '@nuxtjs/vuetify',
        '@nuxtjs/google-analytics'
    ],
    vuetify: {
        optionsPath: './vuetify.js',
        theme: { dark: true },
    },
    router: {
        scrollBehavior: async(to, from, savedPosition) => {
            if (savedPosition) {
                return savedPosition
            }

            const findEl = async(hash, x) => {
                return document.querySelector(hash) ||
                    new Promise((resolve, reject) => {
                        if (x > 50) {
                            return resolve()
                        }
                        setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
                    })
            }

            if (to.hash) {
                let el = await findEl(to.hash)
                if ('scrollBehavior' in document.documentElement.style) {
                    return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
                } else {
                    return window.scrollTo(0, el.offsetTop)
                }
            }

            return { x: 0, y: 0 }
        }
    },
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/robots',
        '@nuxtjs/gtm',
        '@nuxtjs/sitemap',
        'nuxtjs-mdi-font', ['nuxt-compress',
            {
                gzip: {
                    threshold: 8192,
                },
                brotli: {
                    threshold: 8192,
                },
            },
        ]
    ],
    gtm: {
        id: 'GTM-WN9WSJR',
        enabled: true,
        id: undefined,
        layer: 'dataLayer',
        variables: {},
        pageTracking: true,
        pageViewEventName: 'nuxtRoute',
        autoInit: true,
        respectDoNotTrack: true,
        scriptId: 'gtm-script',
        scriptDefer: false,
        scriptURL: 'https://www.googletagmanager.com/gtm.js',
        crossOrigin: false,
        noscript: true,
        noscriptId: 'gtm-noscript',
        noscriptURL: 'https://www.googletagmanager.com/ns.html'
    },
    googleAnalytics: {
        id: 'UA-9511413-1'
    },
    generate: {
        dir: 'htdocs',
        fallback: '404.html',
        subFolders: false,
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        publicPath: 'https://www.asus.fr/event/trade-oled/',
    },
    router: {
        base: '/event/trade-oled/'
    },
    robots: {
        UserAgent: 'Googlebot',
        Allow: '/',
        UserAgent: 'googlebot-image',
        Allow: '/',
        UserAgent: 'googlebot-mobile',
        Allow: '/',
        UserAgent: '*',
        Allow: '/',
        Sitemap: 'https://asus.fr/event/trade-oled/sitemap.xml'
    },
    sitemap: {
        hostname: 'https://www.asus.fr/event/trade-oled/',
        Default: {
            changefreq: 'daily',
            priority: 1,
            lastmod: new Date()
        },
        routes: [{
            url: 'https://www.asus.fr/event/trade-oled/',
            changefreq: 'daily',
            priority: 1,
            lastmod: new Date()
        }]
    },
}