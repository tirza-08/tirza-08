<script setup>
import LittleStar from './icons/IconLittleStar.vue'
import Email from './icons/IconEmail.vue'
import Phone from './icons/IconPhone.vue'
import LinkedIn from './icons/IconLinkedIn.vue'
import GitHub from './icons/IconGitHub.vue'

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
</script>

<template>
    <div class="footer-background">
        <section id="footer">
            <div class="column">
                <div class="star-header">
                    <h2>Neem contact op</h2>
                    <LittleStar />
                </div>
                <div>
                    <h5>E-mail:</h5>
                    <a href="mailto:tirzameinema@outlook.com">tirzameinema@outlook.com</a>
                </div>
                <div>
                    <h5>Telefoon:</h5>
                    <a href="tel:+31623753535">+31 6 2375 3535</a>
                </div>
                <div class="icons">
                    <a href="mailto:tirzameinema@outlook.com">
                        <Email />
                    </a>
                    <a href="tel:+31623753535">
                        <Phone />
                    </a>
                    <a href="https://www.linkedin.com/in/tirza-meinema" target="_blank">
                        <LinkedIn />
                    </a>
                    <a href="https://github.com/tirza-08" target="_blank">
                        <GitHub />
                    </a>
                </div>
            </div>
            <div class="column">
                <button @click="scrollToTop">
                    <h4>Naar boven &uarr;</h4>
                </button>
                <RouterLink class="active" to="/">Home</RouterLink>
                <RouterLink to="/projecten">Projecten</RouterLink>
                <RouterLink to="/over-mij">Over mij</RouterLink>
                <RouterLink to="/resume">CV</RouterLink>
            </div>
        </section>
    </div>
</template>

<style scoped>
.footer-background {
    background: var(--gradient);
}

#footer {
    display: flex;
    flex-direction: row;
    align-items: center;
}

#footer div {
    width: 100%;
}

#footer .column {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.icons {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    gap: 1rem;
}

@media (max-width: 700px) {
    #footer {
        flex-direction: column;
        gap: 4rem;
    }

    #footer div {
        width: 75%;
    }
}

button {
    border: none;
    background-color: var(--yellow);
    padding: 15px 25px;
    margin-left: -30px;
    margin-bottom: 1rem;
    color: var(--dark-blue);
    width: fit-content;
    border-radius: 50px;
    font-size: 16px;
    transition: color 0.5s ease-in-out;

}
button:hover {
    background-color: #f08913;
}
</style>