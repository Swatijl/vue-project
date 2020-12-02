<template>
  <div class="marg">
    <button class="next">
      <router-link class="time" to="/time">Back</router-link>
    </button>
    <button class="next right">
      <router-link class="time" to="/currency">Next</router-link>
    </button>
    <div class="grid-row" v-if="info">
      <div class="card" v-for="(data, index) in info" :key="index">
        <p>{{ data.first }} {{ data.last }}</p>
      </div>
    </div>
    <div v-else class="home">
      <p>loading...</p>
    </div>
  </div>
</template>
<script>
const axios = require("axios");
export default {
  name: "data",
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    axios
      .get(
        "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
      )
      .then((response) => (this.info = response.data));
  },
};
</script>
<style scoped>
.card {
  border: 1px solid black;
  background: #0f3854;
  color: white;
  padding: 30px;
  text-align: center;
  margin: 10px;
  border-radius: 20px;
}
.grid-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap:1rem;
}
.right{
  float: right;
}
.marg{
  margin:10px;
}
</style>