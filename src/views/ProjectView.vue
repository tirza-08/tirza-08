<template>
    <section>
        <h1>Project View</h1>
        <p>Project ID: {{ $route.params.projectId }}</p>
    </section>
</template>

<style scoped>
section {
    min-height: var(--min-section-height);
}
</style>