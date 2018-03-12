import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    aboutRecentItems: [
      {
        icon : 'puzzle',
        property : 'repositories on github',
        value : 0,
        type :'number'
      },
      {
        icon : 'clock',
        property : 'latest updated repository',
        linkName : 'repository-name',
        linkHref : '#',
        linkInformations : '00 minutes ago',
        type :'link'
      }
    ]
  },

  getters: {
    aboutRecentItems: state => {
      return state.aboutRecentItems;
    }
  }
})
