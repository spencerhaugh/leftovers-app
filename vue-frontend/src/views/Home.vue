<template>
  <div class="home">
    <h1>Welcome to Leftovers!</h1>
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
    margin: 5%;
    }
    h1 {
      margin-top: 3%;
    }
</style>