<script setup lang="ts">
import { education, experience, extras, profile, skills } from '../data/profile';
</script>

<template>
  <main class="page">
    <section class="page-hero" aria-labelledby="resume-title">
      <p class="eyebrow">Resume</p>
      <h1 id="resume-title">在线简历</h1>
      <p>{{ profile.summary }}</p>
    </section>

    <section class="resume-layout" aria-label="简历详情">
      <div class="resume-main">
        <section class="resume-block" aria-labelledby="experience-title">
          <p class="eyebrow">Experience</p>
          <h2 id="experience-title">实习经历</h2>
          <article v-for="item in experience" :key="item.title" class="timeline-entry">
            <span>{{ item.period }}</span>
            <div>
              <h3>{{ item.title }} @ {{ item.company }}</h3>
              <ul>
                <li v-for="point in item.points" :key="point">{{ point }}</li>
              </ul>
            </div>
          </article>
        </section>

        <section class="resume-block" aria-labelledby="education-title">
          <p class="eyebrow">Education</p>
          <h2 id="education-title">教育背景</h2>
          <article v-for="item in education" :key="item.title" class="timeline-entry compact">
            <span>{{ item.period }}</span>
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.detail }}</p>
            </div>
          </article>
        </section>
      </div>

      <aside class="resume-side" aria-label="技能和其他信息">
        <section class="resume-block">
          <p class="eyebrow">Skills</p>
          <div class="skill-list">
            <article v-for="skill in skills" :key="skill.title">
              <component :is="skill.icon" :size="20" aria-hidden="true" />
              <h3>{{ skill.title }}</h3>
              <p>{{ skill.items.join(' / ') }}</p>
            </article>
          </div>
        </section>

        <section class="resume-block">
          <p class="eyebrow">More</p>
          <ul class="clean-list">
            <li v-for="item in extras" :key="item">{{ item }}</li>
          </ul>
        </section>
      </aside>
    </section>
  </main>
</template>
