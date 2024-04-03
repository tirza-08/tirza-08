<script>
import { RouterLink, RouterView } from 'vue-router'
import MyFooter from './components/Footer.vue'

export default {
  components: {
    RouterLink,
    MyFooter
  },
  methods: {
    isActiveRoute(routeName) {
      return this.$route.name === routeName;
    }
  }
};
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink :class="{ 'active': isActiveRoute('home')}"
          to="/">
          Home</RouterLink>
        <RouterLink :class="{ 'active': isActiveRoute('projecten') || isActiveRoute('project') }"
          to="/projecten">Projecten</RouterLink>
        <RouterLink :class="{ 'active': isActiveRoute('over-mij')}" to="/over-mij">Over mij</RouterLink>
        <RouterLink to="/resume">CV</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
  <MyFooter />
</template>

<style scoped>
header .wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 50px;
  background-color: #EBE5E2;
}

nav a {
  padding: 15px 55px;
  margin: 10px 10px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 50px;
}

.active {
  background-color: var(--orange);
  color: var(--white);
  transition: background-color 0.5s ease-in-out;
}

@media (max-width: 1000px) {
  nav a {
    font-size: 12px;
    padding: 10px 45px;
  }
}
</style>