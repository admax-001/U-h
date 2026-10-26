<template>
  <div class="crop-screen">
    <header class="crop-header">
      <h1>裁剪头像</h1>
      <button class="close-btn" @click="$router.back()">×</button>
    </header>

    <div class="crop-stage">
      <div class="crop-box">
        <div class="crop-frame">
          <div class="guide-x"></div>
          <div class="guide-y"></div>
        </div>
      </div>
    </div>

    <div class="crop-footer">
      <button class="cancel-btn" @click="$router.back()">取消</button>
      <button class="confirm-btn">确认裁剪</button>
    </div>
  </div>
</template>

<style scoped>
.crop-screen {
  min-height: 100vh;
  background: rgba(255,255,255,0.94);
  padding: 16px 16px 24px;
}
.crop-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}
.crop-header h1 {
  margin: 0;
  font-size: 2.2rem;
  letter-spacing: -1px;
}
.close-btn {
  width: 42px;
  height: 42px;
  border: none;
  background: transparent;
  font-size: 2.3rem;
  cursor: pointer;
  color: #333;
}
.crop-stage {
  width: 100%;
  background: linear-gradient(135deg, #f3d348, #f0d485);
  border-radius: 18px;
  overflow: hidden;
  aspect-ratio: 1.03;
  position: relative;
  border: 1px solid #efd98d;
}
.crop-box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 82%;
  height: 72%;
  border: 3px solid #1d8ef0;
  background: rgba(255,255,255,0.08);
  box-shadow: inset 0 0 0 999px rgba(255,255,255,0.06);
}
.crop-frame {
  position: absolute;
  inset: 0;
}
.guide-x,
.guide-y {
  position: absolute;
  background: rgba(29,142,240,0.8);
}
.guide-x {
  left: 0;
  right: 0;
  top: 50%;
  height: 2px;
  transform: translateY(-50%);
}
.guide-y {
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  transform: translateX(-50%);
}
.crop-footer {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 22px;
}
.cancel-btn,
.confirm-btn {
  flex: 1;
  height: 54px;
  border-radius: 16px;
  font-weight: 700;
  cursor: pointer;
}
.cancel-btn {
  border: 1px solid #d9d9d9;
  background: transparent;
  color: #333;
}
.confirm-btn {
  border: none;
  background: linear-gradient(135deg, #ff5d5d, #ff4040);
  color: white;
  box-shadow: 0 12px 18px rgba(255, 85, 85, 0.22);
}
</style>
