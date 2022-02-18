import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [],
    showForm: false,
  },
  plugins: [createPersistedState()],
  mutations: {
    addCard(state, word) {
      state.cards.push(word);
    },
    deleteCard(state, index) {
      state.cards.splice(index, 1);
    },
    changeShowForm(state) {
      state.showForm = !state.showForm;
    },
  },
});

