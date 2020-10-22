<template>
  <div>
    <Navbar/>
    <h5>IT's a Helloworld Page</h5>
    <b-alert show dismissible>Default Alert</b-alert>

    <b-alert variant="success" show>Success Alert</b-alert>

     <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
      Dismissible Alert!
    </b-alert>

    

    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
      <b-progress
        variant="warning"
        :max="dismissSecs"
        :value="this.dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>

    <b-button @click="showAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </b-button>
    <b-button @click="showDismissibleAlert = true" variant="info" class="m-1">
      Show dismissible alert ({{ showDismissibleAlert ? "visible" : "hidden" }})
    </b-button>
  </div>
</template>

<script>
import Navbar from './Navbar'
export default {
  name: "HelloWorld",
  components:{
    Navbar
  },
  props: {
    msg: String,
  },
  data()
  {
    return{
      showDismissibleAlert:false,
      dismissSecs:8,
      dismissCountDown:0
    }
  },
  
  methods: {
    fncheck() {
      alert("ok");
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
