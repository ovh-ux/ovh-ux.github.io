// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from "./App";
import store from "./store/index";
import Vue from "vue";

const __svg__ = { path: "./assets/**/icons/*.svg", name: "[hash].icons.svg" };
require("webpack-svgstore-plugin/src/helpers/svgxhr")(__svg__);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: "#app",
    store,
    components: { App },
    template: "<App/>"
});
