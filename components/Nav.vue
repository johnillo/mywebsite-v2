<template>
  <div class="flex justify-between items-center">
    <NuxtLink to="/" class="hover:underline text-gray-900 mr-4">
      <Logo width="32" height="32" style="fill:#191919"/>
    </NuxtLink>
    <div>
      <NuxtLink to="/about" class="hover:underline text-gray-900 mr-4">About</NuxtLink>
      <NuxtLink to="/projects" class="hover:underline text-gray-900 mr-4">Projects</NuxtLink>
      <NuxtLink to="/blog" class="hover:underline text-gray-900 mr-4">Blog</NuxtLink>
      <a :href="`https://github.com/${$config.sns.github}`" class="hover:underline text-gray-900 mr-4" target="_blank" rel="noopener">GitHub</a>
    </div>
  </div>
</template>
