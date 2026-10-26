<template>
  <section class="user-manage">
    <header class="header">
      <div class="title-wrap">
        <h1>用户管理</h1>
        <p>管理用户账户和权限</p>
      </div>
      <div class="header-actions">
        <button class="icon-btn small">◉</button>
        <button class="icon-btn small">☾</button>
        <button class="icon-btn small">☰</button>
      </div>
    </header>

    <div class="toolbar">
      <button class="action-btn red"><span>🗑</span> 批量删除</button>
      <button class="action-btn success"><span>＋</span> 新增用户</button>
      <button class="action-btn gray"><span>⟳</span> 刷新</button>
    </div>

    <div class="table-wrap">
      <table class="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>小石榴号</th>
            <th>用户昵称</th>
            <th>头像</th>
            <th>简介</th>
            <th>地区</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.nickname }}</td>
            <td><img :src="user.avatar" alt="" /></td>
            <td>{{ user.bio }}</td>
            <td>{{ user.region }}</td>
            <td class="action-col">
              <button class="mini-btn">编辑</button>
              <button class="mini-btn danger">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="filter-drawer">
      <div class="drawer-header">
        <h3>筛选条件</h3>
        <button class="close-btn">×</button>
      </div>

      <div class="field">
        <label>账号状态</label>
        <div class="select-box">账号状态</div>
      </div>
      <div class="field">
        <label>小石榴号</label>
        <input type="text" placeholder="搜索小石榴号" />
      </div>
      <div class="field">
        <label>昵称</label>
        <input type="text" placeholder="搜索昵称" />
      </div>
      <div class="field">
        <label>属地</label>
        <input type="text" placeholder="搜索属地" />
      </div>

      <button class="submit-btn">应用筛选</button>
      <button class="clear-btn">清空条件</button>
    </div>
  </section>
</template>

<script setup>
const users = [
  {
    id: 1,
    username: 'user001',
    nickname: '云鲸漫游',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    bio: '个人简介',
    region: '本地'
  },
  {
    id: 2,
    username: 'user002',
    nickname: '芋圆小甜',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    bio: '个人简介',
    region: '上海'
  },
  {
    id: 3,
    username: 'user003',
    nickname: '晚风扑满怀',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    bio: '个人简介',
    region: '广州'
  }
]
</script>

<style scoped>
.user-manage {
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
  margin: 18px 0 20px;
}
.action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 52px;
  border: none;
  border-radius: 14px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
}
.action-btn.red {
  background: linear-gradient(135deg, #ff5a5a, #ff4040);
  color: white;
}
.action-btn.success {
  background: linear-gradient(135deg, #2ecf80, #1ab06c);
  color: white;
}
.action-btn.gray {
  background: #d9d9d9;
  color: #333;
}
.table-wrap {
  border-radius: 18px;
  overflow: hidden;
  background: rgba(255,255,255,0.25);
  border: 1px solid #ececec;
}
.user-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 900px;
}
.user-table th,
.user-table td {
  padding: 16px 12px;
  text-align: left;
  border-bottom: 1px solid #ededed;
  vertical-align: middle;
  color: #333;
  white-space: nowrap;
}
.user-table th {
  background: #f5f5f5;
  font-size: 0.9rem;
}
.user-table td img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
}
.action-col {
  display: flex;
  gap: 8px;
}
.mini-btn {
  border: 1px solid #d8d8d8;
  border-radius: 10px;
  background: white;
  padding: 8px 12px;
  cursor: pointer;
}
.mini-btn.danger {
  background: #ff5c5c;
  color: white;
  border-color: #ff5c5c;
}
.filter-drawer {
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: min(100%, 480px);
  padding: 22px 18px 18px;
  background: rgba(255,255,255,0.98);
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -10px 24px rgba(0,0,0,0.08);
  z-index: 2000;
}
.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.drawer-header h3 {
  margin: 0;
  font-size: 2rem;
  letter-spacing: -1px;
}
.close-btn {
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  font-size: 2.2rem;
  cursor: pointer;
  color: #333;
}
.field { margin-bottom: 18px; }
.field label {
  display: block;
  margin-bottom: 10px;
  font-size: 1.03rem;
  font-weight: 700;
  color: #333;
}
.select-box,
.field input {
  width: 100%;
  height: 54px;
  border: 1px solid #e3e3e3;
  border-radius: 12px;
  background: rgba(255,255,255,0.4);
  padding: 0 14px;
  color: #333;
  outline: none;
}
.field input::placeholder { color: #999; }
.submit-btn,
.clear-btn {
  width: 100%;
  height: 54px;
  border: none;
  border-radius: 14px;
  font-weight: 700;
  cursor: pointer;
}
.submit-btn {
  background: linear-gradient(135deg, #ff5d5d, #ff4040);
  color: white;
  margin-top: 12px;
}
.clear-btn {
  background: #f1f1f1;
  color: #333;
  margin-top: 12px;
}
</style>
