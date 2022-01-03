<template>
  <div id="home">
    <home-profile></home-profile>
    <div id="added-value">
    </div>
  </div>
</template>

<script>
import HomeProfile from '../components/HomeProfile.vue'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: { HomeProfile }
}
</script>

<style>
#home{
  height:auto;
  width:100%;
}
.center{
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
