<template>
  <List :posts="posts" title="Today I Learned (TIL)" baseUrl="/til" @search="handleSearch"/>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const posts = await $content('til').sortBy('createdAt', 'desc').fetch()
    return { posts }
  },
  data () {
    return { title: 'Today I Learned (TIL) - John Espiritu' }
  },
  head () {
    return { title: this.title }
  },
  methods: {
    async handleSearch (evt) {
      const keyword = evt.target.value
      if (keyword.trim() == '') {
        this.posts = await this.$content('til').sortBy('createdAt', 'desc').fetch()
        return;
      }
      this.posts = await this.$content('til').search(keyword).sortBy('createdAt', 'desc').fetch()
    }
  },
}
</script>
