<template>
  <div class="container mx-auto px-4 sm:md-0 py-4 leading-relaxed max-w-4xl">
    <Nav/>
    <h1 class="text-4xl mt-4 border-b border-gray-400 leading-tight pb-2">{{ post.title }}</h1>
    <div class="mt-2 text-sm text-gray-800">
      <span>
        Posted on {{ $dateFns.format(post.createdAt, 'yyyy/MM/dd') }}
      </span>
      <span v-if="$dateFns.format(post.createdAt, 'yyyy/MM/dd') != $dateFns.format(post.updatedAt, 'yyyy/MM/dd')">
        (Updated {{ $dateFns.format(post.updatedAt, 'yyyy/MM/dd') }})
      </span>
    </div>
    <article class="mb-8">
      <nuxt-content :document="post" />
      <ScrollToTop />
    </article>
    <footer class="border-t border-gray-400 pt-4 mb-8 text-sm text-gray-900">
      <div v-if="tagBaseUrl">
      <NuxtLink :to="`${tagBaseUrl}/${encodeURIComponent(tag)}`" v-for="(tag, index) in post.tags" :key="index">
        <span class="inline-block bg-gray-400 px-2 mr-2 rounded">
          {{ tag }}
        </span>
      </NuxtLink>
      </div>
      <div v-else>
        <span class="inline-block bg-gray-400 px-2 mr-2 rounded" v-for="(tag, index) in post.tags" :key="index">
          {{ tag }}
        </span>
      </div>
    </footer>
    <Footer/>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
    tagBaseUrl: String,
  }
}
</script>
