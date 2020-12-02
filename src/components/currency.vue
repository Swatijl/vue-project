<template>
  <div>
    <div class="home">
      <input type="text" class="num" v-model="value" />
      <select class="select-cur" v-model="selectedFromCurrency">
        <option
          v-for="(cur, index) in currency"
          :value="cur.currency"
          :key="index"
        >
          {{ cur.name }}
        </option>
      </select>
      <p class="select-cur">To</p>
      <select class="select-cur" v-model="selectedToCurrency">
        <option
          v-for="(cur, index) in currency"
          :value="cur.currency"
          :key="index"
        >
          {{ cur.name }}
        </option>
      </select>
      <button class="next" @click="convert()">Convert</button>
    </div>
    <div class="home1">
      <p class="res">{{ result }}</p>
      <br />
      <button class="next mar">
        <router-link class="time" to="/data">Back</router-link>
      </button>
      <button class="next mar right">
        <router-link class="time" to="/home">Home</router-link>
      </button>
    </div>
  </div>
</template>
<script>
const axios = require("axios");
export default {
  name: "currency",
  data: function () {
    return {
      currency: [
        { currency: "XCD", name: "East Caribbean dollar", symbol: "$" },
        { currency: "EUR", name: "European euro", symbol: "€" },
        { currency: "GEL", name: "Georgian lari", symbol: "₾" },
        { currency: "XCD", name: "East Caribbean dollar", symbol: "$" },
        { currency: "HTG", name: "Haitian gourde", symbol: "G" },
        { currency: "INR", name: "Indian rupee", symbol: "₹" },
        { currency: "ILS", name: "Israeli new sheqel", symbol: "₪" },
        { currency: "KZT", name: "Kazakhstani tenge", symbol: "лв" },
        { currency: "KWD", name: "Kuwaiti dinar", symbol: "د.ك" },
        { currency: "LSL", name: "Lesotho loti", symbol: "L" },
        { currency: "INR", name: "Indian rupee", symbol: "₹" },
        { currency: "USD", name: "U.S. Dollar", symbol: "$" },
      ],
      selectedFromCurrency: "",
      selectedToCurrency: "",
      value: 0,
      info: "",
      result: "",
    };
  },
  methods: {
    convert: function () {
      const self = this;
      axios
        .get(
          `https://free.currconv.com/api/v7/convert?q=${self.selectedFromCurrency}_${self.selectedToCurrency}&compact=ultra&apiKey=dd8e835c3d0a875afe5e`
        )
        .then((response) => {
          this.info =
            response.data[
              this.selectedFromCurrency + "_" + this.selectedToCurrency
            ];
          var res = this.value * this.info;
          this.result = res + ' ' + this.selectedToCurrency;
          return;
        });
    },
  },
};
</script>
<style scoped>
.num {
  width: 20%;
  border: 1px solid black;
  text-align: center;
  margin: 10px;
}
.select-cur {
  background: white;
  margin: 7px;
}
.home {
  display: flex;
}
.home1 {
  transform: translate(-50%, 50%);
  left: 50%;
  top: 50%;
  position: absolute;
}
.right {
  float: right;
}
.mar {
  margin: 10px;
}
.res {
  text-align: center;
  font-size: 20px;
  font-family: monospace;
}
</style>