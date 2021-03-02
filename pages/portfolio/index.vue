<template>
  <div class="container mx-auto px-4 sm:md-0 py-4 leading-relaxed max-w-4xl">
    <Nav/>
    <h1 class="text-3xl mb-4 border-b border-gray-400">Portfolio</h1>
    <div class="mb-16">
      A collection of some stuff I made.
      <ul class="mt-8 mb-4">
        <li>
          <NuxtLink class="pl-24 relative block border border-gray-400 rounded px-4 py-2 shadow-inner mb-4 hover:bg-blue-100 hover:border-blue-300 cursor-pointer" to="/portfolio/webapps">
            Web Apps
            <img class="absolute" src="/images/laptop.png" style="width:75px; left: 0.2em; top: -0.8em;"/>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="pl-24 relative block border border-gray-400 rounded px-4 py-2 shadow-inner mb-4 hover:bg-blue-100 hover:border-blue-300 cursor-pointer" to="/portfolio/electronics">
            Electronics
            <img class="absolute" src="/images/nixie.png" style="width:75px; left: 0.1em; top: -1em;"/>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="pl-24 relative block border border-gray-400 rounded px-4 py-2 shadow-inner mb-4 hover:bg-blue-100 hover:border-blue-300 cursor-pointer" to="/portfolio/artworks">
            Artworks
            <img class="absolute" src="/images/artboard.png" style="width:70px; left: 0.75em; top: 0em;"/>
          </NuxtLink>
        </li>
      </ul>
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
