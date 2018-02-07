<template>
<section class="main__section about">
  <section class="about__recent">
    <h2 class="about__title">Recent activity</h2>
    <ul class="about__recent-list">
      <li class="about__recent-item">
        <div class="icon-container">
          <img src="@/assets/images/icons/puzzle_32px.svg" alt="">
        </div>
        <div class="about__recent-description">
          <div class="value value--l2">
            00
          </div>
          <div class="property">
            repositories on github
          </div>
        </div>
      </li>

      <li class="about__recent-item">
        <div class="icon-container">
          <img src="@/assets/images/icons/clock_32px.svg" alt="">
        </div>
        <div class="about__recent-description">
          <div class="property">
            Latest updated repository :
          </div>
          <div class="value">
            <a href="#" class="text text--link">github-repository</a>
            <span>, 00 minutes ago</span>
          </div>
        </div>
      </li>
    </ul>
  </section>
  <section class="about__technologies">
    <h2 class="about__title">Technologies we love</h2>
    <ul class="about__technologies-list">
      <li class="about__technologies-item">
        <div class="about__technologies-logo-container">
          <img src="@/assets/images/logos/logo_node-js.svg"
             class="about__technologies-logo"
             alt="Node.js logo">
        </div>
        <div class="about__technologies-amount">
          <div class="about__technologies-gradient"></div>
        </div>
        <div class="about__technologies-legend">
          <div class="property">Node.js</div>
          <div class="value value--l1">00</div>
        </div>
      </li>
    </ul>
  </section>
</section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style>
</style>
