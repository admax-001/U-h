<template>
  <section class="activity-monitor">
    <header class="header">
      <div class="title-wrap">
        <h1>动态监控</h1>
        <p>查看系统最近动态和活动监控</p>
      </div>
      <div class="header-actions">
        <button class="icon-btn small">◉</button>
        <button class="icon-btn small">☾</button>
        <button class="icon-btn small">☰</button>
      </div>
    </header>

    <div class="timeline">
      <div class="time-row">
        <span>发表评论</span>
        <span class="right">星子打烊了</span>
      </div>

      <div class="event-card" v-for="item in events" :key="item.id">
        <div class="avatar">
          <img :src="item.avatar" alt="" />
        </div>

        <div class="event-main">
          <div class="event-title">{{ item.title }}</div>
          <div class="meta-row">
            <span class="label">{{ item.type }}</span>
            <span>{{ item.user }}</span>
          </div>
        </div>

        <div class="time">{{ item.time }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
const events = [
  {
    id: 1,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    title: '蓉烦恼 发布了笔记《如何维护长久的友谊关系》',
    type: '发布笔记',
    user: '蓉烦恼',
    time: '29分钟前'
  },
  {
    id: 2,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    title: '芋泥啵啵 发布了笔记《经验分享：我是如何解决xxx问题的》',
    type: '发布笔记',
    user: '芋泥啵啵',
    time: '29分钟前'
  },
  {
    id: 3,
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    title: '蓉烦恼 发布了笔记《一个食物的精致生活，简单也很美》',
    type: '发布笔记',
    user: '蓉烦恼',
    time: '29分钟前'
  },
  {
    id: 4,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    title: '云深不知处 发布了笔记《毕业季倒计时，青春不散场》',
    type: '发布笔记',
    user: '云深不知处',
    time: '29分钟前'
  }
]
</script>

<style scoped>
.activity-monitor {
  min-height: 100vh;
  background: #f7f7f7;
  padding: 0 0 88px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 18px 12px;
}
.title-wrap h1 {
  margin: 0;
  font-size: 2.4rem;
  letter-spacing: -1px;
  font-weight: 800;
}
.title-wrap p {
  margin: 8px 0 0;
  color: #666;
  font-size: 0.96rem;
}
.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
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
.timeline {
  border-top: 1px solid #ececec;
  background: rgba(255,255,255,0.18);
}
.time-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px;
  font-size: 1.08rem;
  color: #4b4b4b;
  border-bottom: 1px solid #ebebeb;
}
.time-row .right {
  font-weight: 600;
  color: #222;
}
.event-card {
  display: grid;
  grid-template-columns: 54px 1fr auto;
  align-items: center;
  gap: 14px;
  padding: 18px 20px;
  border-bottom: 1px solid #ebebeb;
}
.avatar {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.event-main {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.event-title {
  font-size: 1.1rem;
  line-height: 1.5;
  color: #1c1c1c;
}
.meta-row {
  display: flex;
  align-items: center;
  gap: 16px;
  color: #666;
  font-size: 0.96rem;
}
.label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 72px;
  height: 28px;
  padding: 0 12px;
  border-radius: 8px;
  background: #f0f0f0;
  color: #444;
}
.time {
  font-size: 0.96rem;
  color: #666;
  white-space: nowrap;
}
</style>
