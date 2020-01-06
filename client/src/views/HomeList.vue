<template>
  <div>
    <h1>This is the Home List view</h1>
    <BugCard />
    <BaseIcon />
  </div>
</template>

<script>
import BugCard from "@/components/BugCard.vue";
import axios from "axios";

export default {
  components: {
    BugCard
  }
};
</script>

<style>
</style>