<script setup>
import { RouterLink, RouterView } from 'vue-router' 
import MyFooter from './components/Footer.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink class="active" to="/">Home</RouterLink>
        <RouterLink to="/about">Over mij</RouterLink>
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
}

</style>