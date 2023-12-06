
<template>
  <div class="Container_Box">
    <popularproduct />
  </div>
</template>

<script>
import popularproduct from "./views/popularproduct.vue";
import Menu from "./components/Menu.vue";
import Popularproduct from './views/popularproduct.vue';
export default {
  name: "App",
  components: {
    popularproduct,
    Menu,
    Popularproduct,
  },
};
</script>

<style>
@import "https://unicons.iconscout.com/release/v4.0.0/css/line.css";
.Container_Box {
  margin: auto;
  width: 98vw;
}
</style>
