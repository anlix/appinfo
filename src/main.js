import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import * as filters from './filters'
import routes from './router'
Vue.use(VueRouter);
Vue.use(MintUI);

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

const router = new VueRouter({
	routes
});
window.router = router;
/*
	根据屏幕设定rem单位基准
*/
(function(window, document) {
	function process() {
		var width = Math.min(document.documentElement.clientWidth, 400);
		document.documentElement.style.fontSize = width / 7.5 + 'px';
	}

	window.addEventListener('resize', process);
	process();

})(window, document);



new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
