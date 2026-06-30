<script setup lang="ts">
import { ArrowRight, ExternalLink } from '@lucide/vue';
import { profile, projects, skills } from '../data/profile';
</script>

<template>
  <main>
    <section class="home-hero" aria-labelledby="home-title">
      <img class="hero-bg" src="/assets/hero-abstract.webp" alt="" aria-hidden="true" />
      <div class="hero-overlay" aria-hidden="true"></div>
      <div class="hero-inner">
        <p class="eyebrow">Online Portfolio</p>
        <h1 id="home-title">{{ profile.name }}</h1>
        <p class="hero-role">{{ profile.role }}</p>
        <p class="hero-summary">{{ profile.summary }}</p>
        <div class="hero-actions">
          <RouterLink class="button primary" to="/projects">
            <span>查看项目</span>
            <ArrowRight :size="18" aria-hidden="true" />
          </RouterLink>
          <RouterLink class="button ghost" to="/resume">在线简历</RouterLink>
        </div>
      </div>
    </section>

    <section class="home-quick section-grid" aria-labelledby="focus-title">
      <div>
        <p class="eyebrow">Focus</p>
        <h2 id="focus-title">{{ profile.tagline }}</h2>
      </div>
      <div class="focus-list">
        <article v-for="item in profile.highlights" :key="item.value" class="plain-item">
          <strong>{{ item.value }}</strong>
          <span>{{ item.label }}</span>
        </article>
      </div>
    </section>

    <section class="section split-section" aria-labelledby="preview-projects">
      <div class="section-copy">
        <p class="eyebrow">Selected Work</p>
        <h2 id="preview-projects">把 AI 推理、形式化验证和工程实现接起来</h2>
        <RouterLink class="text-link" to="/projects">
          <span>全部项目</span>
          <ArrowRight :size="17" aria-hidden="true" />
        </RouterLink>
      </div>
      <div class="preview-list">
        <article v-for="project in projects.slice(0, 2)" :key="project.title" class="project-row">
          <component :is="project.icon" :size="22" aria-hidden="true" />
          <div>
            <p>{{ project.meta }}</p>
            <h3>{{ project.title }}</h3>
          </div>
        </article>
      </div>
    </section>

    <section class="section skill-strip" aria-label="核心技能">
      <article v-for="skill in skills" :key="skill.title">
        <component :is="skill.icon" :size="22" aria-hidden="true" />
        <strong>{{ skill.title }}</strong>
      </article>
    </section>

    <section class="section contact-band" aria-labelledby="home-contact">
      <div>
        <p class="eyebrow">Open To</p>
        <h2 id="home-contact">AI、形式化验证、游戏技术与实习机会</h2>
      </div>
      <a class="button primary" :href="profile.github" target="_blank" rel="noreferrer">
        <span>访问 GitHub</span>
        <ExternalLink :size="18" aria-hidden="true" />
      </a>
    </section>
  </main>
</template>
