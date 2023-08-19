<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Sidebar from './components/Sidebar.vue'
import Loader from './components/Loader.vue';
</script>

<template>
  <Header></Header>
  <main id="content" class="grid">
    <Sidebar></Sidebar>
    <template v-if="$store.state.isLoading">
      <Loader></Loader>
    </template>
    <template v-else>
      <router-view></router-view>
    </template>
  </main>
  <Footer></Footer>
</template>

<style scoped>
#content {
  min-height: 95vh;
  grid-template-columns: 1fr 5fr;
}
</style>
