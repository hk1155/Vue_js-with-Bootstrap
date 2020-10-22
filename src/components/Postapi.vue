<template>
  <div>
    <Navbar />
    <h3>Post APi</h3>

    <form @submit="InsertData" method="POST">
      <input type="text" v-model="post.fname" placeholder="Enter First Name" />
      <input type="text" v-model="post.lname" placeholder="Enter Last Name" />

      <button type="submit">Add</button>
    </form>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
//import VueAxios from "vue-axios";
//Vue.use(Vueaxios);
Vue.use(axios);

import Navbar from "./Navbar";
export default {
  name: "Postapi",
  components: {
    Navbar,
  },
  data() {
    return {
      post: {
        fname: null,
        lname: null,
      },
    };
  },
  methods: {
    InsertData(e) {
      e.preventDefault();
      this.axios.post('http://localhost:8080/#/postapi',this.post)
      .then((result)=>{

          console.log('result',result);
      });
    
    },
  },
};
</script>