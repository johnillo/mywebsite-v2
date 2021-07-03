<template>
  <List :title="`Posts tagged &quot;${this.tag}&quot;`" :posts="posts" baseUrl="/blog" @search="handleSearch"/>
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
    async handleSearch (evt) {
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
