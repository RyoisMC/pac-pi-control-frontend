<template>
  <div id="genericbg" class="text-center">
    <b-container class="vertical-center">
      <div class="text-white padding-below">
        <h1 class="big-text">The System is Powering On</h1>
      </div>
      <div class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </b-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "power_on",
  async mounted() {
    const vm = this;
    const mode = vm.$attrs.props.mode;
    axios
      .post(`${vm.$parent.API_BASE_URL}/control/power`, { action: "ON" })
      .then(function (response) {
        vm.$parent.$toast.success(response.data.data.message, {
          position: "top-right",
        });
        setTimeout(() => {
          axios
            .post(`${vm.$parent.API_BASE_URL}/control/mode`, { mode: mode })
            .then(function (response) {
              vm.$parent.$toast.success(response.data.data.message, {
                position: "top-right",
              });
              setTimeout(() => {
                vm.$router.push({
                  name: `mode_${mode.toLowerCase()}`,
                });
              }, 3000);
            })
            .catch(function (error) {
              if (error.response) {
                vm.$parent.$toast.success(error.response.data, {
                  position: "top-right",
                });
              }
            });
        }, 10000);
      })
      .catch(function (error) {
        console.log(error);
        if (error.response) {
          vm.$parent.$toast.success(error.response.data, {
            position: "top-right",
          });
        }
      });
  },
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
.padding-below {
  padding-bottom: 25px;
}
</style>
