<template>
  <div id="genericbg" class="text-center">
    <b-container class="vertical-center">
        <div class="text-white"><h1 class="big-text">The System is in Full Control Mode</h1></div>
    </b-container>
    <div id="power_button" v-on:click="power_off()">
        <div class="power_button_icon">
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "power_on",
  methods: {
    power_off() {
    const vm = this;
    this.$parent.$swal
      .fire({
          title: `Shutdown System?`,
          html:
            "<p>Are you sure you want to shutdown the sound system?",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#dc3545",
          confirmButtonText: "Shutdown",
        })
        .then(async function (result) {
          if (result.isConfirmed) {
            vm.$router.push({
              name: "PowerOff",
          });
          }
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
.big-text{
    font-size: 2rem;
}
</style>