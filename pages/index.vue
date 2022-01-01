<template>
  <div
    class="flex flex-col lg:flex-row flex-1 lg:flex-none lg:mt-16 sm:gap-x-10 md:gap-x-15"
  >
    <button
      class="button start"
      :class="{ 'button disabled': isActive }"
      :disabled="isActive"
      @click="start"
    >
      Start
    </button>
    <button
      class="button start"
      :class="{ 'button disabled': !isActive }"
      :disabled="!isActive"
      @click="pause"
    >
      Pause
    </button>
    <button
      class="button start"
      :class="{ 'button disabled': isActive }"
      :disabled="isActive"
      @click="reset"
    >
      Reset
    </button>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import { MUTATIONS_TYPES } from '@/store/index';
export default {
  name: 'IndexPage',
  computed: {
    ...mapState(['isActive']),
  },
  methods: {
    ...mapMutations({
      setIsActive: MUTATIONS_TYPES.SET_IS_ACTIVE,
      resetTime: MUTATIONS_TYPES.RESET_TIME,
    }),
    start() {
      this.setIsActive(true);
    },
    pause() {
      this.setIsActive(false);
    },
    reset() {
      this.resetTime();
    },
  },
};
</script>
<style>
html {
  @apply bg-white dark:bg-gray-900 dark:text-gray-200;
}
</style>
