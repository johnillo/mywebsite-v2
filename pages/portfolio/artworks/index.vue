<template>
  <div class="container mx-auto px-4 sm:md-0 py-4 leading-relaxed max-w-4xl">
    <Nav/>
    <PortfolioHomeLink/>
    <h1 class="text-3xl mb-4 border-b border-gray-400">Artworks</h1>
    <div class="border-l-4 border-orange-400 pl-2">
      <h4 class="text-xl font-bold">Traditional</h4>
      <div>
        Mostly drawn with charcoal or ink.
      </div>
    </div>
    <Gallery :images="traditional"/>
    <div class="border-l-4 border-blue-600 pl-2">
      <h4 class="text-xl font-bold">Digital</h4>
      <div>
        Made with pen tablets (Wacom, Genius) and PaintTool SAI or Krita.
      </div>
    </div>
    <Gallery :images="digital"/>
    <p class="text-gray-800" v-if="!hasArtworks">
      No items found.
    </p>
    <Footer/>
    <ScrollToTop />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const { digital, traditional } = await $content('portfolio/artworks').fetch()
    return { digital, traditional }
  },
  data () {
    return { title: 'Artworks Portfolio - John Espiritu' }
  },
  head () {
    return { title: this.title }
  },
  computed: {
    hasArtworks () {
      return this.traditional.length > 0 || this.digital.length > 0
    },
  },
}
</script>
