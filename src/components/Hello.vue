<template>
  <div class="hello">
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
/* eslint-disable */




export default {
  name: 'hello',
  props: ['user', 'loggedOn'],
  data() {
    return {
      msg: 'swag',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
    flex-direction: column;
  }

  button {
    width: 195px;
    height: 50px;
    background-image: url(../assets/btn_google_signin_dark_normal_web.png);
  }
</style>
