<template>
  <div>
    <Navbar />
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Add Record">
          <b-card-text>Add Record</b-card-text>
        </b-tab>

        <b-tab title="View API DATA" active>
          <b-card-text
            ><b-button @click="fncheck()" variant="info">{{
              showtable ? "Hide Record" : "Show Record"
            }}</b-button>
            <hr v-if="showtable" />
            <table class="table table-striped" v-if="showtable">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>username</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="mydata in apidata" :key="mydata.id">
                  <td>{{ mydata.id }}</td>
                  <td>{{ mydata.name }}</td>
                  <td>{{ mydata.username }}</td>
                  <td>{{ mydata.email }}</td>
                </tr>
              </tbody>
            </table>
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>
<script>
import Navbar from "./Navbar";

export default {
  name: "Viewdata",
  components: {
    Navbar,
  },
  data() {
    return {
      showtable: false,
      apidata: [],
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => (this.apidata = data));
  },
  methods: {
    fncheck() {
      this.showtable = !this.showtable;
    },
  },
};
</script>