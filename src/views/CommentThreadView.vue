<template>
  <section class="comment-thread">
    <header class="comment-header">
      <button class="close-btn" @click="$router.back()">×</button>
      <div class="topic-user">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" alt="" />
        <span>北岛迷途</span>
      </div>
      <button class="follow-btn">关注</button>
    </header>

    <div class="content">
      <h2>学生生活中最珍贵的回忆。</h2>

      <div class="hashtags">
        <span>#技能</span>
        <span>#家居</span>
      </div>

      <div class="time">6分钟前 昆明</div>

      <div class="comment-summary">共 3 条评论</div>

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
        </div>
      </div>
    </div>

    <div class="bottom-bar">
      <input type="text" placeholder="说点什么..." />
      <div class="bottom-actions">
        <span class="heart">♡ 7</span>
        <span class="star">☆ 1</span>
        <span class="comment">◌ 3</span>
        <button class="send-btn">✎</button>
      </div>
    </div>
  </section>
</template>

<script setup>
const comments = [
  {
    id: 1,
    name: '枕星河入梦',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    text: '感同身受，学生生活中最珍贵的回忆往往都是陪伴和成长。',
    time: '5分钟前',
    location: '武汉'
  },
  {
    id: 2,
    name: '岛与幕歌',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    text: '回复 枕星河入梦：每天都在成长。',
    time: '2分钟前',
    location: '合肥'
  }
]
</script>

<style scoped>
.comment-thread {
  min-height: 100vh;
  background: #f7f7f7;
  padding-bottom: 120px;
}
.comment-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 16px 12px;
}
.close-btn {
  width: 42px;
  height: 42px;
  border: none;
  background: transparent;
  font-size: 2.1rem;
  color: #222;
  cursor: pointer;
}
.topic-user {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  margin: 0 12px;
}
.topic-user img {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  object-fit: cover;
}
.topic-user span {
  font-weight: 700;
  font-size: 1.08rem;
}
.follow-btn {
  border: none;
  background: linear-gradient(135deg, #ff5d5d, #ff4343);
  color: white;
  font-weight: 700;
  border-radius: 999px;
  min-width: 100px;
  height: 46px;
  cursor: pointer;
}
.content {
  padding: 18px 18px 0;
}
h2 {
  margin: 0;
  font-size: 2.2rem;
  line-height: 1.4;
  letter-spacing: -1px;
}
.hashtags {
  display: flex;
  gap: 12px;
  margin-top: 18px;
  color: #2a60de;
  font-weight: 700;
  font-size: 1.05rem;
}
.time {
  margin-top: 18px;
  color: #777;
  font-size: 1rem;
}
.comment-summary {
  margin-top: 18px;
  font-size: 1.1rem;
  color: #333;
  font-weight: 700;
}
.comment-list {
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.comment-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 10px 0;
  border-bottom: 1px solid #efefef;
}
.avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.comment-body {
  flex: 1;
}
.comment-user {
  font-weight: 700;
  margin-bottom: 4px;
}
.comment-text {
  line-height: 1.7;
  color: #333;
}
.comment-meta {
  margin-top: 8px;
  display: flex;
  gap: 10px;
  color: #8c8c8c;
  font-size: 0.8rem;
}
.bottom-bar {
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: min(100%, 480px);
  padding: 12px 16px 18px;
  background: rgba(247,247,247,0.94);
  backdrop-filter: blur(8px);
  border-top: 1px solid #eaeaea;
}
.bottom-bar input {
  width: 100%;
  height: 52px;
  border: 1px solid #e5e5e5;
  border-radius: 999px;
  padding: 0 16px;
  outline: none;
  background: rgba(255,255,255,0.5);
}
.bottom-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  color: #666;
  font-size: 1rem;
}
.send-btn {
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 50%;
  background: #f0f0f0;
  cursor: pointer;
  font-size: 1.2rem;
}
</style>
