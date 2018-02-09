// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

const __svg__ = { path: './assets/**/icons/*.svg', name: '[hash].icons.svg' };
require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
