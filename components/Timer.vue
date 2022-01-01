<template>
  <section
    class="flex justify-center items-center mt-8 lg:mt-14 text-9xl text-title font-jetbrains"
  >
    <p>{{ timeFormatted(minutes) }}:{{ timeFormatted(seconds) }}</p>
  </section>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import { MUTATIONS_TYPES } from '@/store/index';

let TIMER_REF;

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['seconds', 'isActive']),
    ...mapGetters(['seconds', 'minutes']),
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
    timeFormatted(time) {
      return `${time}`.padStart(2, '0');
    },
  },
  watch: {
    isActive(status) {
      this.runTimer(status);
    },
  },
};
</script>
