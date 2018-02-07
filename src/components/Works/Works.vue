<template>
<section class="main__section works">
  <ul class="works__list">
    <li class="works__item">
      <section class="works__illustration"></section>

      <section class="works__description">
        <h2 class="works__title">Telecom Control Panel</h2>
        <div class="works__description-category">
          <h3 class="works__description-category-title">About</h3>
          <p>OVH Control Panel Telecom UI - Official Repository</p>
        </div>

        <div class="works__description-category">
          <h3 class="works__description-category-title">Stats</h3>
          <ul class="works__stats-list">
            <li class="works__stats-item">
              <div class="icon-container">
                <img src="@/assets/images/icons/pen_20px.svg" alt="">
              </div>
              <div class="about__recent-description">
                <div class="value value--l1">
                  00
                </div>
                <div class="property">
                  Commits
                </div>
              </div>
            </li>

            <li class="works__stats-item">
              <div class="icon-container">
                <img src="@/assets/images/icons/person_20px.svg" alt="">
              </div>
              <div class="about__recent-description">
                <div class="value value--l1">
                  00
                </div>
                <div class="property">
                  Contributors
                </div>
              </div>
            </li>

            <li class="works__stats-item">
              <div class="icon-container">
                <img src="@/assets/images/icons/clock_20px.svg" alt="">
              </div>
              <div class="about__recent-description">
                <div class="value value--l1">
                  00
                </div>
                <div class="property">
                  since last update
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="works__description-category">
          <h3 class="works__description-category-title">Tags</h3>
          <ul class="works__tags-list">
            <li class="works__tags-item">Tag01</li>
            <li class="works__tags-item">Tag02</li>
          </ul>
        </div>
      </section>
    </li>
  </ul>
  <button type="button">
    <img src="@/assets/images/icons/leftArrow_20px.svg" alt="Show previous work">
  </button>
  <button type="button">
    <img src="@/assets/images/icons/leftArrow_20px.svg" alt="Show next work">
  </button>
</section>
</template>

<script>
export default {
  name: 'Works'
}
</script>

<style>
</style>
