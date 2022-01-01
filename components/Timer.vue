<template>
  <section
    class="flex justify-center items-center mt-8 lg:mt-14 text-9xl text-title font-rajdhani"
  >
    <p>{{ seconds }}</p>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { MUTATIONS_TYPES } from '@/store/index';

let TIMER_REF;

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['seconds', 'isActive']),
  },

  methods: {
    ...mapMutations({
      updateTime: MUTATIONS_TYPES.UPDATE_TIME,
    }),
    runTimer(status) {
      if (this.isActive && status) {
        TIMER_REF = setInterval(() => {
          this.updateTime(1);
        }, 1000);
      } else {
        clearInterval(TIMER_REF);
      }
    },
  },
  watch: {
    isActive(status) {
      this.runTimer(status);
    },
  },
};
</script>
