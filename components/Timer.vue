<template>
  <section
    class="flex justify-center items-center mt-8 lg:mt-14 text-9xl text-title font-rajdhani"
  >
    <p>{{ time }}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      time: '00:00',
    };
  },
  methods: {
    handleTimer() {},
  },
};
</script>
