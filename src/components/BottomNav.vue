<template>
  <nav class="bottom-nav">
    <button class="nav-item" :class="{ active: screen === 'feed' }" @click="$emit('change', 'feed')">
      <span class="icon">
        <svg viewBox="0 0 24 24"><path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-11zm2.5.5h11a1 1 0 0 1 1 1v5h-13v-5a1 1 0 0 1 1-1zm-1 8h13v2.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V15z"/></svg>
      </span>
      <span>发现</span>
    </button>

    <button class="nav-item" :class="{ active: screen === 'publish' }" @click="$emit('change', 'publish')">
      <span class="icon plus">＋</span>
      <span>发布</span>
    </button>

    <button class="nav-item" :class="{ active: screen === 'notifications' }" @click="$emit('change', 'notifications')">
      <span class="icon">
        <svg viewBox="0 0 24 24"><path d="M12 2.75a5 5 0 0 1 5 5v3.59l1.71 4.28A1 1 0 0 1 17.76 17H6.24a1 1 0 0 1-.95-1.38L7 11.34V7.75a5 5 0 0 1 5-5zm0 19a2.5 2.5 0 0 1-2.45-2h4.9A2.5 2.5 0 0 1 12 21.75z"/></svg>
      </span>
      <span>通知</span>
      <span class="notice-badge">26</span>
    </button>

    <button class="nav-item" :class="{ active: screen === 'profile' }" @click="$emit('change', 'profile')">
      <span class="avatar mini">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80" alt="">
      </span>
      <span>我</span>
    </button>
  </nav>
</template>

<script setup>
defineProps({
  screen: {
    type: String,
    default: 'feed'
  }
})
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: min(100%, 480px);
  height: 76px;
  background: rgba(255,255,255,0.96);
  backdrop-filter: blur(8px);
  border-top: 1px solid #ececec;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  z-index: 1000;
}

.nav-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: #555;
  font-size: 0.82rem;
  border: none;
  background: transparent;
  cursor: pointer;
}

.nav-item.active {
  color: #111;
}

.icon {
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.icon svg {
  width: 24px;
  height: 24px;
  fill: currentColor;
}

.plus {
  font-size: 2.2rem;
  font-weight: 300;
  line-height: 1;
}

.notice-badge {
  position: absolute;
  right: 18%;
  top: 8px;
  min-width: 18px;
  height: 18px;
  padding: 0 6px;
  border-radius: 999px;
  background: #ff4d4f;
  color: white;
  font-size: 0.62rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar.mini {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  overflow: hidden;
}

.avatar.mini img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
