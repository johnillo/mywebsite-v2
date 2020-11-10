<template>
  <div class="container mx-auto px-4 sm:md-0 py-4 leading-relaxed">
    <NuxtLink to="/" class="hover:underline text-blue-700 mb-4">← Back</NuxtLink>
    <h1 class="text-3xl my-4 border-b border-gray-400">Projects</h1>
    <div>
      <article class="mb-4">
        <div class="font-bold text-lg mb-2">Resistor Calculator</div>
        <div class="mb-2">A utility for calculating the resistance of a resistor.</div>
        <a href="https://johnillo.github.io/resistor-color-calculator/" class="external-link text-link mr-2" target="_blank">Open App</a>
        <a href="https://github.com/johnillo/resistor-color-calculator" class="external-link text-link mr-2" target="_blank">Open in GitHub</a>
      </article>
      <article>
        <div class="font-bold text-lg mb-2">Hololive YouTube Subscriber Count</div>
        <div class="mb-2">
          View the number of YouTube subscribers of all Hololive VTubers.
          A project of <a href="https://dreamwithnokz.dev/" class="text-link" target="_blank">@dreamwithnokz</a> that I contributed to.
        </div>
        <a href="https://hysc.vercel.app" class="external-link text-link mr-2" target="_blank">Open App</a>
        <a href="https://github.com/DreamWithNokz/hololive-youtube-subscriber-count" class="external-link text-link mr-2" target="_blank">Open in GitHub</a>
      </article>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Projects - John Espiritu'
      }
    },
    head() {
      return {
        title: this.title,
      }
    }
  }
</script>