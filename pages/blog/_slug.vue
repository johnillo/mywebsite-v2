<template>
  <div class="container mx-auto px-4 sm:md-0 py-4 leading-relaxed">
    <NuxtLink to="/blog" class="inline-block hover:underline text-blue-700 mb-4 px-0">← Blog</NuxtLink>
    <h1 class="text-4xl border-b border-gray-400">{{ post.title }}</h1>
    <div class="mt-2 text-sm text-gray-800">
      <span>
        Posted at {{ $dateFns.format(post.createdAt, 'yyyy/MM/dd') }}
      </span>
      <span v-if="$dateFns.format(post.createdAt, 'yyyy/MM/dd') != $dateFns.format(post.updatedAt, 'yyyy/MM/dd')">
        (Updated {{ $dateFns.format(post.updatedAt, 'yyyy/MM/dd') }})
      </span>
    </div>
    <article class="mb-8">
      <nuxt-content :document="post" />
    </article>
    <footer class="border-t border-gray-400 pt-4 mb-8 text-sm text-gray-900">
      <NuxtLink :to="`/blog/tagged/${tag}`" v-for="(tag, index) in post.tags" :key="index">
        <span class="inline-block bg-gray-400 px-2 mr-2 rounded">
          {{ tag }}
        </span>
      </NuxtLink>
    </footer>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()
    return { post }
  }
}
</script>
