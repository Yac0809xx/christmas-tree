<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>粉色圣诞树 🎄❄️</title>
<style>
body {
  margin: 0;
  height: 100vh;
  background: radial-gradient(circle at bottom, #1b0034, #000);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Segoe UI', sans-serif;
}

/* 圣诞树整体 */
.tree {
  position: relative;
  width: 0;
  height: 0;
  transform-style: preserve-3d;
  animation: spin 10s linear infinite;
  filter: drop-shadow(0 0 15px #ff99cc);
}

/* 树层 */
.layer {
  position: absolute;
  left: -10vw;
  width: 20vw;
  height: 13vw;
  background: linear-gradient(135deg, #ff77b7, #ffb6d9);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  opacity: 0.9;
  border: 2px solid #ffd6ef;
  transform: rotateX(15deg);
}

.layer:nth-child(1) { top: 0; }
.layer:nth-child(2) { top: 9vw; transform: scale(1.3) rotateX(15deg); }
.layer:nth-child(3) { top: 19vw; transform: scale(1.6) rotateX(15deg); }
.layer:nth-child(4) { top: 31vw; transform: scale(1.9) rotateX(15deg); }

/* 树干 */
.trunk {
  position: absolute;
  bottom: -6vw;
  left: -1.5vw;
  width: 3vw;
  height: 6vw;
  background: #884444;
  border-radius: 0.5vw;
  box-shadow: 0 0 10px #ffccd9;
}

/* 顶部星星 */
.star {
  position: absolute;
  top: -4vw;
  left: -2vw;
  width: 4vw;
  height: 4vw;
  background: gold;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 
                     50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  box-shadow: 0 0 20px gold;
  animation: twinkle 1.5s ease-in-out infinite alternate;
}

/* 星星闪烁 */
@keyframes twinkle {
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0.7; transform: scale(1.2); }
}

/* 树旋转动画 */
@keyframes spin {
  from { transform: rotateY(0deg); }
  to { transform: rotateY(360deg); }
}

/* 雪花 */
.snowflake {
  position: fixed;
  top: -10px;
  color: white;
  font-size: 12px;
  opacity: 0.8;
  pointer-events: none;
  animation: fall linear infinite;
}

@keyframes fall {
  0% { transform: translateX(0) translateY(0); opacity: 1; }
  50% { transform: translateX(20px) translateY(50vh); opacity: 0.8; }
  100% { transform: translateX(-20px) translateY(100vh); opacity: 0; }
}

/* 提示文字 */
#hint {
  position: absolute;
  bottom: 20px;
  color: #ffb6d9;
  font-size: 1rem;
  opacity: 0.8;
  animation: fade 3s ease-in-out infinite alternate;
}

@keyframes fade {
  from { opacity: 0.5; }
  to { opacity: 1; }
}
</style>
</head>
<body>

<div class="tree">
  <div class="star"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="trunk"></div>
</div>

<div id="hint">点击屏幕，让更多雪花飘落 ✨</div>

<!-- 背景音乐 -->
<audio id="bgm" autoplay loop>
  <source src="https://cdn.pixabay.com/download/audio/2022/11/30/audio_45b1cfb6e4.mp3?filename=christmas-vibes-12624.mp3" type="audio/mpeg">
</audio>

<script>
// 创建初始雪花
const snowCount = 80;
for (let i = 0; i < snowCount; i++) {
  createSnowflake();
}

function createSnowflake() {
  const snow = document.createElement('div');
  snow.className = 'snowflake';
  snow.textContent = '❄';
  snow.style.left = Math.random() * 100 + 'vw';
  snow.style.animationDuration = 5 + Math.random() * 5 + 's';
  snow.style.fontSize = 10 + Math.random() * 14 + 'px';
  snow.style.animationDelay = Math.random() * 5 + 's';
  document.body.appendChild(snow);
}

// 点击增加雪花
document.body.addEventListener('click', () => {
  for (let i = 0; i < 30; i++) createSnowflake();
});

// 自动播放音乐（部分浏览器需用户交互）
document.addEventListener('click', () => {
  const bgm = document.getElementById('bgm');
  if (bgm.paused) bgm.play();
});
</script>

</body>
</html>
