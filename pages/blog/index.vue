<template>
  <div class="container mx-auto px-4 sm:md-0 py-4 leading-relaxed">
    <NuxtLink to="/" class="hover:underline text-blue-700 mb-4">← Home</NuxtLink>
    <h1 class="text-3xl mt-4 mb-6">Blog</h1>
    <div class="blog-index">
      <article class="mb-2" v-for="(post, index) in posts" :key="index">
        <NuxtLink :to="`/blog/${post.slug}`" class="hover:opacity-75">
          <span class="text-xl p-0">{{ post.title }}</span>
        </NuxtLink>
        <div class="text-sm text-gray-600 mr-2">
          {{ $dateFns.format(post.createdAt, 'yyyy/MM/dd') }}
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const posts = await $content('posts').fetch()
    return { posts }
  }
}
</script>
