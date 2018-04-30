<template>
<section id="About" class="main__section about">
  <about-recent></about-recent>
  <about-technologies></about-technologies>
</section>
</template>

<script>
import AboutRecent from '@/components/AboutSection/AboutRecent/AboutRecent'
import AboutTechnologies from '@/components/AboutSection/AboutTechnologies/AboutTechnologies'

export default {
  name: 'AboutSection',
  components: {
    AboutRecent,
    AboutTechnologies
  }
}
</script>

<style>
</style>
