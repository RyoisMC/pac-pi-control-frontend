<template>
  <div id="sleepingbg" v-on:click="wakeUp()" class="text-center"></div>
</template>
<script>
export default {
  name: "sleep",
  methods: {
    wakeUp() {
      this.$router.push({
        name: "Home",
      });
    },
  },
};
</script>
