<template>
  <section class="profile-screen">
    <div class="profile-head">
      <div class="avatar huge">
        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80" alt="">
      </div>

      <div class="profile-title-wrap">
        <div class="name-row">
          <h2>云鲸漫游</h2>
          <span class="verify-mark">✓</span>
        </div>
        <div class="meta-line">小石榴号：user001</div>
        <div class="meta-line">IP属地：本地</div>
      </div>

      <button class="edit-btn">编辑资料</button>
    </div>

    <div class="bio-text">法学生 | 正义永不缺席</div>

    <div class="tag-row">
      <span class="tag">天秤座</span>
      <span class="tag">硕士</span>
      <span class="tag">市场营销</span>
      <span class="tag">冥想</span>
      <span class="tag">时尚</span>
    </div>

    <div class="stat-row">
      <div class="stat"><strong>5</strong><span>关注</span></div>
      <div class="stat"><strong>5</strong><span>粉丝</span></div>
      <div class="stat"><strong>28</strong><span>获赞与收藏</span></div>
    </div>

    <div class="segment-row">
      <button class="segment active">笔记</button>
      <button class="segment">收藏</button>
      <button class="segment">点赞</button>
    </div>

    <div class="gallery">
      <div class="gallery-item" v-for="p in posts" :key="p.id">
        <img :src="p.image" alt="">
      </div>
    </div>
  </section>
</template>

<script setup>
const posts = [
  { id: 1, image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80' },
  { id: 2, image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80' },
  { id: 3, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80' }
]
</script>

<style scoped>
.profile-screen {
  padding: 0 18px 100px;
}
.profile-head {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 8px;
}
.avatar.huge {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  overflow: hidden;
  background: #eee;
}
.avatar.huge img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.profile-title-wrap {
  flex: 1;
}
.name-row {
  display: flex;
  align-items: center;
  gap: 8px;
}
.name-row h2 {
  margin: 0;
  font-size: 2rem;
  letter-spacing: -1px;
}
.verify-mark {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #ff4d4f;
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
}
.meta-line {
  color: #666;
  font-size: 0.92rem;
  line-height: 1.8;
}
.edit-btn {
  border: 1px solid #d5d5d5;
  background: #fff;
  border-radius: 999px;
  padding: 12px 16px;
  font-weight: 600;
  cursor: pointer;
}
.bio-text {
  margin: 18px 0 14px;
  font-size: 1.08rem;
  font-weight: 600;
}
.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 22px;
}
.tag {
  background: #f1f1f1;
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 0.85rem;
  color: #555;
}
.stat-row {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 24px;
}
.stat {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}
.stat strong {
  font-size: 1.8rem;
  font-weight: 700;
}
.stat span {
  font-size: 0.9rem;
  color: #666;
}
.segment-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-bottom: 18px;
}
.segment {
  border: none;
  background: transparent;
  padding: 10px 14px;
  border-radius: 999px;
  color: #666;
  font-size: 1rem;
}
.segment.active {
  background: #f0f0f0;
  color: #111;
}
.gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.gallery-item {
  aspect-ratio: 0.95;
  border-radius: 16px;
  overflow: hidden;
  background: #ddd;
}
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
