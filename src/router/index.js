import { createRouter, createWebHistory } from 'vue-router'

import FeedView from '../views/FeedView.vue'
import PublishView from '../views/PublishView.vue'
import NotificationsView from '../views/NotificationsView.vue'
import ProfileView from '../views/ProfileView.vue'
import FollowDetailView from '../views/FollowDetailView.vue'
import CommentThreadView from '../views/CommentThreadView.vue'
import NoteManageView from '../views/NoteManageView.vue'
import CropView from '../views/CropView.vue'
import ActivityMonitorView from '../views/ActivityMonitorView.vue'
import UserManageView from '../views/UserManageView.vue'
import CategoryManageView from '../views/CategoryManageView.vue'
import ProfileEditorView from '../views/ProfileEditorView.vue'

const routes = [
  { path: '/', name: 'feed', component: FeedView },
  { path: '/publish', name: 'publish', component: PublishView },
  { path: '/notifications', name: 'notifications', component: NotificationsView },
  { path: '/profile', name: 'profile', component: ProfileView },
  { path: '/profile/detail', name: 'profile-detail', component: FollowDetailView },
  { path: '/comment-thread', name: 'comment-thread', component: CommentThreadView },
  { path: '/notes/manage', name: 'note-manage', component: NoteManageView },
  { path: '/crop', name: 'crop', component: CropView },
  { path: '/activity-monitor', name: 'activity-monitor', component: ActivityMonitorView },
  { path: '/user-manage', name: 'user-manage', component: UserManageView },
  { path: '/category-manage', name: 'category-manage', component: CategoryManageView },
  { path: '/profile-editor', name: 'profile-editor', component: ProfileEditorView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
