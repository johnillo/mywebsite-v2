<template>
  <ul class="mt-4">
    <li class="inline-block mr-4">
      <NuxtLink to="about" class="hover:underline">About</NuxtLink>
    </li>
    <li class="inline-block mr-4">
      <NuxtLink to="projects" class="hover:underline">Projects</NuxtLink>
    </li>
    <li class="inline-block mr-4">
      <a href="#" class="hover:underline">Blog</a>
    </li>
    <li class="inline-block">
      <a :href="`https://github.com/${$config.sns.github}`" class="hover:underline" target="_blank" rel="noopener">GitHub</a>
    </li>
  </ul>
</template>