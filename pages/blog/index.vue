<template>
  <div class="container mx-auto px-4 sm:md-0 py-4 leading-relaxed">
    <NuxtLink to="/" class="hover:underline text-blue-700 mb-4">← Home</NuxtLink>
    <h1 class="text-3xl mt-4 mb-4">Blog</h1>
    <div>
      <input class="searchbox" type="text" placeholder="Search" @input="search" />
    </div>
    <div class="blog-index">
      <article class="mb-2" v-for="(post, index) in posts" :key="index">
        <NuxtLink :to="`/blog/${post.slug}`" class="hover:opacity-75">
          <span class="text-xl p-0" :title="post.description">{{ post.title }}</span>
        </NuxtLink>
        <div class="text-sm text-gray-600 mr-2">
          {{ $dateFns.format(post.createdAt, 'yyyy/MM/dd') }}
        </div>
      </article>
      <p class="text-gray-800" v-if="posts.length == 0">
        No posts found.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const posts = await $content('posts').sortBy('createdAt', 'desc').fetch()
    return { posts }
  },
  data () {
    return { title: 'Blog - John Espiritu' }
  },
  head () {
    return { title: this.title }
  },
  methods: {
    async search (evt) {
      const keyword = evt.target.value
      if (keyword.trim() == '') {
        this.posts = await this.$content('posts').sortBy('createdAt', 'desc').fetch()
        return;
      }
      this.posts = await this.$content('posts').search(keyword).sortBy('createdAt', 'desc').fetch()
    }
  },
}
</script>
