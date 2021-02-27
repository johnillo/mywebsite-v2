<template>
  <div class="container mx-auto px-4 sm:md-0 py-4 leading-relaxed max-w-4xl">
    <Nav/>
    <PortfolioHomeLink/>
    <h1 class="text-3xl mb-4 border-b border-gray-400">Electronics</h1>
    <p class="mb-6">
      Arduino, Raspberry Pi, and other simple electronics projects I did as a hobby.
    </p>
    <div class="blog-index mb-16">
      <article class="flex mb-8 md:mb-4 flex-col md:flex-row justify-center" v-for="(post, index) in posts" :key="index">
        <div
          class="flex flex-col justify-center overflow-hidden border border-gray-400 bg-gray-200 shadow-inner mr-4 rounded mb-2"
          style="width: 180px; height: 100px; min-width: 180px;">
          <img :src="post.thumbnail"/>
        </div>
        <div class="block w-full">
          <NuxtLink class="hover:text-blue-700" :to="`/portfolio/electronics/${post.slug}`">
          <p class="text-lg font-bold p-0 border-b border-gray-400 mb-2">
            {{ post.title }}
          </p>
          </NuxtLink>
          <p class="p-0">{{ post.description }}</p>
          <ul class="mt-1">
            <li
              class="inline-block mr-2 text-xs bg-gray-200 text-gray-900 rounded px-2 border border-gray-400 shadow-inner"
              v-for="(t, index) in post.tech"
              :key="index">
              {{ t }}
            </li>
          </ul>
        </div>
      </article>
      <p class="text-gray-800" v-if="posts.length == 0">
        No items found.
      </p>
    </div>
    <Footer/>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const posts = await $content('portfolio/electronics').sortBy('sort', 'asc').fetch()
    return { posts }
  },
  data () {
    return { title: 'Electronics Portfolio - John Espiritu' }
  },
  head () {
    return { title: this.title }
  },
}
</script>
