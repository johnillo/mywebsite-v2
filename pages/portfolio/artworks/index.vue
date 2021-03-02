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
    <div class="gallery mb-8 flex flex-wrap mt-4">
      <div class="w-full md:w-1/2 pr-2">
        <a :href="url" v-for="(url, index) in traditionalCol1" :key="index" target="_blank">
          <img :src="url"/>
        </a>
      </div>
      <div class="w-full md:w-1/2 pl-2">
        <a :href="url" v-for="(url, index) in traditionalCol2" :key="index" target="_blank">
          <img :src="url"/>
        </a>
      </div>
    </div>
    <div class="border-l-4 border-blue-600 pl-2">
      <h4 class="text-xl font-bold">Digital</h4>
      <div>
        Made with pen tablets (Wacom, Genius) and PaintTool SAI or Krita.
      </div>
    </div>
    <div class="gallery mb-16 flex flex-wrap mt-4">
      <div class="w-full md:w-1/2 pr-2">
        <a :href="url" v-for="(url, index) in digitalCol1" :key="index" target="_blank">
          <img :src="url"/>
        </a>
      </div>
      <div class="w-full md:w-1/2 pl-2">
        <a :href="url" v-for="(url, index) in digitalCol2" :key="index" target="_blank">
          <img :src="url"/>
        </a>
      </div>
    </div>
    <p class="text-gray-800" v-if="!hasArtworks">
      No items found.
    </p>
    <Footer/>
  </div>
</template>

<style scoped>
.gallery img {
  margin-bottom: 1em;
}
</style>

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
    digitalCol1 () {
      return this.digital.reduce((a, v, i) => {
        if (i % 2 == 0) {
          a.push(v)
        }
        return a
      }, [])
    },
    digitalCol2 () {
      return this.digital.reduce((a, v, i) => {
        if (i % 2 != 0) {
          a.push(v)
        }
        return a
      }, [])
    },
    traditionalCol1 () {
      return this.traditional.reduce((a, v, i) => {
        if (i % 2 == 0) {
          a.push(v)
        }
        return a
      }, [])
    },
    traditionalCol2 () {
      return this.traditional.reduce((a, v, i) => {
        if (i % 2 != 0) {
          a.push(v)
        }
        return a
      }, [])
    },
    hasArtworks () {
      return this.traditional.length > 0 || this.digital.length > 0
    },
  },
}
</script>
