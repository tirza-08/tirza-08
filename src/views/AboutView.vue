<script setup>
import LittleStar from '../components/icons/IconLittleStar.vue'
import Empathy from '../components/icons/IconEmpathy.vue'
import Collaboration from '../components/icons/IconCollaboration.vue'
import ProblemSolving from '../components/icons/IconProblemSolving.vue'
import DesignThinking from '../components/icons/IconDesignThinking.vue'
import TimeManagement from '../components/icons/IconTimeManagement.vue'
</script>

<template>
  <section class="about">
    <div class="introduction">
      <img id="foto-me" src="/images/me.png" alt="">
      <div class="introduction-text">
        <h1>Wie ben ik?</h1>
        <p>
          Welkom op mijn website! Mijn naam is Tirza en ik ben een Communication & Multimedia Design student aan de
          Hanze. Ik hou ervan om gebruiksvriendelijke websites of andere ervaringen te creëren voor andere mensen.
        </p>
        <br>
        <p>
          Naast mijn interesse in web development, ben ik ook geïnteresseerd in design of games. In mijn vrije tijd zie
          je me vaak muziek luisteren, concerten bezoeken of lezen. Ook hou ik ervan om nieuwe dingen uit te proberen.
        </p>
        <br>
        <p>
          Als je vragen hebt of interesse hebt in samenwerken, aarzel dan niet om contact met me op te nemen via <a href="mailto:tirzameinema@outlook.com">tirzameinema@outlook.com</a>.
        </p>
        <div>
          <h4>My favorite tools</h4>
          <div class="tool-list">
            <div class="column">
              <div class="item">
                <LittleStar />
                <p>Figma</p>
              </div>
              <div class="item">
                <LittleStar />
                <p>Illustrator</p>
              </div>
              <div class="item">
                <LittleStar />
                <p>Notion</p>
              </div>
            </div>
            <div class="column">
              <div class="item">
                <LittleStar />
                <p>HTML</p>
              </div>
              <div class="item">
                <LittleStar />
                <p>CSS</p>
              </div>
              <div class="item">
                <LittleStar />
                <p>JavaScript</p>
              </div>
            </div>
            <div class="column">
              <div class="item">
                <LittleStar />
                <p>Vue</p>
              </div>
              <div class="item">
                <LittleStar />
                <p>Git</p>
              </div>
              <div class="item">
                <LittleStar />
                <p>Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
  <div class="blue-background">
    <section class="skill-section">
      <h3>Skills</h3>
      <div class="skills">
        <div>
          <Empathy />
          <p>Empathie</p>
        </div>
        <div>
          <Collaboration />
          <p>Samenwerken</p>
        </div>
        <div>
          <ProblemSolving />
          <p>Problem Solving</p>
        </div>
        <div>
          <DesignThinking />
          <p>Design Thinking</p>
        </div>
        <div>
          <TimeManagement />
          <p>Idk!!!</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
h1 {
  font-size: 42px;
}

.introduction {
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  gap: 4rem;
}

.introduction-text h4 {
  margin-top: 2rem;
}

#foto-me {
  max-width: 35%;
  transform: scaleX(-1);
  /* padding: 2rem; */
}

.item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.tool-list svg {
  width: 24px;
}

.tool-list {
  display: flex;
  gap: 3rem;
}

section {
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
}

.skills {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 4rem;
}

.skills svg {
  width: 60px;
  margin: 1rem 0;
}

.skills div {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--white-soft);
}
.skill-section {
  padding: 5rem 0 8rem;
}

@media (max-width: 850px) {
  .introduction {
    flex-direction: column;
  }

  #foto-me {
    max-width: 50%;
  }

  .skills {
    font-size: 12px;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .skills svg {
    width: 50px;
  }
}

/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
