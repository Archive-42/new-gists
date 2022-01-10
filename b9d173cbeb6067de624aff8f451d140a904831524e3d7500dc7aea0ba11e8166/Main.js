import Vue from'vue'
import App from'./App.vue'
 
Vue.config.productionTip=false
Vue.config.ignoredElements=[
'smart-list-box',
'smart-list-item',
'smart-cards',
'smart-card',
 
]
 
newVue({
render:h=>h(App),
}).$mount('#app')