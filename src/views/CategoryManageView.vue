<template>
  <section class="category-manage">
    <header class="header">
      <div class="title-wrap">
        <h1>分类管理</h1>
        <p>管理笔记分类和分类信息</p>
      </div>
      <div class="header-actions">
        <button class="icon-btn small">◉</button>
        <button class="icon-btn small">☾</button>
        <button class="icon-btn small">☰</button>
      </div>
    </header>

    <div class="toolbar">
      <button class="action-btn red"><span>🗑</span> 批量删除</button>
    </div>

    <div class="panel">
      <div class="left">
        <table class="cat-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>分类名称</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in categories" :key="item.id" :class="{ active: index === selectedIndex }" @click="selectedIndex = index">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="right">
        <div class="menu-item">💬 评论管理</div>
        <div class="menu-item">☰ 分类管理</div>
        <div class="menu-item"># 标签管理</div>
        <div class="menu-item">♡ 点赞管理</div>
        <div class="menu-item">☆ 收藏管理</div>
        <div class="menu-item">◌ 关注管理</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const selectedIndex = ref(0)

const categories = [
  { id: 1, name: '学习' },
  { id: 2, name: '校园' },
  { id: 3, name: '情感' },
  { id: 4, name: '兴趣' },
  { id: 5, name: '生活' },
  { id: 6, name: '社交' },
  { id: 7, name: '求助' },
  { id: 8, name: '观点' }
]
</script>

<style scoped>
.category-manage {
  min-height: 100vh;
  background: #f7f7f7;
  padding: 0 16px 100px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 12px;
}
.title-wrap h1 {
  margin: 0;
  font-size: 2.5rem;
  letter-spacing: -1px;
}
.title-wrap p {
  margin: 8px 0 0;
  color: #666;
  font-size: 0.98rem;
}
.header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}
.icon-btn.small {
  width: 52px;
  height: 52px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff5d5d, #ff4343);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 18px rgba(255, 88, 88, 0.18);
  color: white;
  font-weight: 700;
}
.toolbar {
  margin: 18px 0 18px;
}
.action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 14px;
  color: white;
  background: linear-gradient(135deg, #ff5d5d, #ff4040);
  font-weight: 700;
  cursor: pointer;
}
.panel {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 12px;
  min-height: 420px;
}
.left,
.right {
  border: 1px solid #e7e7e7;
  border-radius: 18px;
  background: rgba(255,255,255,0.25);
  overflow: hidden;
}
.cat-table {
  width: 100%;
  border-collapse: collapse;
}
.cat-table th,
.cat-table td {
  padding: 18px 16px;
  text-align: left;
  border-bottom: 1px solid #ededed;
}
.cat-table th {
  background: #f4f4f4;
  font-size: 0.9rem;
  color: #333;
}
.cat-table tr.active {
  background: #f2f2f2;
}
.cat-table td {
  font-size: 1.1rem;
}
.right {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.menu-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 10px;
  border-radius: 12px;
  color: #333;
  background: rgba(255,255,255,0.18);
  font-size: 1rem;
}
</style>
