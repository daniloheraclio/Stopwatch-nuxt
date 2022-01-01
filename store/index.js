export const MUTATIONS_TYPES = {
  SET_IS_ACTIVE: 'SET_IS_ACTIVE',
  RESET_TIME: 'RESET_TIME',
  UPDATE_TIME: 'UPDATE_TIME',
};

export const state = () => ({
  seconds: 58,
  isActive: false,
});

export const mutations = {
  [MUTATIONS_TYPES.UPDATE_TIME](state, val) {
    state.seconds = state.seconds + val;
  },
  [MUTATIONS_TYPES.SET_IS_ACTIVE](state, isActive) {
    state.isActive = isActive;
  },
  [MUTATIONS_TYPES.RESET_TIME](state) {
    state.seconds = 0;
  },
};
