import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mood: 'neutral',
    speaking: false,
  },
  mutations: {
    SET_MOOD(state, mood) {
      state.mood = mood;
    },
  },
  actions: {
    setMood({ commit }, mood) {
      commit('SET_MOOD', mood);
    },
  },
  modules: {
  },
  getters: {
    MOOD: (state) => state.mood,
    SPEAKING: (state) => state.speaking,
  },
});
