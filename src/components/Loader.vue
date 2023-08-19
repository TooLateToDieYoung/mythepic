<template>
  <section id="loader">
    <div class="square">
      <span style="--i: 0;"></span>
      <span style="--i: 1;"></span>
      <span style="--i: 2;"></span>
      <span style="--i: 3;"></span>
      <span style="--i: 4;"></span>
      <span style="--i: 5;"></span>
      <span style="--i: 6;"></span>
      <span style="--i: 7;"></span>
      <span style="--i: 8;"></span>
      <span style="--i: 9;"></span>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#loader {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: rgb(0, 0, 36);
  animation: a-background-color 20s linear infinite;
}

@keyframes a-background-color {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}

#loader .square {
  position: relative;
  width: 120px;
  height: 120px;
}

#loader .square span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(calc(36deg * var(--i)));
}

#loader .square span::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: aqua;
  box-shadow: 0 0 10px aquamarine,
              0 0 25px aquamarine,
              0 0 40px aquamarine,
              0 0 55px aquamarine,
              0 0 70px aquamarine,
              0 0 85px aquamarine;
  animation: a-scale 2s linear infinite;
  animation-delay: calc(0.2s * var(--i));
}

@keyframes a-scale {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
</style>