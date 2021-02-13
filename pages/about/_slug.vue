<template>
  <div class="container mx-auto px-4 sm:md-0 py-4 leading-relaxed max-w-4xl">
    <Nav/>
    <h1 class="text-4xl mt-4 border-b border-gray-400">{{ post.title }}</h1>
    <div class="mt-2 text-sm text-gray-800">
      <span v-if="!post.nodate">
        Posted on {{ $dateFns.format(post.createdAt, 'yyyy/MM/dd') }}
      </span>
      <span v-if="!post.nodate && $dateFns.format(post.createdAt, 'yyyy/MM/dd') != $dateFns.format(post.updatedAt, 'yyyy/MM/dd')">
        (Updated {{ $dateFns.format(post.updatedAt, 'yyyy/MM/dd') }})
      </span>
    </div>
    <article class="mb-8">
      <nuxt-content :document="post" />
    </article>
    <ScrollToTop />
    <Footer/>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('about', params.slug).fetch()
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
