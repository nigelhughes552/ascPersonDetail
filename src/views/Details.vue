<template>
    <div>
        <b-card>
            <b-card-body>Details</b-card-body>
            </b-card>
    </div>
</template>

<script>
import axios from "axios";

import NProgress from "nprogress";
export default {
  created() {
    NProgress.start();
    axios
      .get("http://localhost:61511/api/admin/getresearchtopics")
      .then(response => {
        console.log(response);
        //this.categories = response.data;
        NProgress.done();
      })
      .catch(e => {
        //console.error(e);
      });
  },
  methods: {}
};
</script>

<style>
</style>
