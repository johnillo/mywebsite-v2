import Vue from 'vue'
import VueMatomo from 'vue-matomo'

export default ({ app }) => {
  Vue.use(VueMatomo, {
    // Enables automatically registering pageviews on the router
    router: app.router,

    // Configure your matomo server and site by providing
    host: 'https://analytics.johnespiritu.dev',
    siteId: 1,

    // Changes the default .js and .php endpoint's filename
    trackerFileName: 'matomo',

    // Enables link tracking on regular links. Note that this won't
    // work for routing links (ie. internal Vue router links)
    enableLinkTracking: true,

    // Require consent before sending tracking information to matomo
    requireConsent: false,

    // Whether to track the initial page view
    trackInitialView: true,

    // Run Matomo without cookies
    disableCookies: false,

    // Enable the heartbeat timer (https://developer.matomo.org/guides/tracking-javascript-guide#accurately-measure-the-time-spent-on-each-page)
    enableHeartBeatTimer: false,

    // Set the heartbeat timer interval
    heartBeatTimerInterval: 15,

    // Whether or not to log debug information
    debug: false,

    // UserID passed to Matomo (see https://developer.matomo.org/guides/tracking-javascript-guide#user-id)
    userId: undefined,

    // Share the tracking cookie across subdomains (see https://developer.matomo.org/guides/tracking-javascript-guide#measuring-domains-andor-sub-domains)
    cookieDomain: undefined,

    // Tell Matomo the website domain so that clicks on these domains are not tracked as 'Outlinks'
    domains: undefined,

    // A list of pre-initialization actions that run before matomo is loaded
    preInitActions: []
  })
}
