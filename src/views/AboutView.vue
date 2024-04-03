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
      <img id="foto-me" src="../../images/me.png" alt="">
      <div class="introduction-text">
        <h1>Nice to meet you</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra urna id sapien ornare vestibulum.
          Sed feugiat faucibus tortor vitae scelerisque. Cras aliquam vulputate nisl eget feugiat. Fusce a ex pulvinar,
          aliquet diam eget, elementum urna. Donec cursus lacus quis sodales luctus. Morbi varius eros lacinia, ultrices
          ipsum et, suscipit arcu. Pellentesque malesuada fermentum urna, et vehicula lacus dictum ac. Donec a libero
          vitae mauris suscipit congue.
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
    <section>
      <h3>Skills</h3>
      <div class="skills">
        <div>
          <Empathy />
          <p>Empathy</p>
        </div>
        <div>
          <Collaboration />
          <p>Collaboration</p>
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
          <p>Time Management</p>
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
  max-width: 25%;
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
}

.skills div {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--white-soft);
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
