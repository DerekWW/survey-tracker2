<template>
  <div class="hello">
    <button type="button" name="button"></button>
    <ul>
      <li v-for='user in info'>{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */




export default {
  name: 'hello',
  props: ['info'],
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
