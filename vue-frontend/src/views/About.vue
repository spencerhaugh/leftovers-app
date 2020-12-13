<template>
  <div class="about">
    <h1>LEFTOVERS:</h1>
    <img alt="App logo" src="../assets/logo.png">
    <h2>Let's Get Spicy!</h2>
    <div class='about-text about'>
      <p>In need of a meal, but out of ideas? Let us spice things up!</p>
      <p>LEFTOVERS works with what you've got on hand, and gives you meal ideas you can actually work with.</p>
      <p>Just tell us you main ingredient, and we'll give you dozens of ideas! Favorite the ones you love, and ditch the ones you aren't feeling. Circle back to your favorites in your profile page. Easy as that!</p>
    </div>
    <div>
      <Login msg="Got an account? Sign in now!"/>   
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/views/Login.vue'

export default {
  name: 'Home',
  components: {
    Login
  }
}
</script>

<style scoped>
  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    max-width: 300px;
    width: 30%;
    margin: 2%;
    }
    h1 {
      margin-top: 3%;
    }
    h2 {
      margin-bottom: 3%;
    }
    p {
      width: 50%;
      text-align: center;
    }
</style>