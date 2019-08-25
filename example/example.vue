<template>
  <div id="app">
      <select v-model="mode">
          <option>primary</option>
          <option>success</option>
          <option>info</option>
          <option>warn</option>
          <option>error</option>
      </select>
    <input type="text" v-model="text" />
    <button @click="showpopup">show popup</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class App extends Vue {
  text: string = "test";
  mode: string = "primary"
  showpopup() {
    this.$poppuappu.show(this.text, {
        mode: this.mode
    });
  }
}
</script>
<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
