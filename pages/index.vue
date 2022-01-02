<template>
  <div
    class="flex flex-col lg:flex-row flex-1 lg:flex-none lg:mt-16 sm:gap-x-10 md:gap-x-15"
  >
    <button
      v-if="!isActive"
      class="button start"
      :class="{ 'button disabled': isActive }"
      :disabled="isActive"
      @click="start"
    >
      Start
    </button>
    <button
      v-if="isActive"
      class="button completed"
      :class="{ 'button disabled': !isActive }"
      :disabled="!isActive"
      @click="pause"
    >
      Pause
    </button>
    <button
      v-if="!isActive"
      class="button abandon"
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
  data() {
    return {
      isSuported: false,
      screenLock: null,
    };
  },
  mounted() {
    this.isSuported = this.isScreenLockSupported();
  },
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
    isScreenLockSupported() {
      return 'wakeLock' in window.navigator;
    },
    async getScreenLock() {
      if (this.isSuported) {
        let screenLock;
        try {
          screenLock = await window.navigator.wakeLock.request('screen');
        } catch (err) {
          throw new Error(err.name, err.message);
        }
        this.screenLock = screenLock;
      }
    },
    release() {
      this.screenLock.release().then(() => {
        // Lock released 🎈
        this.screenLock = null;
      });
    },
  },
  watch: {
    isActive(status) {
      if (status) {
        this.getScreenLock();
      } else {
        this.release();
      }
    },
  },
};
</script>
<style>
html {
  @apply bg-white dark:bg-gray-900 dark:text-gray-200;
}
</style>
