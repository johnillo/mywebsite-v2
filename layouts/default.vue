<template>
  <Nuxt />
</template>

<script>
export default {
  mounted () {
    // start matomo analytics
    this.$matomo && this.$matomo.trackPageView()
  }
}
</script>
