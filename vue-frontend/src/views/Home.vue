<template>
  <div class="home">
    <img alt="App logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Leftovers!"/>
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
</style>