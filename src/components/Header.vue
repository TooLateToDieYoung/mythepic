<template>
  <header id="header" class="grid">
    <h1>Header</h1>
    <button name="switch" type="button" @click="$store.commit('switchLoaderState')">Switch Loader</button>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
#header {
  padding: 10px;
  text-align: center;
  color: var(--white);
  background-color: var(--black);
  width: 100%;
  grid-template-columns: 4fr 1fr;
}

h1 {
  margin: 0;
  padding: 0;
}

button {
  padding: 0;
}
</style>