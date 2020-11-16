<template>
  <div class="profile">
    <login-bar></login-bar>
    <oder-ding></oder-ding>
    <oder-bar></oder-bar>
    <profile-home></profile-home>
    <!-- <h1>This is a profile page</h1>
    <hello-world></hello-world> -->
  </div>
</template>

<script>
import LoginBar from './childProfile/LoginBar.vue'
import HelloWorld from 'components/HelloWorld.vue'
import ProfileHome from 'components/content/profileHome/ProfileHome.vue'
import OderBar from './childProfile/OderBar'
import OderDing from './childProfile/OderDing'
export default {

  name: 'Profile',
  components: {
    HelloWorld,
    LoginBar,
    ProfileHome,
    OderBar,
    OderDing
  }
  
}
</script>

<style>
.profile{
  background-color: rgb(244, 244, 244);
}
</style>