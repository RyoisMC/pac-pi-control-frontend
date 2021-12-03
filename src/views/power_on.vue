<template>
  <div id="genericbg" class="text-center">
    <b-container class="vertical-center">
        <div class="text-white padding-below"><h1 class="big-text">The System is Powering On</h1></div>
        <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "power_on",
  mounted() {
      const vm = this;
      const mode = vm.$attrs.props.mode;
      setTimeout(() => {
        vm.$router.push({
          name: `mode_${mode.toLowerCase()}`,
        });
      }, 3000);
  }
};
</script>
<style scoped>
.vertical-center {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.btn-circle {
  width: 250px;
  height: 250px;
  padding: 10px 16px;
  border-radius: 35px;
  font-size: 48px;
  text-align: center;
}
.padding-below{
  padding-bottom: 25px;
}
</style>