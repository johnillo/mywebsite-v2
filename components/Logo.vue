<template>
  <svg class="inline-block mb-2" :width="width || 500" :height="height || 500" version="1.1" viewBox="0 0 132.29 132.29" xmlns="http://www.w3.org/2000/svg">
    <path d="m4.4894 66.146 12.331 12.331 24.663-24.663 36.994 36.994-12.331 12.331-12.331-12.331-12.331 12.331 24.663 24.663 61.656-61.656-12.331-12.331-24.663 24.663-12.331-12.331 12.331-12.331-12.331-12.331-12.331 12.331-12.331-12.331 24.663-24.663-12.331-12.331-49.325 49.325z" stroke-linecap="round" stroke-linejoin="round" stroke-width="158.02"/>
  </svg>
</template>

<script>
export default {
  props: {
    height: String,
    width: String,
  }
}
</script>