<template>
  <div class="about">
    <h1>Let's Get Spicy!</h1>
    <img alt="App logo" src="../assets/logo.png">
  
    <div class='about-text about'>
      <p>In need of a meal, but out of ideas? Let us spice things up!</p>
      <p>LEFTOVERS works with what you have on hand, and provides meal ideas you can actually work with.</p>
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
  .about-text {
    background-color: cadetblue;
    color: cornsilk;
    padding: 2%;
    margin-bottom: 2%;
    width: 60%;
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