<template>
  <div class="home">
    <div class="container mt-5">
      <h1>quiz app</h1>
      <router-link class="btn btn-primary mt-4" to="/question">
        start quiz
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style lang="scss">
.home {
  color: #454546;
  text-transform: capitalize;
  text-align: center;
}
</style>
