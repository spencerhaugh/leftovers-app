<template>
  <div class="home">
    <h1>HANGRY!</h1>
    <h2>When you need meal ideas, NOW.</h2>
    <img alt="App logo" src="../assets/logo.png">
    <HelloWorld msg=""/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
  img {
    max-width: 300px;
    width: 30%;
    margin: 3%;
    }
    h1 {
      margin-top: 3%;
      font-family: Dagsen_Inked, Helvetica, Arial;
      font-size: 5rem;
    }
    h2 {
      font-family: big_noodle_titling, Helvetica, Arial;
    }
    /* Font import tips researched from https://reactgo.com/add-fonts-vue-app/ */
</style>