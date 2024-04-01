<script>
import LittleStar from './icons/IconLittleStar.vue'
import { RouterLink, RouterView } from 'vue-router'

import projects from '@/data/projects.json';


export default {
    data() {
        return {
            projects: projects
        };
    }
};
</script>

<template>
    <div id="projects-background">
        <section id="projects">
            <h3>Recente projecten</h3>
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
    justify-content: space-around;
    gap: 30px;
    width: 100%;
    color: white;
}

.project-container div {
    width: 40%;
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
