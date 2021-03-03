<template>
  <div class="gallery">
    <div class="hidden sm:block mt-4">
      <div class="mb-8 flex flex-wrap">
        <div class="w-full sm:w-1/3 pr-2">
          <a :href="url" v-for="(url, index) in col1" :key="index" target="_blank">
            <img class="w-full mb-4 shadow-md" :src="url"/>
          </a>
        </div>
        <div class="w-full sm:w-1/3 pl-2">
          <a :href="url" v-for="(url, index) in col2" :key="index" target="_blank">
            <img class="w-full mb-4 shadow-md" :src="url"/>
          </a>
        </div>
        <div class="w-full sm:w-1/3 pl-2">
          <a :href="url" v-for="(url, index) in col3" :key="index" target="_blank">
            <img class="w-full mb-4 shadow-md" :src="url"/>
          </a>
        </div>
      </div>
    </div>
    <div class="block sm:hidden mt-4">
      <a :href="url" v-for="(url, index) in images" :key="index" target="_blank">
        <img class="w-full mb-4 shadow-md" :src="url"/>
      </a>
    </div>
  </div>
</template>

<style scoped>
.gallery img {
  border-radius: 0.25em;
  border: 5px solid white;
}
</style>

<script>
export default {
  props: {
    images: Array,
  },
  computed: {
    col1 () {
      return this.images.reduce((a, v, i) => {
        if (i % 3 == 0) {
          a.push(v)
        }
        return a
      }, [])
    },
    col2 () {
      return this.images.reduce((a, v, i) => {
        if (i % 3 == 1) {
          a.push(v)
        }
        return a
      }, [])
    },
    col3 () {
      return this.images.reduce((a, v, i) => {
        if (i % 3 == 2) {
          a.push(v)
        }
        return a
      }, [])
    },
  },
}
</script>
