<script setup>
import Star from './icons/IconStar.vue'
</script>

<template>
  <section id="welcome">
    <div>
      <Star />
    </div>
    <div>
      <h1>Hi, ik be<span class="italic">n Tirza</span></h1>
      <p>Communication & Multimedia Design student aspiring to become a front-end developer.</p>
    </div>
  </section>
</template>

<style scoped>
  #welcome {
    display: flex;
    min-height: var(--min-section-height);
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
</style>