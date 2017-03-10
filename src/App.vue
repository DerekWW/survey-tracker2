<template>
<div id="app">
  <main>
    <router-view :user='use' :loggedOn='isLoggedIn'></router-view>
  </main>
</div>
</template>

<script>
/* eslint-disable */



import firebase from 'firebase';
import firebaseui from 'firebaseui';


export default {
  name: 'app',
  firebase: {

  },
  data() {
    return {
      use: 'lala',
      isLoggedIn: false,
    };
  },
  components: {

  },
  created: function() {
    let holder = '';
    let provider = new firebase.auth.GoogleAuthProvider();
    // provider.addScope('https://www.googleapis.com/auth/spreadsheets.readonly')


    let config = {
      apiKey: "AIzaSyDVvtSK4fZ6htviqyvwUsMAQ-MYbPkgCEk",
      authDomain: "survey-tracker-3d376.firebaseapp.com",
      databaseURL: "https://survey-tracker-3d376.firebaseio.com",
      storageBucket: "survey-tracker-3d376.appspot.com",
      messagingSenderId: "1018029921808"
    };

    let app = firebase.initializeApp(config);
    let db = app.database();

    let uiConfig = {
      signInSuccessUrl: 'localhost:8080/dashboard',
      signInOptions: [{
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']

      }],
    };

    let ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
    let party;

    let initApp = function() {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          holder = user;
          user.getToken().then(function(accessToken) {
            document.getElementById('sign-in-status').textContent = 'Signed in';
            document.getElementById('sign-in').textContent = 'Sign out';
            document.getElementById('account-details').textContent = JSON.stringify({
              displayName: displayName,
              email: email,
              emailVerified: emailVerified,
              photoURL: photoURL,
              uid: uid,
              accessToken: accessToken,
              providerData: providerData
            }, null, '  ');
          });
        } else {
          // User is signed out.
          document.getElementById('sign-in-status').textContent = 'Signed out';
          document.getElementById('sign-in').textContent = 'Sign in';
          document.getElementById('account-details').textContent = 'null';
        }
      }, function(error) {
        console.log(error);
      });
    };

    window.addEventListener('load', function() {
      initApp()
    });

    this.use = holder;
  },
};

</script>

<style scoped>

</style>
