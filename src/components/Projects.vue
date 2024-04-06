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
                <div v-for="project in projects" :key="project.id" class="project">
                    <!-- <div class="overlay"> -->
                    <div class="image-container" style="position: relative;">
                        <RouterLink :to=project.slug>
                            <div class="overlay">
                                <h2 class="text">Ontdek meer &rarr;</h2>
                            </div>
                            <img :src="project.hoofdfoto" alt="foto project">
                        </RouterLink>
                    </div>
                    <p><b>{{ project.type }}</b> - {{ project.name }}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
#projects-background {
    background-color: var(--dark-blue);
    color: var(--white);
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--white-soft);
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.3s ease;
}
.overlay h2 {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    transition: opacity 0.3s ease;
}
.overlay h2:hover {
    text-decoration: underline var(--orange);
}

.overlay:hover {
    opacity: 1;
}

.project-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 3rem;
    width: 100%;
    color: white;
}

.image-container {
    margin-bottom: 1rem;
}

.project {
    width: 47%;
}


@media (max-width: 880px) {
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
<!-- 
#projects {
    min-height: var(--min-section-height);
}

#projects-background {
    background-color: var(--dark-blue);
}

.project-container img:hover {
    opacity: 0;

    transition: opacity 0.3s ease;
}

.project-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 4rem;
    width: 100%;
    color: white;
}

.project-container img {
    /* width: 45%; */
    height: 100%;
}



.overlay {
    background-color: red;
    border-radius: 5px;
    height: 100%;
    margin: 2rem 0 1rem;
}

/* 
.overlay {
    width: 100%;
    height: 100%;
    background-color: rgb(255, 0, 0);
    opacity: 1;
    transition: opacity 0.3s ease;
}

.project-item:hover .overlay {
    opacity: 1;
} */ -->