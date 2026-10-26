<template>
  <section class="publish-screen">
    <div class="page-top">
      <h1>发布笔记</h1>
      <div class="button-row">
        <button class="red-btn">草稿箱</button>
        <button class="red-btn">笔记管理</button>
      </div>
    </div>

    <div class="upload-box">
      <div class="upload-inner">
        <div class="plus-sign">＋</div>
        <div>添加图片</div>
        <div class="tiny">0/9</div>
        <div class="tiny gray">或拖拽图片到此处</div>
      </div>
    </div>

    <ul class="hint-list">
      <li>最多上传9张图片</li>
      <li>支持 JPG、PNG 格式</li>
      <li>单张图片不超过5MB</li>
      <li>拖拽图片可调整顺序</li>
    </ul>

    <button class="text-btn">＋ 文字配图</button>

    <div class="field">
      <input v-model="title" maxlength="100" placeholder="请输入标题" />
      <span class="counter">{{ title.length }}/100</span>
    </div>

    <div class="field textarea-field">
      <textarea v-model="content" maxlength="2000" placeholder="请输入内容"></textarea>
      <div class="textarea-bottom">
        <div class="emoji-strip">
          <span>@</span>
          <span>😊</span>
        </div>
        <span>{{ content.length }}/2000</span>
      </div>
    </div>

    <div class="category-label">分类</div>
    <div class="select-box">请选择分类</div>

    <div class="tag-box">
      <span>标签</span>
      <span class="tag-badge">＋</span>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const title = ref('')
const content = ref('')
</script>

<style scoped>
.publish-screen {
  padding: 0 18px 100px;
}
.page-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0 20px;
}
.page-top h1 {
  margin: 0;
  font-size: 2.2rem;
  letter-spacing: -1px;
}
.button-row {
  display: flex;
  gap: 10px;
}
.red-btn {
  border: none;
  border-radius: 14px;
  padding: 12px 16px;
  background: linear-gradient(135deg, #ff5d5d, #ff4343);
  color: white;
  font-weight: 700;
  cursor: pointer;
}
.upload-box {
  width: 100%;
  min-height: 220px;
  border: 2px dashed #dfe1e5;
  border-radius: 18px;
  background: rgba(255,255,255,0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
}
.upload-inner { text-align: center; color: #555; }
.plus-sign {
  font-size: 3rem;
  line-height: 1;
  margin-bottom: 8px;
}
.tiny { font-size: 0.9rem; }
.gray { color: #a0a0a0; }
.hint-list {
  margin: 0 0 18px 18px;
  padding-left: 18px;
  color: #666;
  line-height: 1.9;
  font-size: 0.96rem;
}
.text-btn {
  width: 220px;
  height: 48px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #ff5d5d, #ff4040);
  color: white;
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 18px;
}
.field {
  position: relative;
  margin-bottom: 18px;
}
.field input, .field textarea {
  width: 100%;
  border: 1px solid #e3e3e3;
  border-radius: 14px;
  padding: 18px;
  background: rgba(255,255,255,0.35);
  outline: none;
  font-size: 1rem;
  color: #1d1d1d;
}
.field input { height: 62px; }
.field textarea {
  min-height: 180px;
  resize: vertical;
  padding-bottom: 40px;
}
.counter {
  position: absolute;
  right: 18px;
  top: 18px;
  color: #8a8a8a;
  font-size: 0.9rem;
}
.textarea-bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  border-top: 1px solid rgba(0,0,0,0.04);
  color: #8a8a8a;
  font-size: 0.9rem;
}
.emoji-strip {
  display: flex;
  gap: 12px;
  font-size: 1.15rem;
}
.category-label {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 18px 0 12px;
}
.select-box,
.tag-box {
  width: 100%;
  height: 52px;
  border: 1px solid #e2e2e2;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background: rgba(255,255,255,0.2);
  color: #666;
}
.tag-box { margin-top: 14px; }
.tag-badge {
  width: 30px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #f0f0f0;
  color: #333;
  font-size: 1.2rem;
}
</style>
