<template>
<section id="Home"  class="main__section home">
  <header class="home__header">
    <h1 class="home__ux-logo">
      <img src="@/assets/images/logos/logo_ux-team.svg" alt="OVH UX Team logo">
    </h1>
    <div class="home__ovh-logo">
      <img src="@/assets/images/logos/logo_ovh-com.svg" alt="OVH logo">
    </div>
  </header>
  <section class="home__intro">
    <h2 class="home__intro-title">We are the UX Team of OVH</h2>
    <div>
      <p class="home__intro-text">OVH is a fast growing company specialized in web services. We build the interfaces for the OVH customers.</p>
      <p class="home__intro-text">As web development enthusiasts, we love new technologies and challenges. In a technical context where things change quickly, we aim at creating innovative and effective interactions, while considering the technical legacy.</p>
    </div>
  </section>
</section>
</template>

<script>
export default {
  name: 'HomeSection'
}
</script>

<style scoped lang="scss">
@import "./HomeSection";
</style>
