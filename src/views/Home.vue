<template>
  <div>HOME</div>
</template>

<script lang="ts">
import Vue from 'vue';
// import HelloWorld from '../components/HelloWorld.vue';

export default Vue.extend({
  name: 'Home',
  data: () => ({
    snackbar: false,
    message: '',
    vertical: true,
    show1: false,
    username: '',
    password: '',
  }),
  components: {
    // HelloWorld,
  },
});
</script>
