<template>
  <div class="container mx-auto px-4 sm:md-0 py-4 leading-relaxed">
    <NuxtLink to="/" class="hover:underline text-blue-700 mb-4">← Back</NuxtLink>
    <h1 class="text-3xl my-4 border-b border-gray-400">Hello</h1>
    <p class="mb-4">
      I am a senior software developer at Bizwind Philippines, working in an offshore team that handles the development and maintenance of
      web applications of various companies in Japan. I also design, develop, test, and deploy several products and in-house systems of the company.
    </p>
    <p class="mb-4">
      I specialize in web design and development and work with different web technologies - legacy and new - such as Symfony, CakePHP, Spring Boot, React,
      and EC-CUBE. Though I usually use industry-grade technologies for more reliable solutions, I love exploring new technologies to improve my toolkit and expand my horizon.
    </p>
    <p class="mb-4">
      I enjoy my free time playing video games, coding, and trying new stuff on my ThinkPad and NUC. I also have a certified N4 level of Japanese language proficiency since 2020.
    </p>
    <h1 class="text-3xl my-4 mt-8 border-b border-gray-400">Work History</h1>
    <div>
      <div class="mb-4">
        <h3 class="text-xl">Software Developer @ Bizwind Philippines, Inc.</h3>
        <p class="text-sm text-gray-700">2018 APR - PRESENT</p>
        <p>Designs, maintains, and creates various in-house and client web applications.</p>
      </div>
      <div class="mb-4">
        <h3 class="text-xl">Freelance Software Developer</h3>
        <p class="text-sm text-gray-700">2015 - PRESENT</p>
        <p>Personal and commission projects development. </p>
      </div>
      <div class="mb-4">
        <h3 class="text-xl">Software Developer @ Infopiphany IT Solutions</h3>
        <p class="text-sm text-gray-700">2017 JUN - 2018 MAR</p>
        <p>Development of mobile and desktop ERP systems using .NET framework, RESTful web services, and React Native.</p>
      </div>
    </div>
    <h1 class="text-3xl my-4 mt-8 border-b border-gray-400">Skills</h1>
    <h3 class="text-xl mt-4 mb-2">Languages</h3>
    <ul>
      <li class="skill-tag">C#</li>
      <li class="skill-tag">HTML/CSS</li>
      <li class="skill-tag">Java</li>
      <li class="skill-tag">JavaScript</li>
      <li class="skill-tag">PHP</li>
      <li class="skill-tag">Python</li>
      <li class="skill-tag">SQL</li>
    </ul>
    <h3 class="text-xl mt-4 mb-2">Frameworks</h3>
    <ul>
      <li class="skill-tag">Bootstrap</li>
      <li class="skill-tag">CakePHP</li>
      <li class="skill-tag">EC-CUBE</li>
      <li class="skill-tag">Entity Framework</li>
      <li class="skill-tag">Node</li>
      <li class="skill-tag">React</li>
      <li class="skill-tag">React Native</li>
      <li class="skill-tag">Spring</li>
      <li class="skill-tag">Symfony</li>
      <li class="skill-tag">WordPress</li>
      <li class="skill-tag">.NET (WinForms)</li>
    </ul>
    <h3 class="text-xl mt-4 mb-2">Development</h3>
    <ul>
      <li class="skill-tag">Git</li>
      <li class="skill-tag">Gulp</li>
      <li class="skill-tag">Itamae</li>
      <li class="skill-tag">Jenkins</li>
      <li class="skill-tag">Shell</li>
      <li class="skill-tag">Vagrant</li>
      <li class="skill-tag">Vim</li>
      <li class="skill-tag">VirtualBox</li>
      <li class="skill-tag">Visual Studio</li>
      <li class="skill-tag">VS Code</li>
      <li class="skill-tag">Webpack</li>
    </ul>
    <h3 class="text-xl mt-4 mb-2">Infrastructure</h3>
    <ul class="mb-6">
      <li class="skill-tag">Apache</li>
      <li class="skill-tag">Docker</li>
      <li class="skill-tag">MySQL</li>
      <li class="skill-tag">Nginx</li>
      <li class="skill-tag">PostgreSQL</li>
      <li class="skill-tag">SQLite</li>
      <li class="skill-tag">Tomcat</li>
      <li class="skill-tag">Tomcat</li>
    </ul>
    <NuxtLink to="/" class="hover:underline text-blue-700 my-4">← Back</NuxtLink>
  </div>
</template>

<style scoped lang="postcss">
.skill-tag {
  @apply text-sm bg-gray-400 rounded text-gray-900 inline-block mr-1 mb-2 px-2;
}
</style>

<script>
  export default {
    data() {
      return {
        title: 'About - John Espiritu'
      }
    },
    head() {
      return {
        title: this.title,
      }
    }
  }
</script>
