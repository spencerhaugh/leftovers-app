<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Below I am calling for the Login Component in Vue! But I've passed it some text from this About Page that you won't see on the Login page!</p>
    <div>
      <Login msg="This is a prop passed to Login.vue from About.vue"/>   
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'

export default {
  name: 'Home',
  components: {
    Login
  }
}
</script>
