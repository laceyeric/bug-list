import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

let _bugApi = axios.create({
  baseURL: "//localhost:3000/api",
  timeout: 5000,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bugs: [],
    activeBug: {},
    notes: [],
    bugNotes: [], // trying to get notes to show up in api calls from the note.bug field instead of bug/id/notes
    activeNote: {}
  },
  mutations: {

    setBugs(state, data) {
      state.bugs = data;
    },

    setActiveBug(state, data) {
      state.activeBug = data;
    },

    setNotes(state, data) {
      state.notes = data;
    },
    // trying to get notes to show up in api calls from the note.bug field instead of bug/id/notes
    setBugNotes(state, data) {
      state.notes = data;
    },

    setActiveNote(state, data) {
      state.activeNote = data;
    },

  },
  actions: {

    async getBugs({ commit, dispatch }) {
      let res = await _bugApi.get("bugs");
      commit("setBugs", res.data);
    },

    async getActiveBug({ commit, dispatch }, id) {
      let res = await _bugApi.get("bugs/" + id);
      commit("setActiveBug", res.data);
    },

    async getNotes({ commit, dispatch }, bugId) {
      let res = await _bugApi.get("/bugs/" + bugId + "/notes");
      commit("setNotes", res.data);
    },
    // trying to get notes to show up in api calls from the note.bug field instead of bug/id/notes
    async getNotesForBug({ commit, dispatch }, bugId) {
      let res = await _bugApi.get("notes/" + bugId);
      commit("setBugNotes", res.data);
    },

    async getActiveNote({ commit, dispatch }, id) {
      let res = await _bugApi.get("notes/" + id);
      commit("setActiveNote", res.data);
    }
  },
  modules: {
  },
});
