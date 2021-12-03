<template>
  <div id="genericbg" class="text-center text-white">
    <b-container class="vertical-center">
      <b-row>
        <b-col><h1 class="big-text">Black Handheld Mic</h1><b-button pill class="btn-big" :pressed.sync="ch01.mute" data-mode="ONE" v-on:click="mutech01()" variant="danger">{{ch01.text}}</b-button></b-col>
      </b-row>
    </b-container>
    <div id="power_button" v-on:click="power_off()">
        <div class="power_button_icon">
        </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
name: "one",
data() {
  return {
    ch01: {
      mute: false,
      text: "Mute Mic",
    },
  }
},
methods: {
  async mutech01() {
    const vm = this;
    if(vm.ch01.mute){
      await axios.put(`${vm.$parent.API_BASE_URL}/x32/ch/01/mute`);
      vm.ch01.mute = true;
      vm.ch01.text = "Unmute Mic";
    }else{
      await axios.put(`${vm.$parent.API_BASE_URL}/x32/ch/01/unmute`);
      vm.ch01.mute = false;
      vm.ch01.text = "Mute Mic";
    }
  },
  power_off() {
    const vm = this;
    this.$parent.$swal
      .fire({
          title: `Shutdown System?`,
          html:
            "<p>Are you sure you want to shutdown the audio system?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#dc3545",
          confirmButtonText: "Shutdown",
          reverseButtons: true,
        })
        .then(async function (result) {
          if (result.isConfirmed) {
            vm.$router.push({
              name: "PowerOff",
          });
          }
        });
    }
  },
}
</script>
<style scoped>
.vertical-center {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.big-text {
    font-size: 72px;
}
.btn-big {
  width: 200px;
  height: 80px;
  padding: 10px 16px;
  border-radius: 35px;
  font-size: 30px;
  text-align: center;
}
</style>