<template>
    <section>
        <!-- <p>Project ID: {{ $route.params.projectId }}</p> -->
        <div class="project-header">
            <div>
                <h2>{{ currentProject.jaar }}</h2>
                <h1>{{ currentProject.type }}: {{ currentProject.name }}</h1>
            </div>
            <img :src="currentProject.hoofdfoto" alt="foto project">
        </div>
        <div class="proces">
            <img v-for="photo in currentProject.procesfotos" :src="photo" alt="foto proces">
        </div>
        <div class="description">
            <p>{{ currentProject.beschrijving }}</p>
            <ul>
                <li v-for="uitdaging in currentProject.uitdagingen">{{ uitdaging }}</li>
            </ul>
        </div>
        <div class="results">
            <img v-for="photo in currentProject.resultaatfotos" :src="photo" alt="foto resultaat">
        </div>
    </section>
</template>

<style scoped>
section {
    min-height: var(--min-section-height);
}

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    padding: 45px 0;
}

.project-header img {
    width: 450px;
}

h1 {
    font-size: 42px;
}

.proces,
.results,
.description {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-around;
    padding: 45px 0;
}

.proces img,
.results img,
.description p,
.description ul {
    max-width: 40%;
}

@media (max-width: 800px) {
/* 
    .proces,
    .results,
    .description {
        flex-direction: column;
        max-width: 100%;
        align-items: center;
    } */

    .proces img,
    .results img,
    .description p,
    .description ul {
        max-width: 100%;
    }
}
</style>

<script>
import projects from '@/data/projects.json';

export default {
    data() {
        return {
            currentProject: null
        };
    },
    created() {
        this.setCurrentProject();
    },
    methods: {
        setCurrentProject() {
            const projectId = this.$route.params.projectId;
            this.currentProject = projects.find(project => project.id == projectId);
        }
    }
};
</script>