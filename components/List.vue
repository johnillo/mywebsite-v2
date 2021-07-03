<template>
  <div class="container mx-auto px-4 sm:md-0 py-4 leading-relaxed max-w-4xl">
    <Nav/>
    <h1 class="text-3xl mb-4">{{ title }}</h1>
    <div>
      <input class="searchbox" type="text" placeholder="Search" @input="$emit('search', $event)" />
    </div>
    <div class="blog-index">
      <article class="mb-2" v-for="(post, index) in posts" :key="index">
        <NuxtLink :to="`${baseUrl}/${post.slug}`" class="hover:underline">
          <span class="text-md p-0" :title="post.description">{{ post.title }}</span>
        </NuxtLink>
        <div class="text-xs text-gray-600 mr-2">
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
  props: {
    baseUrl: String,
    posts: Array,
    title: String,
  }
}
</script>