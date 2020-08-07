import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mood: 'neutral',
    speaking: false,
    uspeaking: false,
  },
  mutations: {
    SET_MOOD(state, mood) {
      state.mood = mood;
    },
    SET_SPEAKING(state, val) {
      state.speaking = val;
    },
    SET_USPEAKING(state, val) {
      state.uspeaking = val;
    },
  },
  actions: {
    setMood({ commit }, mood) {
      commit('SET_MOOD', mood);
    },
    speaking({ commit }) {
      commit('SET_SPEAKING', true);
    },
    uspeaking({ commit }) {
      commit('SET_USPEAKING', true);
    },
    stopSpeaking({ commit }) {
      commit('SET_SPEAKING', false);
    },
    stopUspeaking({ commit }) {
      commit('SET_USPEAKING', false);
    },
  },
  modules: {
  },
  getters: {
    MOOD: (state) => state.mood,
    SPEAKING: (state) => state.speaking,
    USPEAKING: (state) => state.uspeaking,
  },
});
