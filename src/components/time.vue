<template>
  <div class="home">
    <h1 class="date">{{ datenow }}</h1>
    <button class="next">
      <router-link class="time" to="/home">Back</router-link>
    </button>
    <button class="next right">
      <router-link class="time" to="/data">Next</router-link>
    </button>
  </div>
</template>
<script>
import moment from "moment";
export default {
  name: "Time",
  data: function () {
    return {
      datenow: "",
    };
  },
  methods: {
    getTime() {
      this.datenow = moment().format("h:mm:ss a");
    },
  },
  mounted: function () {
    this.interval = setInterval(this.getTime, 1000);
  },
};
</script>
<style scoped>
.date {
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
  letter-spacing: 0.05em;
  font-size: 50px;
  padding: 20px;
  font-family: "Share Tech Mono", monospace;
  color: #ffffff;
  background: #0f3854;
  background: radial-gradient(ellipse at center, #0a2e38 0%, #000000 70%);
  background-size: 100%;
  text-align: center;
}
.right{
    float:right
}
</style>