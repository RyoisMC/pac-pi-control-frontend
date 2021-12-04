<template>
  <div></div>
</template>
<script>
import axios from "axios";
export default {
  name: "heartbeat",
  methods: {
    doHeartbeat: function () {
      const vm = this.$parent;
      axios({
        method: "get",
        url: `${this.$parent.API_BASE_URL}/control/status`,
      })
        .then(function (response) {
          if (response.data.error) {
            console.error(response.data.message);
          }
          if (!response.data.error) {
            if (response.data.data.power == "OFF") {
              vm.POWER_STATUS = response.data.data.power;
              vm.MODE_STATUS = "OFF";
              const PROTECTED_PAGES = ["PowerOff", "PowerOn", "Home", "Sleep"];
              if (PROTECTED_PAGES.includes(vm.$route.name)) {
                console.log("on protected pages, not redirecting");
              } else {
                vm.$router.push({
                  name: `Home`,
                });
              }
            } else if (response.data.data.power == "ON") {
              vm.POWER_STATUS = response.data.data.power;
              vm.MODE_STATUS = response.data.data.mode;
              const PROTECTED_PAGES = ["PowerOff", "PowerOn"];
              if (PROTECTED_PAGES.includes(vm.$route.name)) {
                console.log("on protected pages, not redirecting");
              } else {
                if (
                  `mode_${response.data.data.mode.toLowerCase()}` !=
                  vm.$route.name
                ) {
                  vm.$router.push({
                    name: `mode_${response.data.data.mode.toLowerCase()}`,
                  });
                }
              }
            }
            return;
          }
        })
        .catch(function (response) {
          console.error(response);
        });
    },
  },
  created() {
    this.doHeartbeat();
  },
  mounted: function () {
    this.$nextTick(function () {
      window.setInterval(() => {
        this.doHeartbeat();
      }, 5000);
    });
  },
};
</script>
