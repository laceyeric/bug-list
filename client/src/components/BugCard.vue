<template>
  <router-link class="bug-link" :to="{ name: 'bug-detail', params: { id: '1' } }">
    <div class="bug-card -shadow">
      <span class="eyebrow">updated @{{ bug.updatedAt }}, created on {{ bug.createdAt }}</span>
      <h4 class="title">{{ bug.title }}</h4>
      <base-icon name="user">reporter: {{ bug.reportedBy }}</base-icon>
      <div>
        <base-icon name="book">{{ bug.notes ? bug.notes.length : 0 }} notes</base-icon>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      bug: {
        id: "1",
        closed: false,
        description: "The heart and soul...and details of the bug.",
        title: "Software issue",
        reportedBy: "Eric",
        createdAt: "Tues Aug 19, 2019",
        updatedAt: "6:00",
        notes: [
          {
            id: "999",
            reportedBy: "Patrick",
            content: "the guts and details of the note",
            updatedAt: "date/time 4pm"
          },
          {
            id: "888",
            reportedBy: "Hugo",
            content: "this is only a test note",
            updatedAt: "11:12pm"
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
.bug-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.bug-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.bug-card > .title {
  margin: 0;
}

.bug-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>