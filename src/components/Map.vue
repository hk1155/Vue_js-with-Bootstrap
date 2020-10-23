<template>
  <div>
      <Navbar/>
    <h4>Current Coordinates</h4>
    <p>{{ startLocation.lat }} Latitude, {{ startLocation.lng }} Longtitude</p>
    <hr />
    <h4>Map Coordinates</h4>
    <p>{{ mapdata.lat }} Latitude, {{ mapdata.lng }} Longtitude</p>
    <hr />
    <input
      type="number"
      v-model="txtlat"
      @keypress="fnset()"
      placeholder="Enter Latitude"
    />&nbsp;&nbsp;
    <input
      type="number"
      v-model="txtlng"
      @keypress="fnset()"
      placeholder="Longitude"
    />&nbsp;
    <button @click="removemark()" class="btn btn-danger" v-if="showremove">
      Remove Mark
    </button>
    <hr />
    <center>
      <GmapMap
        :center="Mydata"
        :zoom="2"
        map-type-id="terrain"
        style="width: 900px; height: 400px"
        ref="mapRef"
      >
        <GmapMarker
          v-for="(item, key) in coordinates2"
          :key="key"
          :position="(center = getPosition(item))"
          :clickable="true"
          :draggable="false"
        />
      </GmapMap>
    </center>
  </div>
</template>

<script>
// import Navbar from './Navbar'
export default {
  name: "Map",
  components: {
    // Navbar,
  },
  data() {
    return {
      showremove: false,
      map: null,
      txtlat: null,
      txtlng: null,
      coordinates: {
        lat: 0,
        lng: 0,
      },

      coordinates2: [
        //set the mark coordinates setup here
        {
          lat: Number,
          lng: Number,
        },
      ],

      startLocation: {
        lat: null,
        lng: null,
      },
    };
  },
  created() {
    this.$getLocation({})
      .then((data) => {
        this.startLocation = data;
      })
      .catch((error) => alert(error));
  },
  mounted() {
    this.$refs.mapRef.$mapPromise.then((map) => (this.map = map));
  },
  computed: {
    mapdata() {
      if (!this.map) {
        return {
          lat: 0,
          lon: 0,
        };
      }
      return {
        lat: this.map.getCenter().lat(),
        lng: this.map.getCenter().lng(),
      };
    },

    Mydata() {
      if (this.txtlat == null && this.txtlng == null) {
        return {
          //lat: 10,
          //lng: 20,
          lat: this.startLocation.lat,
          lng: this.startLocation.lng,
        };
      }
      return {
        lat: this.txtlat,
        lng: this.txtlng,
      };
    },
  },
  methods: {
    getPosition: function (marker) {
      return {
        lat: parseFloat(marker.lat),
        lng: parseFloat(marker.lng),
      };
    },
    fnset: function () {
      if (this.txtlat != null && this.txtlng != null) {
        this.showremove = true;
        this.showlivemap = true;
      }

      this.coordinates2.pop({
        lat: null,
        lng: null,
      });

      this.coordinates2.push({
        lat: this.txtlat,
        lng: this.txtlng,
      });
    },
    removemark: function () {
      this.showremove = false;
      this.txtlat = null;
      this.txtlng = null;
      this.coordinates2.pop({
        lat: null,
        lng: null,
      });
    },
  },
};
</script>