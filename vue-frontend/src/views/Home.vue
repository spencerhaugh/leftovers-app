<template>
  <div class="home">
    <img alt="App logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to the Spicy Boi App"/>
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
