<template>
  <List :posts="posts" title="Blog" baseUrl="/blog" @search="handleSearch"/>
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
    async handleSearch (evt) {
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
