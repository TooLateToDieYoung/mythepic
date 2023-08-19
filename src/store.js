import { createStore } from 'vuex';

export default createStore({
  state: {
    isLoading: true
  },
  mutations: {
    switchLoaderState(state) {
      state.isLoading = !state.isLoading;
    }
  },
  actions: {},
  modules: {},
});