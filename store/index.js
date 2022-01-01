export const MUTATIONS_TYPES = {
  SET_IS_ACTIVE: 'SET_IS_ACTIVE',
  RESET_TIME: 'RESSET_TIME',
};

export const state = () => ({
  timer: '00:00',
  isActive: false,
});

export const mutations = {
  [MUTATIONS_TYPES.SET_IS_ACTIVE](state, isActive) {
    state.isActive = isActive;
  },
};
