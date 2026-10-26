<template>
  <section class="follow-detail">
    <header class="topbar">
      <button class="back-btn" @click="$router.back()">×</button>
      <div class="user-head">
        <img :src="user.avatar" alt="" />
        <div class="user-name">{{ user.name }}</div>
      </div>
      <button class="follow-btn">关注</button>
    </header>

    <div class="content">
      <div class="title">{{ user.title }}</div>

      <div class="tags">
        <span v-for="tag in user.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>

      <div class="meta-line">{{ user.time }}</div>

      <div class="comment-header">共 3 条评论</div>

      <div class="comment-list">
        <div class="comment-item" v-for="c in comments" :key="c.id">
          <div class="avatar"><img :src="c.avatar" alt="" /></div>
          <div class="comment-body">
            <div class="comment-user">{{ c.name }}</div>
            <div class="comment-text">{{ c.text }}</div>
            <div class="comment-meta">
              <span>{{ c.time }}</span>
              <span>{{ c.location }}</span>
            </div>
          </div>
          <div class="like-box">
            <svg viewBox="0 0 24 24"><path d="M12.1 21.35 10.7 20C5.4 15.36 2 12.28 2 8.5A4.5 4.5 0 0 1 6.5 4c1.74 0 3.41.81 4.5 2.09A6.09 6.09 0 0 1 15.5 4 4.5 4.5 0 0 1 20 8.5c0 3.78-3.4 6.86-8.7 11.5l-1.2 1.35z"/></svg>
            <span>{{ c.likes }}</span>
          </div>
        </div>
      </div>

      <div class="divider" />

      <div class="reply-block">
        <div class="reply-user">
          <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=200&q=80" alt="">
          <span>{{ user.name }}</span>
        </div>

        <div class="reply-input">说点什么...</div>

        <div class="action-row">
          <div class="action-left">
            <span class="action-like">♡</span>
            <span class="count">{{ user.likes }}</span>
            <span class="action-quote">◌ 回复</span>
          </div>
          <div class="action-right">
            <span class="action-icon">✉</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const user = {
  name: '薄荷微光',
  avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
  title: '毕业旅行vlog，最后的狂欢',
  tags: ['#手工', '#毕业'],
  time: '5小时前 沈阳',
  likes: 5
}

const comments = [
  {
    id: 1,
    name: '北岛迷途',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    text: '在这个特殊的时刻，想对所有帮助过我的老师、同学和朋友们说声谢谢。',
    time: '1小时前',
    location: '沈阳',
    likes: 7
  },
  {
    id: 2,
    name: '枕星河入梦',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    text: '感同身受，大学真的会成为你最珍贵的回忆。',
    time: '30分钟前',
    location: '武汉',
    likes: 4
  }
]
</script>

<style scoped>
.follow-detail {
  min-height: 100vh;
  background: #f7f7f7;
  padding-bottom: 90px;
}
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 16px 14px;
  background: #f5f5f5;
}
.back-btn {
  width: 42px;
  height: 42px;
  border: none;
  background: transparent;
  font-size: 2.1rem;
  line-height: 1;
  color: #222;
  cursor: pointer;
}
.user-head {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  margin: 0 10px;
}
.user-head img {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  object-fit: cover;
}
.user-name {
  font-size: 1.12rem;
  font-weight: 700;
}
.follow-btn {
  border: none;
  background: linear-gradient(135deg, #ff5e5e, #ff4343);
  color: white;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 999px;
  height: 46px;
  min-width: 102px;
  cursor: pointer;
}
.content {
  padding: 0 18px;
}
.title {
  margin-top: 18px;
  font-size: 2rem;
  line-height: 1.4;
  font-weight: 700;
  letter-spacing: -1px;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
}
.tag {
  color: #2d6cf0;
  font-size: 1rem;
  font-weight: 600;
}
.meta-line {
  margin-top: 18px;
  color: #777;
  font-size: 1rem;
}
.comment-header {
  margin-top: 26px;
  font-size: 1.1rem;
  color: #333;
  font-weight: 700;
}
.comment-list {
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.comment-item {
  display: grid;
  grid-template-columns: 42px 1fr 44px;
  gap: 12px;
  align-items: flex-start;
  padding: 6px 0;
}
.comment-item .avatar {
  width: 42px;
  height: 42px;
  overflow: hidden;
  border-radius: 50%;
}
.comment-item .avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.comment-user {
  font-weight: 700;
  margin-bottom: 4px;
}
.comment-text {
  line-height: 1.7;
  color: #333;
  font-size: 1rem;
}
.comment-meta {
  margin-top: 8px;
  display: flex;
  gap: 12px;
  color: #8a8a8a;
  font-size: 0.8rem;
}
.like-box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: #666;
  font-size: 0.9rem;
  padding-top: 8px;
}
.like-box svg {
  width: 16px;
  height: 16px;
  fill: #666;
}
.divider {
  height: 1px;
  background: #ebebeb;
  margin: 18px 0;
}
.reply-block {
  background: rgba(255,255,255,0.2);
  border-radius: 18px;
  padding: 14px 0 0;
}
.reply-user {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}
.reply-user img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
}
.reply-input {
  min-height: 58px;
  padding: 14px 16px;
  border-radius: 16px;
  background: #f1f1f1;
  color: #888;
  font-size: 1rem;
  display: flex;
  align-items: center;
}
.action-row {
  margin-top: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.action-left {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #666;
  font-size: 1rem;
}
.action-like {
  font-size: 1.5rem;
}
.action-quote {
  color: #666;
}
.action-icon {
  font-size: 1.6rem;
  color: #666;
}
</style>
