<template>
  <div id="app">

    <b-container fluid>
  <b-row>

    <b-col>
         <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
       <router-link to="/details">Details</router-link>
    </div>
      </b-col>>
  </b-row>



     <b-row>
        <b-col  cols="2"><left-nav > </left-nav></b-col>
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
