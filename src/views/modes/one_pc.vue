<template>
  <div id="genericbg" class="text-center text-white">
    <b-container class="vertical-center">
      <b-row>
        <b-col
          ><h1 class="big-text">Black Mic</h1>
          <b-button
            pill
            class="btn-big"
            :pressed.sync="ch01.mute"
            data-mode="ONE"
            v-on:click="mutech01()"
            variant="danger"
            >{{ ch01.text }}</b-button
          ></b-col
        >
        <b-col
          ><h1 class="big-text">PC</h1>
          <b-button
            pill
            class="btn-big"
            :pressed.sync="pc.mute"
            data-mode="ONE"
            v-on:click="mutepc()"
            variant="danger"
            >{{ pc.text }}</b-button
          ></b-col
        >
      </b-row>
    </b-container>
    <div id="power_button" v-on:click="power_off()">
      <div class="power_button_icon"></div>
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
      pc: {
        mute: false,
        text: "Mute PC",
      },
    };
  },
  methods: {
    async mutech01() {
      const vm = this;
      if (vm.ch01.mute) {
        await axios.put(`${vm.$parent.API_BASE_URL}/x32/ch/01/mute`);
        vm.ch01.mute = true;
        vm.ch01.text = "Unmute Mic";
      } else {
        await axios.put(`${vm.$parent.API_BASE_URL}/x32/ch/01/unmute`);
        vm.ch01.mute = false;
        vm.ch01.text = "Mute Mic";
      }
    },
    async mutepc() {
      const vm = this;
      if (vm.pc.mute) {
        await axios.put(`${vm.$parent.API_BASE_URL}/x32/auxin/05/mute`);
        vm.pc.mute = true;
        vm.pc.text = "Unmute PC";
      } else {
        await axios.put(`${vm.$parent.API_BASE_URL}/x32/auxin/05/unmute`);
        vm.pc.mute = false;
        vm.pc.text = "Mute PC";
      }
    },
    doMuteHeartbeat: function () {
      const vm = this;
      axios({
        method: "get",
        url: `${vm.$parent.API_BASE_URL}/x32/ch/01/mute`,
      })
        .then(function (response) {
          if (response.data.error) {
            console.error(response.data.message);
          }
          if (!response.data.error) {
            if (response.data.data.status == "MUTED") {
              vm.ch01.mute = true;
              vm.ch01.text = "Unmute Mic";
            } else {
              vm.ch01.mute = false;
              vm.ch01.text = "Mute Mic";
            }
          }
        })
        .catch(function (response) {
          console.error(response);
        });
      axios({
        method: "get",
        url: `${vm.$parent.API_BASE_URL}/x32/auxin/05/mute`,
      })
        .then(function (response) {
          if (response.data.error) {
            console.error(response.data.message);
          }
          if (!response.data.error) {
            if (response.data.data.status == "MUTED") {
              vm.pc.mute = true;
              vm.pc.text = "Unmute PC";
            } else {
              vm.pc.mute = false;
              vm.pc.text = "Mute PC";
            }
          }
        })
        .catch(function (response) {
          console.error(response);
        });
    },
  },
  created() {
    this.doMuteHeartbeat();
  },
  mounted: function () {
    this.$nextTick(function () {
      window.setInterval(() => {
        this.doMuteHeartbeat();
      }, 5000);
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
</style>
