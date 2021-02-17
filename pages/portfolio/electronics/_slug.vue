<template>
  <div class="container mx-auto px-4 sm:md-0 py-4 leading-relaxed max-w-4xl">
    <Nav/>
    <ElectronicsLink/>
    <h1 class="text-3xl mt-1 border-b border-gray-400 leading-tight pb-2">{{ post.title }}</h1>
    <article class="mt-4 mb-8">
      <nuxt-content :document="post" />
      <ScrollToTop />
    </article>
    <Footer/>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('portfolio/electronics', params.slug).fetch()
    return { post }
  },
  data () {
    return { title: '- John Espiritu' }
  },
  head () {
    return {
      title: `${this.post.title} ${this.title}`,
      meta: [
        { hid: 'description', name: 'description', content: this.post.description },
        { hid: 'og:title', property: 'og:title', content: this.post.title },
        { hid: 'og:description', property: 'og:description', content: this.post.description },
        { hid: 'twitter:title', name: 'twitter:title', content: this.post.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.post.description }
      ]
    }
  },
}
</script>
