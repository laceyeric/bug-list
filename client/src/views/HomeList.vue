<template>
  <div>
    <div class="row">
      <div class="col p-3">
        <h3>Reported Bugs</h3>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <BugCard v-for="bug in bugs" :bug="bug" :key="bug.id" />
        <BaseIcon />
      </div>
    </div>
  </div>
</template>

<script>
import BugCard from "../components/BugCard.vue";
import axios from "axios";

export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getBugs");
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
  },
  components: {
    BugCard
  }
};
</script>

<style>
</style>