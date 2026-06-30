<script setup lang="ts">
import { ExternalLink, GitBranch, Mail } from '@lucide/vue';
import { navItems } from './router';
import { profile } from './data/profile';
</script>

<template>
  <div class="app-shell">
    <header class="site-header">
      <div class="site-header-inner">
        <RouterLink class="brand" to="/" aria-label="回到首页">
          <span class="brand-mark">{{ profile.initials }}</span>
          <span class="brand-text">
            <strong>{{ profile.name }}</strong>
            <small>AI · Math · Game Tech</small>
          </span>
        </RouterLink>

        <nav class="site-nav" aria-label="主导航">
          <RouterLink v-for="item in navItems" :key="item.to" :to="item.to">
            {{ item.label }}
          </RouterLink>
        </nav>

        <div class="header-actions">
          <a class="icon-link" :href="`mailto:${profile.email}`" aria-label="发送邮件">
            <Mail :size="19" aria-hidden="true" />
          </a>
          <a class="icon-link" :href="profile.github" target="_blank" rel="noreferrer" aria-label="访问 GitHub">
            <GitBranch :size="19" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>

    <RouterView />

    <footer class="site-footer">
      <div>
        <strong>{{ profile.name }}</strong>
        <span>{{ profile.role }}</span>
      </div>
      <a :href="profile.github" target="_blank" rel="noreferrer">
        <span>GitHub</span>
        <ExternalLink :size="16" aria-hidden="true" />
      </a>
    </footer>
  </div>
</template>
