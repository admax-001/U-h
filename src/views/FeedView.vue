<template>
  <section class="feed-screen">
    <div class="chip-row">
      <button class="chip active">推荐</button>
      <button class="chip">学习</button>
      <button class="chip">校园</button>
      <button class="chip">情感</button>
      <button class="chip">兴趣</button>
      <button class="chip">生活</button>
    </div>

    <div class="card-grid">
      <article class="card" v-for="item in feedList" :key="item.id">
        <div class="cover">
          <img :src="item.cover" alt="" />
        </div>

        <div class="card-title">{{ item.title }}</div>

        <div class="meta-row">
          <div class="user-meta">
            <span class="avatar">
              <img :src="item.avatar" alt="">
            </span>
            <span>{{ item.author }}</span>
          </div>

          <div class="like-box">
            <svg viewBox="0 0 24 24"><path d="M12.1 21.35 10.7 20C5.4 15.36 2 12.28 2 8.5A4.5 4.5 0 0 1 6.5 4c1.74 0 3.41.81 4.5 2.09A6.09 6.09 0 0 1 15.5 4 4.5 4.5 0 0 1 20 8.5c0 3.78-3.4 6.86-8.7 11.5l-1.2 1.35z"/></svg>
            <span>{{ item.likes }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
const feedList = [
  {
    id: 1,
    title: '我对xxx问题的看法和建议',
    author: '林间小筑',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    cover: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    likes: 5
  },
  {
    id: 2,
    title: '新生入学指南，学长学姐的贴心提醒',
    author: '清澈配小菜',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    cover: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
    likes: 4
  },
  {
    id: 3,
    title: '小白入门：关于学习的几点建议',
    author: '云海',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    cover: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    likes: 7
  },
  {
    id: 4,
    title: '雨天的治愈片段',
    author: '晚风',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    cover: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    likes: 2
  }
]
</script>

<style scoped>
.feed-screen {
  padding: 0 12px 100px;
}
.chip-row {
  display: flex;
  gap: 14px;
  overflow-x: auto;
  white-space: nowrap;
  padding: 12px 2px 18px;
  scrollbar-width: none;
}
.chip-row::-webkit-scrollbar { display: none; }
.chip {
  border: none;
  background: transparent;
  padding: 12px 18px;
  border-radius: 999px;
  font-size: 1.02rem;
  color: #333;
  flex-shrink: 0;
}
.chip.active {
  background: #f0f0f0;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.03);
  font-weight: 700;
}
.card-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}
.card { width: 100%; }
.cover {
  width: 100%;
  aspect-ratio: 0.82;
  border-radius: 18px;
  overflow: hidden;
  background: #d9d9d9;
}
.cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.card-title {
  margin: 14px 0 10px;
  font-size: 1.06rem;
  line-height: 1.55;
  min-height: 52px;
}
.meta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.user-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #333;
  font-size: 0.88rem;
}
.avatar {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  overflow: hidden;
  background: #eee;
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.like-box {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #666;
  font-size: 0.88rem;
}
.like-box svg {
  width: 18px;
  height: 18px;
  fill: #666;
}
</style>
