<template>
  <div class="home">
    <button class="next min" @click="decrement()">-</button>
    <input type="text" class="num" v-model="num" />
    <button class="next min" @click="increment()">+</button><br />
    <button class="next mar">
      <router-link class="time" to="/time">Next</router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function () {
    return {
      num: 0,
    };
  },
  methods: {
    decrement() {
      return this.num--;
    },
    increment() {
      return this.num++;
    },
  },
};
</script>

<style>
.home {
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  position: absolute;
}
.next {
  background-color: cornflowerblue;
  border: none;
  padding: 10px;
  width: 120px;
  border-radius: 14px;
  cursor: pointer;
}
.time {
  text-decoration: none;
  color: white;
  text-transform: uppercase;
}
.min {
  width: 20%;
  color: white;
}
.num {
  width: 20%;
  margin: 10px;
  border: 1px solid;
  text-align: center;
}
.mar {
  margin: 10px;
}
</style>
