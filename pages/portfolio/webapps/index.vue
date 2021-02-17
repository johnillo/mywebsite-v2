<template>
  <div class="container mx-auto px-4 sm:md-0 py-4 leading-relaxed max-w-4xl">
    <Nav/>
    <PortfolioHomeLink/>
    <h1 class="text-3xl mb-6 border-b border-gray-400">Web Apps</h1>
    <div>
      <article class="mb-6" v-for="(project, index) in this.projects" :key="index">
        <div class="font-bold text-lg">{{ project.name }}</div>
        <div class="text-sm">
          <a :href="project.url" class="external-link text-link mr-2" target="_blank">Open App</a>
          <a :href="project.github" class="external-link text-link mr-2" target="_blank">Open in GitHub</a>
        </div>
        <div class="my-2">{{ project.description }}</div>
        <div class="inline-block text-sm mr-2 text-gray-800 px-2 bg-gray-400 rounded" v-for="(tech, index) in project.tech" :key="index">
          {{ tech }}
        </div>
      </article>
    </div>
    <Footer/>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const { projects } = await $content('projects').fetch()
    return {
      projects
    }
  },
  data() {
    return {
      title: 'Projects - John Espiritu',
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>
