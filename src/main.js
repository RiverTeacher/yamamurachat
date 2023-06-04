import firebase from 'firebase'
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCGCvj1EkEh7p81y14iexNw7Fwhp4R_eRs",
    authDomain: "chaaat-6acd8.firebaseapp.com",
    projectId: "chaaat-6acd8",
    storageBucket: "chaaat-6acd8.appspot.com",
    messagingSenderId: "442975383446",
    appId: "1:442975383446:web:3114052ef909ae4a6077b7"
  };
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})