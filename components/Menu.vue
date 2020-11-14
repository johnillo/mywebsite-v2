<template>
  <ul class="mt-4">
    <li class="inline-block mr-4">
      <NuxtLink to="about" class="hover:underline">About</NuxtLink>
    </li>
    <li class="inline-block mr-4">
      <NuxtLink to="projects" class="hover:underline">Projects</NuxtLink>
    </li>
    <li class="inline-block mr-4">
      <NuxtLink to="blog" class="hover:underline">Blog</NuxtLink>
    </li>
    <li class="inline-block">
      <a :href="`https://github.com/${$config.sns.github}`" class="hover:underline" target="_blank" rel="noopener">GitHub</a>
    </li>
  </ul>
</template>
