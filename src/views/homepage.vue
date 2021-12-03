<template>
  <div id="welcomebg" class="text-center">
    <b-container class="vertical-center">
      <b-row>
        <b-col><b-button pill class="btn-circle" data-mode="ONE" v-on:click="power_on('ONE')" variant="primary">One Mic</b-button></b-col>
        <b-col><b-button pill class="btn-circle" data-mode="ONE_PC" v-on:click="power_on('ONE_PC')" variant="primary">One Mic + PC</b-button></b-col>
        <b-col><b-button pill class="btn-circle" data-mode="FOUR_PC" v-on:click="power_on('FOUR_PC')" variant="primary">Up to Four Mics + PC</b-button></b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "homepage",
    methods: {
    power_on(mode) {
      const props = { "mode": mode};
        this.$router.push({
          name: "PowerOn",
          params: { props },
      });
    }
  }
};
</script>
<style scoped>
.vertical-center {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, 30%);
  transform: translate(-50%, 30%);
}
.btn-circle {
  width: 250px;
  height: 250px;
  padding: 10px 16px;
  border-radius: 35px;
  font-size: 48px;
  text-align: center;
}
</style>