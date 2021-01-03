<template>
  <div class="container mx-auto px-4 sm:md-0 py-4 leading-relaxed">
    <NuxtLink to="/" class="hover:underline text-blue-700 mb-4">← Back</NuxtLink>
    <nuxt-content :document="intro" />
    <h1 class="text-3xl my-4 mt-8 border-b border-gray-400">Work History</h1>
    <div>
      <div class="mb-4" v-for="(exp, index) in info.experiences" :key="index">
        <h3 class="text-xl">{{ exp.position }}<span v-if="exp.company"> @ {{ exp.company}}</span></h3>
        <p class="text-sm text-gray-700">{{ exp.period }}</p>
        <p>{{ exp.description }}</p>
      </div>
    </div>
    <h1 class="text-3xl my-4 mt-8 border-b border-gray-400">Skills</h1>
    <template v-for="(skills, area, index) in info.skills">
      <h3 class="text-xl mt-4 mb-2" :key="`${area}-${index}`">{{ area }}</h3>
      <ul class="mb-4" :key="area">
        <li v-for="(skill, index) in skills" class="skill-tag" :key="index">{{ skill }}</li>
      </ul>
    </template>
    <ScrollToTop />
  </div>
</template>

<style scoped lang="postcss">
.skill-tag {
  @apply text-sm bg-gray-400 rounded text-gray-900 inline-block mr-2 mb-2 px-2;
}
</style>

<script>
export default {
  async asyncData ({ $content }) {
    const { info } = await $content('about/info').fetch()
    const intro = await $content('about/intro').fetch()
    return {
      info,
      intro
    }
  },
  data() {
    return {
      title: 'About - John Espiritu'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>
