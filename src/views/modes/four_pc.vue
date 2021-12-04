<template>
  <div id="genericbg" class="text-center text-white">
    <b-container class="vertical-center">
      <b-row>
        <b-col><h1 class="big-text">Black</h1><b-button pill class="btn-big" :pressed.sync="ch01.mute" data-mode="ONE" v-on:click="mutech01()" variant="danger">{{ch01.text}}</b-button></b-col>
        <b-col><h1 class="big-text">Blue</h1><b-button pill class="btn-big" :pressed.sync="ch02.mute" data-mode="ONE" v-on:click="mutech02()" variant="danger">{{ch02.text}}</b-button></b-col>
        <b-col><h1 class="big-text">Red</h1><b-button pill class="btn-big" :pressed.sync="ch03.mute" data-mode="ONE" v-on:click="mutech03()" variant="danger">{{ch03.text}}</b-button></b-col>
        <b-col><h1 class="big-text">Green</h1><b-button pill class="btn-big" :pressed.sync="ch04.mute" data-mode="ONE" v-on:click="mutech04()" variant="danger">{{ch04.text}}</b-button></b-col>
        <b-col><h1 class="big-text">PC</h1><b-button pill class="btn-big" :pressed.sync="pc.mute" data-mode="ONE" v-on:click="mutepc()" variant="danger">{{pc.text}}</b-button></b-col>
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
    ch02: {
      mute: false,
      text: "Mute Mic",
    },
    ch03: {
      mute: false,
      text: "Mute Mic",
    },
    ch04: {
      mute: false,
      text: "Mute Mic",
    },
    pc: {
      mute: false,
      text: "Mute PC",
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
  async mutech02() {
    const vm = this;
    if(vm.ch02.mute){
      await axios.put(`${vm.$parent.API_BASE_URL}/x32/ch/02/mute`);
      vm.ch02.mute = true;
      vm.ch02.text = "Unmute Mic";
    }else{
      await axios.put(`${vm.$parent.API_BASE_URL}/x32/ch/02/unmute`);
      vm.ch02.mute = false;
      vm.ch02.text = "Mute Mic";
    }
  },
  async mutech03() {
    const vm = this;
    if(vm.ch03.mute){
      await axios.put(`${vm.$parent.API_BASE_URL}/x32/ch/03/mute`);
      vm.ch03.mute = true;
      vm.ch03.text = "Unmute Mic";
    }else{
      await axios.put(`${vm.$parent.API_BASE_URL}/x32/ch/03/unmute`);
      vm.ch03.mute = false;
      vm.ch03.text = "Mute Mic";
    }
  },
  async mutech04() {
    const vm = this;
    if(vm.ch04.mute){
      await axios.put(`${vm.$parent.API_BASE_URL}/x32/ch/04/mute`);
      vm.ch04.mute = true;
      vm.ch04.text = "Unmute Mic";
    }else{
      await axios.put(`${vm.$parent.API_BASE_URL}/x32/ch/04/unmute`);
      vm.ch04.mute = false;
      vm.ch04.text = "Mute Mic";
    }
  },
  async mutepc() {
    const vm = this;
    if(vm.pc.mute){
      await axios.put(`${vm.$parent.API_BASE_URL}/x32/auxin/05/mute`);
      vm.pc.mute = true;
      vm.pc.text = "Unmute PC";
    }else{
      await axios.put(`${vm.$parent.API_BASE_URL}/x32/auxin/05/unmute`);
      vm.pc.mute = false;
      vm.pc.text = "Mute PC";
    }
  },
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
    font-size: 64px;
}
.btn-big {
  width: 200px;
  height: 80px;
  padding: 10px 16px;
  border-radius: 35px;
  font-size: 30px;
  text-align: center;
}
#power_button{
    right:    10px;
    bottom:   10px;
    height: 80px;
    width: 80px;
}
.power_button_icon{
    height: 80px;
    width: 80px;
    background-size: 80px 80px;
}
</style>