<template>
  <div class="home">
   
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
body{
    background-image: url(../assets/imagenes/inicio.jpg);
    background-position: center;
    background-repeat:no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
}
</style>