<template>
  <div class="app-frame">
    <header class="mobile-header" v-if="screen !== 'crop' && screen !== 'profile-editor'">
      <div class="brand">小石榴</div>

      <div class="header-actions">
        <button class="icon-btn" aria-label="search">
          <svg viewBox="0 0 24 24"><path d="M10.5 3a7.5 7.5 0 0 1 5.93 12.73l4.27 4.28 1.41-1.41-4.28-4.27A7.5 7.5 0 1 1 10.5 3zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z"/></svg>
        </button>
        <button class="icon-btn" aria-label="menu">
          <svg viewBox="0 0 24 24"><path d="M4 7h16v2H4V7zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"/></svg>
        </button>
      </div>
    </header>

    <main class="mobile-main">
      <FeedView v-if="screen === 'feed'" />
      <PublishView v-else-if="screen === 'publish'" />
      <NotificationsView v-else-if="screen === 'notifications'" />
      <ProfileView v-else-if="screen === 'profile'" />
      <FollowDetailView v-else-if="screen === 'follow-detail'" />
      <CommentThreadView v-else-if="screen === 'comment-thread'" />
      <NoteManageView v-else-if="screen === 'note-manage'" />
      <CropView v-else-if="screen === 'crop'" />
      <ActivityMonitorView v-else-if="screen === 'activity-monitor'" />
      <UserManageView v-else-if="screen === 'user-manage'" />
      <CategoryManageView v-else-if="screen === 'category-manage'" />
      <ProfileEditorView v-else-if="screen === 'profile-editor'" />
    </main>

    <BottomNav
      v-if="screen !== 'crop' && screen !== 'profile-editor'"
      :screen="screen"
      @change="screen = $event"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BottomNav from './components/BottomNav.vue'

import FeedView from './views/FeedView.vue'
import PublishView from './views/PublishView.vue'
import NotificationsView from './views/NotificationsView.vue'
import ProfileView from './views/ProfileView.vue'
import FollowDetailView from './views/FollowDetailView.vue'
import CommentThreadView from './views/CommentThreadView.vue'
import NoteManageView from './views/NoteManageView.vue'
import CropView from './views/CropView.vue'
import ActivityMonitorView from './views/ActivityMonitorView.vue'
import UserManageView from './views/UserManageView.vue'
import CategoryManageView from './views/CategoryManageView.vue'
import ProfileEditorView from './views/ProfileEditorView.vue'

const screen = ref('feed')
</script>

<style scoped>
.app-frame {
  width: 100%;
  max-width: 480px;
  min-height: 100vh;
  margin: 0 auto;
  background: #f7f7f7;
  position: relative;
  color: #1f1f1f;
  box-shadow: 0 0 0 1px rgba(0,0,0,0.02);
}

.mobile-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 18px 12px;
  background: #f7f7f7;
}

.brand {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  border-radius: 14px;
  background: linear-gradient(135deg, #ff5d5d, #ff4545);
  color: white;
  font-size: 1.1rem;
  font-weight: 800;
  box-shadow: 0 10px 18px rgba(255, 90, 90, 0.2);
  letter-spacing: -0.5px;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon-btn {
  width: 42px;
  height: 42px;
  border: none;
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.icon-btn svg {
  width: 26px;
  height: 26px;
  fill: #222;
}

.mobile-main {
  padding-bottom: 84px;
}
</style>
