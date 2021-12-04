<template>
  <div id="welcomebg" class="text-center">
    <b-container class="vertical-center">
      <b-row>
        <b-col><b-button pill class="btn-circle" data-mode="ONE" v-on:click="power_on('ONE')" variant="primary">One Mic</b-button></b-col>
        <b-col><b-button pill class="btn-circle" data-mode="ONE_PC" v-on:click="power_on('ONE_PC')" variant="primary">Mic + PC</b-button></b-col>
        <b-col><b-button pill class="btn-circle" data-mode="FOUR_PC" v-on:click="power_on('FOUR_PC')" variant="primary">4 Mics + PC</b-button></b-col>
      </b-row>
      <b-row class="full-padding">
        <b-col><b-button pill class="btn-full-control" data-mode="FULL" v-on:click="power_on('FULL')" variant="warning">Full Control</b-button></b-col>
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
  -webkit-transform: translate(-50%, -10%);
  transform: translate(-50%, -10%);
}
.btn-circle {
  width: 20vw;
  height: 20vh;
  padding: 10px 16px;
  border-radius: 35px;
  font-size: 1.6em;
  text-align: center;
}
.full-padding{
  padding-top: 2em;
}
.btn-full-control{
  width: 24vw;
  height: 16vh;
  padding: 10px 16px;
  border-radius: 35px;
  font-size: 1.5rem;
  text-align: center;
}
</style>