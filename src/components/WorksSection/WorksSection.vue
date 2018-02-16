<template>
<section id="Works" class="main__section works">
  <agile class="works__list"
    :dots="false" :prevArrow="leftArrow" :nextArrow="rightArrow">
    <works-item v-for="work in works"
      :key="work.id"
      :work="work"></works-item>
  </agile>
</section>
</template>

<script>
import Vue from 'vue'
import VueAgile from 'vue-agile'

import WorksItem from '@/components/WorksSection/WorksItem/WorksItem'

Vue.use(VueAgile)

export default {
  name: 'WorksSection',
  components: {
    WorksItem
  },
  data() {
    return {
      leftArrow: '<svg xmlns="http://www.w3.org/2000/svg" class="agile__arrow-icon"><use href="#leftarrow_20px" /></svg>',
      rightArrow: '<svg xmlns="http://www.w3.org/2000/svg" class="agile__arrow-icon"><use href="#rightarrow_20px" /></svg>',
      works: [
        {
          name: 'Telecom Control Panel',
          type: 'interface',
          description: 'OVH Control Panel Telecom UI - Official Repository',
          stats: [
            {
              property: 'Commits',
              icon: 'pen',
              value: 0
            },
            {
              property: 'Contributors',
              icon: 'person',
              value: 0
            },
            {
              property: 'since last update',
              icon: 'clock',
              value: '0 mn'
            }
          ],
          tags: [
            'tag01',
            'tag02'
          ],
          link: 'https://github.com/ovh-ux/ovh-manager-telecom'
        },
        {
          name: 'Cloud Control Panel',
          type: 'interface',
          description: 'OVH Control Panel Cloud UI - Official Repository',
          stats: [
            {
              property: 'Commits',
              icon: 'pen',
              value: 0
            },
            {
              property: 'Contributors',
              icon: 'person',
              value: 0
            },
            {
              property: 'since last update',
              icon: 'clock',
              value: '0 mn'
            }
          ],
          tags: [
            'tag01',
            'tag02',
            'tag03'
          ],
          link: 'https://github.com/ovh-ux/ovh-manager-cloud'
        },
        {
          name: 'Other projects',
          type: 'listing',
          description: 'Discover here some of the other projects, guidelines components... we have built.',
          items: [
            {
              name: 'ovh-ui-kit-bs',
              description: 'A bootstrap theme for the OVH managers, based on ovh-ui-kit.',
              link: 'https://github.com/ovh-ux/ovh-ui-kit-bs'
            },
            {
              name: 'ovh-ui-kit',
              description: 'OVH UI Kit - Master UI Framework.',
              link: 'https://github.com/ovh-ux/ovh-ui-kit'
            },
            {
              name: 'ovh-ui-kit-documentation',
              description: ' Documentation for the OVH UI Kit.',
              link: 'https://github.com/ovh-ux/ovh-ui-kit-documentation'
            },
          ],
          link: 'https://github.com/ovh-ux',
          linkLabel: 'All our projects'
        },
        {
          name: 'Publications',
          type: 'listing',
          description: 'As passionates about web development, we like sharing with you some of our experiences. These are some articles about topics that are dear to us (only in french, sorry ^^\')',
          items: [
            {
              name: '#OVHMeetup : Drupal et accessibilité web à l’heure des CMS API-First',
              description: 'Les CMS « API first », c’est-à-dire dotés d’interfaces d’édition de contenu minimalistes, mais...',
              link: 'https://www.ovh.com/fr/blog/ovh-meetup-drupal-accessibilite-web-cms-api-first/'
            },
            {
              name: '[UX Labs] Que peut apporter l’UX à une interface en ligne de commande (CLI) ?',
              description: 'L’amélioration continue de l’espace client OVH, qui est une interface graphique, concentre...',
              link: 'https://www.ovh.com/fr/blog/ux-labs-interface-ligne-de-commande/'
            },
            {
              name: 'Libéré, délivré : le code de l’espace client OVH enfin open sourcé',
              description: 'Annoncée lors du Summit 2016, la libération du code source de l’espace client OVH est maintenant une réalité...',
              link: 'https://www.ovh.com/fr/blog/espace-client-ovh-code-libere-open-source/'
            },
          ],
          link: 'https://www.ovh.com/fr/blog/ux',
          linkLabel: 'All our publications'
        }
      ]
    }
  }
}
</script>
