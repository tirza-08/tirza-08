<script setup>
import Email from './icons/IconEmail.vue'
import Phone from './icons/IconPhone.vue'
import LinkedIn from './icons/IconLinkedIn.vue'
import GitHub from './icons/IconGitHub.vue'
</script>

<template>
    <section id="footer">
        <div>
            <h2>Neem contact op</h2>
            <h5>E-mail:</h5>
            <a href="mailto:tirzameinema@outlook.com">tirzameinema@outlook.com</a>
            <h5>Telefoon:</h5>
            <a href="tel:+31623753535">+31 6 2375 3535</a>
            <div class="icons">
                <a href="mailto:tirzameinema@outlook.com">
                    <Email />
                </a>
                <a href="tel:+31623753535">
                    <Phone />
                </a>
                <a href="">
                    <LinkedIn />
                </a>
                <a href="">
                    <GitHub />
                </a>
            </div>
        </div>
        <div class="column">
            <a href="">Home</a>
            <a href="">Projecten</a>
            <a href="">CV</a>
        </div>
    </section>
</template>

<style scoped>
#footer {
    display: flex;
    flex-direction: row;
    align-items: center;
}
#footer div {
    width: 50%;
}
#footer .column {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.icons {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    gap: 10px;
}
</style>