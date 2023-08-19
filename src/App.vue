<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <Header></Header>
  <main id="content">
    <Sidebar></Sidebar>
    <router-view></router-view>
  </main>
  <Footer></Footer>
</template>

<style scoped>
#content {
  min-height: 95vh;
}
</style>
