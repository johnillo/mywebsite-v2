<template>
  <div class="container mx-auto px-4 sm:md-0 py-4 leading-relaxed max-w-4xl">
    <Nav/>
    <h1 class="text-3xl mt-4 mb-4">Posts tagged "{{ this.tag }}"</h1>
    <div>
      <input class="searchbox mb-4 block py-2 px-4 w-full bg-gray-300 rounded" type="text" placeholder="Search posts" @input="search" />
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
    <Footer/>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const tag = decodeURIComponent(params.tag)
    const posts = await $content('posts').where({ 'tags': { $contains: tag } }).sortBy('createdAt', 'desc').fetch()
    return { posts, tag }
  },
  data () {
    return { title: '- John Espiritu' }
  },
  head () {
    return {
      title: `Posts tagged "${this.tag}" - John Espiritu`,
    }
  },
  methods: {
    async search (evt) {
      const { tag } = this
      const keyword = evt.target.value

      if (keyword.trim() == '') {
        this.posts = await this.$content('posts')
          .where({ 'tags': { $contains: tag } })
          .sortBy('createdAt', 'desc')
          .fetch()
        return
      }

      this.posts = await this.$content('posts')
        .where({ 'tags': { $contains: tag } })
        .search(keyword)
        .sortBy('createdAt', 'desc')
        .fetch()
    }
  },
}
</script>
