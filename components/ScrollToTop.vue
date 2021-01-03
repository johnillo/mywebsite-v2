<template>
  <div class="scroll-to-top" :class="{ 'hidden': this.hidden }" @click="this.scrollTop">
    Top 🠕
  </div>
</template>

<script>
export default {
  data () {
    return {
      hidden: true,
      prevScrollTop: 0
    }
  },
  created () {
    if (process.browser) {
      window.addEventListener('scroll', this.setVisible)
    }
  },
  methods: {
    setVisible () {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      const diff = scrollTop - this.prevScrollTop
      this.hidden = (diff < 0 && scrollTop > 100) ? false : true
      this.prevScrollTop = scrollTop
    },
    scrollTop () {
      if (!process.browser) {
        return
      }
      document.body.scrollTop = 0 // safari
      document.documentElement.scrollTop = 0 // chrome, firefox, ie, and opera
    }
  }
}
</script>
