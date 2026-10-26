<template>
  <div class="editor-overlay">
    <div class="editor-sheet">
      <header class="header">
        <h1>编辑资料</h1>
        <button class="close-btn" @click="$router.back()">×</button>
      </header>

      <div class="field-group">
        <div class="label">MBTI:</div>

        <div class="mbti-box">
          <div class="mbti-input">INTJ</div>
          <button class="remove-btn">×</button>
        </div>

        <div class="mbti-grid">
          <div class="cell">外向/内向</div>
          <div class="cell">感觉/直觉</div>
          <div class="cell red active">T</div>
          <div class="cell">J</div>
          <div class="cell">I</div>
          <div class="cell red">N</div>
          <div class="cell">F</div>
          <div class="cell">P</div>
        </div>
      </div>

      <div class="field-group">
        <div class="label">学历:</div>
        <div class="input-box">硕士</div>
      </div>

      <div class="field-group">
        <div class="label">专业:</div>
        <div class="input-box">市场营销</div>
      </div>

      <div class="field-group">
        <div class="label">兴趣爱好:</div>
        <div class="tag-row">
          <span>冥想 ×</span>
          <span>时尚 ×</span>
        </div>
      </div>

      <div class="footer">
        <button class="cancel-btn" @click="$router.back()">取消</button>
        <button class="save-btn">保存</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.editor-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.29);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.editor-sheet {
  width: min(92vw, 420px);
  background: rgba(255,255,255,0.96);
  border-radius: 20px;
  padding: 20px 18px 16px;
  box-shadow: 0 18px 30px rgba(0,0,0,0.16);
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.header h1 {
  margin: 0;
  font-size: 2.2rem;
  letter-spacing: -1px;
}
.close-btn {
  width: 40px;
  height: 40px;
  border: none;
  background: rgba(0,0,0,0.04);
  border-radius: 50%;
  font-size: 2rem;
  cursor: pointer;
}
.field-group {
  margin-bottom: 18px;
}
.label {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 12px;
}
.mbti-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  border: 1px solid #e2e2e2;
  border-radius: 12px;
  padding: 0 14px;
  background: rgba(255,255,255,0.4);
}
.mbti-input {
  font-size: 1.1rem;
  font-weight: 700;
}
.remove-btn {
  border: none;
  background: transparent;
  font-size: 1.6rem;
  color: #666;
  cursor: pointer;
}
.mbti-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 14px;
}
.cell {
  height: 54px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f2f2f2;
  font-size: 1.1rem;
  color: #333;
  font-weight: 700;
}
.cell.red {
  background: linear-gradient(135deg, #ff5d5d, #ff4040);
  color: white;
}
.input-box {
  width: 100%;
  height: 56px;
  border: 1px solid #e4e4e4;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 0 14px;
  background: rgba(255,255,255,0.3);
  color: #333;
  font-size: 1.02rem;
}
.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.tag-row span {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #d9d9d9;
  border-radius: 999px;
  padding: 10px 14px;
  background: rgba(255,255,255,0.2);
  color: #333;
}
.footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 18px;
}
.cancel-btn,
.save-btn {
  height: 52px;
  min-width: 110px;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
}
.cancel-btn {
  background: #f0f0f0;
  color: #333;
}
.save-btn {
  background: linear-gradient(135deg, #ff5d5d, #ff4040);
  color: white;
}
</style>
