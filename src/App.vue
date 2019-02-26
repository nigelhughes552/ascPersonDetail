<template>
  <div id="app">

    <b-container fluid>
  <b-row>
    <b-col>
      
      </b-col>
  </b-row>
     <b-row>
        <b-col  cols="2">
          <left-nav > </left-nav>
          </b-col>
        <b-col>   <router-view /></b-col>
    </b-row>
</b-container>

  </div>
</template>

<script>
// @ is an alias to /src
import LeftNav from "@/components/LeftNav.vue";

export default {
  name: "home",
  components: {
    LeftNav
  }
};
</script>

<style lang="scss">
</style>
