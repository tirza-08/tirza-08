<script>
import LittleStar from './icons/IconLittleStar.vue'
import { RouterLink, RouterView } from 'vue-router'

import projects from '@/data/projects.json';


export default {
    components: {
        LittleStar
    },
    data() {
        return {
            projects: projects,
        };
    }
};
</script>

<template>
    <div id="projects-background">
        <section id="projects">
            <div class="star-header" style="margin-bottom: 2rem;">
                <h3>Recente projecten</h3>
                <LittleStar />
            </div>
            <div class="project-container">
                <div v-for="project in projects" :key="project.id">
                    <RouterLink :to=project.slug>
                        <img :src="project.hoofdfoto" alt="foto project">
                    </RouterLink>
                    <p><b>{{ project.type }}</b> - {{ project.name }}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
#projects {
    min-height: var(--min-section-height);
}

#projects-background {
    background-color: var(--dark-blue);
}

.project-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 4rem;
    width: 100%;
    color: white;
}

.project-container div {
    width: 45%;
}


@media (max-width: 750px) {
    .project-container {
        gap: 2rem;
    }
}

@media (max-width: 650px) {
    .project-container {
        flex-direction: column;
    }

    .project-container div {
        width: 100%
    }
}
</style>
