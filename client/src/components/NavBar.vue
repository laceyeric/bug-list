<template>
  <div id="nav">
    <!--SECTION NAVBAR Image and text -->
    <nav class="navbar row d-flex-inline">
      <a class="navbar-brand text-light col-4" href="/">
        <!-- i believe this does the same as commented routerlink line below-->
        <img src="@/assets/bug_logo_xs.jpg" width="30" height="30" class alt />
        Bug Tracker
      </a>
      <div class="col-4">
        <router-link :to="{ name: 'home' }">Home</router-link>|
        <!-- TODO add functionality to button to create a new bug entry -->
        <router-link :to="{ name: 'bug-create' }">
          <button>Report Bug</button>
        </router-link>
      </div>
    </nav>
  </div>
  <!-- <router-link to="/" class="brand">BugTracker</router-link> -->
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
}
.nav > .brand {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
</style>