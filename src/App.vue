<script setup>
import { RouterLink, RouterView } from 'vue-router' 
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/resume">Resume</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
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
  padding: 20px;
}

</style>