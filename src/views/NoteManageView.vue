<template>
  <section class="note-manage">
    <header class="topbar">
      <button class="back-btn" @click="$router.back()">‹</button>
      <h1>笔记管理</h1>
      <div class="count">共 4 篇笔记</div>
    </header>

    <div class="search-box">
      <svg viewBox="0 0 24 24"><path d="M10.5 3a7.5 7.5 0 0 1 5.93 12.73l4.27 4.28 1.41-1.41-4.28-4.27A7.5 7.5 0 1 1 10.5 3zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z"/></svg>
      <input type="text" placeholder="搜索笔记标题或内容" />
    </div>

    <div class="filter-box">全部分类</div>

    <div class="list">
      <div class="note-card" v-for="n in notes" :key="n.id">
        <div class="thumb"><img :src="n.cover" alt="" /></div>
        <div class="note-main">
          <div class="note-title">{{ n.title }}</div>
          <div class="note-summary">{{ n.summary }}</div>

          <div class="meta-row">
            <span>{{ n.label }}</span>
            <span>{{ n.date }}</span>
          </div>

          <div class="action-row">
            <span>♡ {{ n.likes }}</span>
            <span>⟲ {{ n.comments }}</span>
            <span>✎</span>
          </div>
        </div>

        <div class="side-actions">
          <button class="red-btn">编辑</button>
          <button class="ghost-btn">删除</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const notes = [
  {
    id: 1,
    title: '聚会游戏推荐，活跃气氛必备',
    summary: '每个人都有自己的社交方式，最重要的是找到适合自己的节奏和氛围。',
    label: '社交',
    date: '2025年9月14日',
    likes: 3280,
    comments: 5,
    cover: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 2,
    title: '护肤心得分享，养出好皮肤的秘密',
    summary: '家是心灵的港湾，温馨舒适的居住环境能够让人感到放松和愉悦。',
    label: '生活',
    date: '2025年9月14日',
    likes: 4435,
    comments: 6,
    cover: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80'
  }
]
</script>

<style scoped>
.note-manage {
  min-height: 100vh;
  background: #f7f7f7;
  padding: 0 16px 100px;
}
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0 16px;
}
.back-btn {
  width: 42px;
  height: 42px;
  background: transparent;
  border: none;
  font-size: 2.2rem;
  cursor: pointer;
  color: #222;
}
.topbar h1 {
  flex: 1;
  margin: 0;
  text-align: center;
  font-size: 2rem;
  letter-spacing: -1px;
}
.count {
  color: #666;
  font-size: 0.95rem;
}
.search-box {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 56px;
  border-radius: 16px;
  background: rgba(255,255,255,0.4);
  border: 1px solid #e7e7e7;
  padding: 0 14px;
}
.search-box svg {
  width: 22px;
  height: 22px;
  fill: #555;
}
.search-box input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-size: 1rem;
}
.filter-box {
  margin-top: 18px;
  width: 100%;
  height: 54px;
  border-radius: 14px;
  background: rgba(255,255,255,0.4);
  border: 1px solid #e7e7e7;
  display: flex;
  align-items: center;
  padding: 0 16px;
  color: #666;
}
.list {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.note-card {
  display: grid;
  grid-template-columns: 120px 1fr auto;
  gap: 14px;
  align-items: center;
  background: rgba(255,255,255,0.2);
  border: 1px solid #e7e7e7;
  border-radius: 18px;
  padding: 12px;
}
.thumb {
  width: 120px;
  height: 120px;
  border-radius: 12px;
  overflow: hidden;
}
.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.note-main {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.note-title {
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1.5;
}
.note-summary {
  color: #666;
  line-height: 1.7;
}
.meta-row,
.action-row {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #777;
  font-size: 0.86rem;
  flex-wrap: wrap;
}
.side-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.red-btn,
.ghost-btn {
  border: none;
  border-radius: 12px;
  padding: 10px 14px;
  font-weight: 700;
  cursor: pointer;
}
.red-btn {
  background: linear-gradient(135deg, #ff5b5b, #ff4343);
  color: white;
}
.ghost-btn {
  background: #f2f2f2;
  color: #333;
}
</style>
