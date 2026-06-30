<script setup lang="ts">
import { Check, Copy, Send } from '@lucide/vue';
import { ref } from 'vue';
import { contacts, profile } from '../data/profile';

const copied = ref(false);
let copyTimer = 0;

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.email);
    copied.value = true;
    window.clearTimeout(copyTimer);
    copyTimer = window.setTimeout(() => {
      copied.value = false;
    }, 1800);
  } catch {
    window.location.href = `mailto:${profile.email}`;
  }
}
</script>

<template>
  <main class="page">
    <section class="page-hero compact" aria-labelledby="contact-title">
      <p class="eyebrow">Contact</p>
      <h1 id="contact-title">联系</h1>
      <p>欢迎交流 AI Agent、形式化验证、游戏技术、全栈实验和实习机会。</p>
    </section>

    <section class="contact-page-grid" aria-label="联系方式">
      <a
        v-for="contact in contacts"
        :key="contact.label"
        class="contact-method"
        :href="contact.href"
        :target="contact.href.startsWith('http') ? '_blank' : undefined"
        :rel="contact.href.startsWith('http') ? 'noreferrer' : undefined"
      >
        <component :is="contact.icon" :size="22" aria-hidden="true" />
        <span>
          <strong>{{ contact.label }}</strong>
          <small>{{ contact.value }}</small>
        </span>
      </a>

      <button class="contact-method" type="button" @click="copyEmail">
        <Check v-if="copied" :size="22" aria-hidden="true" />
        <Copy v-else :size="22" aria-hidden="true" />
        <span>
          <strong>{{ copied ? '已复制邮箱' : '复制邮箱' }}</strong>
          <small>{{ profile.email }}</small>
        </span>
      </button>
    </section>

    <section class="section contact-note" aria-label="公开信息说明">
      <Send :size="22" aria-hidden="true" />
      <p>
        当前公开页面保留邮箱、GitHub 和城市信息。电话号码不放在网页公开资源中，可在需要时单独提供。
      </p>
    </section>
  </main>
</template>
