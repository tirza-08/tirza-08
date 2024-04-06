<template>
    <section>
        <!-- <p>Project ID: {{ $route.params.projectId }}</p> -->
        <div class="project-header">
            <div>
                <h3>{{ currentProject.jaar }}</h3>
                <h1>{{ currentProject.type }}: {{ currentProject.name }}</h1>
                <!-- <h4 style="color: var(--white-soft)">Uitdagingen</h4> -->
                <ul>
                    <li v-for="uitdaging in currentProject.uitdagingen">{{ uitdaging }}</li>
                </ul>
            </div>
            <img :src="currentProject.hoofdfoto" alt="foto project">
        </div>
    </section>
    <div class="project-body-background">
        <section class="project-body">
            <div class="proces">
                <img v-for="photo in currentProject.procesfotos" :src="photo" alt="foto proces">
            </div>
            <div class="description">
                <p>{{ currentProject.beschrijving }}</p>
            </div>
            <div class="results">
                <img v-for="photo in currentProject.resultaatfotos" :src="photo" alt="foto resultaat">
            </div>
        </section>
    </div>
</template>

<style scoped>
section {
    min-height: 100px;
}

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    padding-top: 15;
    color: var(--white-soft);
}

.project-body-background {
    background: var(--gradient);
}

.project-body {
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.project-header img {
    width: 400px;
}

h1 {
    font-size: 42px;
    color: white;
}

.proces,
.results {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-around;
    padding: 25px 0;
}

.proces img,
.results img,
.description ul {
    max-width: 45%;
}

/* 
.description
 */
@media (max-width: 800px) {

    /* 
    .proces,
    .results,
    .description {
        flex-direction: column;
        max-width: 100%;
        align-items: center;
    } */
    .project-header {
        flex-direction: column;
    }

    h1 {
        font-size: 32px;
    }

    .proces img,
    .results img,
    .description p,
    .description ul {
        max-width: 70%;
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
    mounted() {
        // Change the value of the --color-background variable to dark blue
        document.documentElement.style.setProperty('--color-background', 'var(--dark-blue)');
    },
    beforeRouteLeave(to, from, next) {
        // Reset the value of the --color-background variable to its default
        document.documentElement.style.setProperty('--color-background', 'var(--gradient)');
        next();
    },
    methods: {
        setCurrentProject() {
            const projectId = this.$route.params.projectId;
            this.currentProject = projects.find(project => project.id == projectId);
        }
    }
};
</script>
