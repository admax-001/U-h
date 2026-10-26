<template>
  <section class="notification-screen">
    <div class="notify-tabs">
      <button class="notify-tab active">评论和@</button>
      <button class="notify-tab">点赞</button>
      <button class="notify-tab">收藏</button>
      <button class="notify-tab">新增关注</button>
    </div>

    <div class="notify-list">
      <article class="notify-item" v-for="item in items" :key="item.id">
        <div class="avatar-wrap">
          <img :src="item.avatar" alt="">
        </div>

        <div class="notify-main">
          <div class="notify-top">
            <strong>{{ item.name }}</strong>
            <span>{{ item.text }}</span>
          </div>
          <div class="notify-sub">{{ item.sub }}</div>
          <div class="notify-actions">
            <button class="ghost-btn">回复</button>
            <button class="heart-btn">♡</button>
          </div>
        </div>

        <div class="thumb-box" v-if="item.thumb">
          <img :src="item.thumb" alt="">
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    id: 1,
    name: '芋泥啵啵',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    text: '评论了你的笔记，1天前',
    sub: '一个人觉得...',
    thumb: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    name: '青衫伫剑',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    text: '给你回复了，1天前',
    sub: '学到了很多',
    thumb: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=400&q=80'
  }
]
</script>

<style scoped>
.notification-screen {
  padding: 0 12px 100px;
}
.notify-tabs {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  white-space: nowrap;
  padding: 10px 2px 18px;
}
.notify-tab {
  border: none;
  background: transparent;
  padding: 10px 16px;
  border-radius: 999px;
  color: #333;
  flex-shrink: 0;
}
.notify-tab.active {
  background: #f0f0f0;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.03);
}
.notify-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.notify-item {
  display: grid;
  grid-template-columns: 52px 1fr 100px;
  gap: 12px;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 16px;
}
.avatar-wrap {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  overflow: hidden;
}
.avatar-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.notify-main {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.notify-top {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 1rem;
}
.notify-top strong {
  font-size: 1.15rem;
}
.notify-sub {
  color: #666;
  line-height: 1.6;
}
.notify-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}
.ghost-btn {
  border: 1px solid #d9d9d9;
  background: transparent;
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
}
.heart-btn {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid #d9d9d9;
  background: transparent;
  cursor: pointer;
  font-size: 1.2rem;
}
.thumb-box {
  width: 100px;
  height: 100px;
  border-radius: 14px;
  overflow: hidden;
}
.thumb-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
