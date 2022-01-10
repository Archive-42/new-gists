import Vue from "vue";
import App from "./App.vue";
import router from "./router";
 
import "./assets/scss/app.scss";
import firebase from "firebase";
 
Vue.config.productionTip = false;
 
var firebaseConfig = {
  apiKey: "***",
  authDomain: "***",
  databaseURL: "***",
  projectId: "***",
  storageBucket: "***",
  messagingSenderId: "***",
  appId: "***"
};
// Initialize Firebase
 
firebase.initializeApp(firebaseConfig);
 
// handle page reloads
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");