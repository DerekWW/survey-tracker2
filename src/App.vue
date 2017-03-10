<template>
  <div id="app">
    <main>
      <router-view :info='users'></router-view>
    </main>

  </div>
</template>

<script>
/* eslint-disable */

import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDVvtSK4fZ6htviqyvwUsMAQ-MYbPkgCEk",
  authDomain: "survey-tracker-3d376.firebaseapp.com",
  databaseURL: "https://survey-tracker-3d376.firebaseio.com",
  storageBucket: "survey-tracker-3d376.appspot.com",
  messagingSenderId: "1018029921808"
};

let app = firebase.initializeApp(config);
let db = app.database();

let users1 = db.ref('users')

export default {
  name: 'app',
  firebase: {
    users: users1
  },
  components: {

  },
};
</script>

<style scoped>

</style>
