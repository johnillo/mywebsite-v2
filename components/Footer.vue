<template>
  <footer class="my-4 text-center text-xs text-gray-800">
    <ul>
      <a :href="`https://github.com/${$config.sns.github}`" class="inline-block hover:underline" target="_blank" rel="noopener">GitHub</a>
      &middot;
      <NuxtLink to="/about/privacy-policy" class="inline-block hover:underline">Privacy Policy</NuxtLink>
    </ul>
  </footer>
</template>
