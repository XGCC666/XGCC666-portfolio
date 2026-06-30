<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue';
import { profile, projects } from '../data/profile';
</script>

<template>
  <main class="page">
    <section class="page-hero compact" aria-labelledby="projects-title">
      <p class="eyebrow">Projects</p>
      <h1 id="projects-title">项目作品</h1>
      <p>
        这些项目集中在一个方向：让模型生成、形式化验证和实际工程反馈形成闭环。
      </p>
    </section>

    <section class="project-stack" aria-label="项目列表">
      <article v-for="project in projects" :key="project.title" class="project-card">
        <div class="project-card-head">
          <component :is="project.icon" :size="24" aria-hidden="true" />
          <div>
            <p>{{ project.meta }}</p>
            <h2>{{ project.title }}</h2>
          </div>
        </div>
        <p class="project-summary">{{ project.summary }}</p>
        <ul>
          <li v-for="point in project.points" :key="point">{{ point }}</li>
        </ul>
      </article>
    </section>

    <section class="section contact-band" aria-labelledby="project-contact">
      <div>
        <p class="eyebrow">Code</p>
        <h2 id="project-contact">更多实验和代码会继续整理到 GitHub</h2>
      </div>
      <a class="button primary" :href="profile.github" target="_blank" rel="noreferrer">
        <span>查看 GitHub</span>
        <ArrowUpRight :size="18" aria-hidden="true" />
      </a>
    </section>
  </main>
</template>
