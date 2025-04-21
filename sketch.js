let img1, img2;
let button1, button2, button3, button4;
let showAnimation1 = false, showAnimation2 = false, showAnimation3 = false, showAnimation4 = false;
let frame = 0;
let spriteWidth1 = 74, spriteHeight1 = 93, spriteWidth2 = 63, spriteHeight2 = 88;
let spriteWidth3 = 66, spriteHeight3 = 90, spriteWidth4 = 65, spriteHeight4 = 90;
let totalFrames = 6, animationSpeed = 16;
let iframe, spriteSheet1, spriteSheet2, spriteSheet3, spriteSheet4;
let framesPerRow1 = 8, framesPerRow2 = 6, framesPerRow3 = 6, framesPerRow4 = 9;
let stars = [];
let closeButton;
let fireworks = []; // 用於存儲煙火
let ufos = []; // 用于存储多个飞碟
let showUFO = true; // 控制飛碟顯示
let ufoImage; // 用於存儲飛碟圖片
let dropdown; // 用於存儲下拉式選單

function preload() {
  spriteSheet1 = loadImage('1111.png');
  spriteSheet2 = loadImage('4444.png');
  spriteSheet3 = loadImage('5555.png');
  spriteSheet4 = loadImage('7777.png');
  ufoImage = loadImage('飛碟.png'); // 確保路徑正確
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // 初始化星星
  for (let i = 0; i < 100; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      size: random(2, 5),
      brightness: random(150, 255)
    });
  }

  // 初始化飛碟
  for (let i = 0; i < 3; i++) {
    ufos.push({
      x: random(width),
      y: random(height / 2),
      vx: random(1, 3),
      vy: random(1, 3),
      size: 100
    });
  }

  // 修改第一個按鈕
  button1 = createButton('自我介紹');
  button1.position(50, 50);
  button1.size(100, 50);
  button1.style('font-size', '20px');
  button1.style('background-color', '#e3d5ca');
  button1.style('border', 'none');
  button1.style('border-radius', '25px');
  button1.mouseOver(() => showAnimation1 = true); // 保留動畫顯示
  button1.mouseOut(() => showAnimation1 = false);
  button1.mousePressed(() => {
    // 創建一個模擬視窗的對話框
    let dialog = createDiv();
    dialog.style('position', 'absolute');
    dialog.style('width', '600px'); // 統一視窗寬度
    dialog.style('height', '400px'); // 統一視窗高度
    dialog.style('background-image', 'url("000.webp")'); // 設置背景為 000.webp
    dialog.style('background-size', 'cover');
    dialog.style('border', '2px solid #000000');
    dialog.style('border-radius', '10px');
    dialog.style('box-shadow', '0 4px 8px rgba(0, 0, 0, 0.2)');
    dialog.style('padding', '20px');
    dialog.style('text-align', 'center');
    dialog.style('font-size', '20px');
    dialog.style('color', '#000000');
    dialog.position((windowWidth - 600) / 2, (windowHeight - 400) / 2); // 居中顯示

    // 添加圖片 00.png 放在視窗框的上方
    let img = createImg('00.png', 'Header Image');
    img.style('width', '200px');
    img.style('height', '200px');
    img.style('display', 'block');
    img.style('margin', '0 auto -20px auto'); // 調整位置到視窗框上方
    img.parent(dialog);

    // 添加自我介紹內容
    let content = createDiv('大家好，我是教科一B 詹子萱');
    content.style('margin-top', '20px');
    content.style('font-size', '24px');
    content.style('color', '#000000');
    content.parent(dialog);

    // 添加一個關閉按鈕
    let closeButton = createButton('關閉');
    closeButton.style('position', 'absolute');
    closeButton.style('left', '50%');
    closeButton.style('transform', 'translateX(-50%)');
    closeButton.style('bottom', '20px');
    closeButton.style('padding', '10px 20px');
    closeButton.style('background-color', '#f44336');
    closeButton.style('color', '#ffffff');
    closeButton.style('border', 'none');
    closeButton.style('border-radius', '5px');
    closeButton.style('cursor', 'pointer');
    closeButton.parent(dialog);
    closeButton.mousePressed(() => {
      dialog.remove(); // 關閉視窗
    });
  });

  // 修改第二個按鈕為下拉式選單
  dropdown = createSelect();
  dropdown.position(180, 50);
  dropdown.size(120, 50);
  dropdown.style('font-size', '20px');
  dropdown.style('background-color', '#b0c4b1');
  dropdown.style('border', 'none');
  dropdown.style('border-radius', '25px');
  dropdown.option('選擇內容');
  dropdown.option('教科介紹');
  dropdown.option('作品測驗');
  dropdown.mouseOver(() => showAnimation2 = true); // 保留動畫顯示
  dropdown.mouseOut(() => showAnimation2 = false);
  dropdown.changed(() => {
    if (iframe) iframe.remove(); // 移除之前的 iframe
    let selected = dropdown.value();
    if (selected === '教科介紹') {
      iframe = createElement('iframe', '');
      iframe.attribute('src', 'https://melody65.github.io/20250317/');
      iframe.size(Math.min(1200, windowWidth - 150), windowHeight - 50);
      iframe.position((windowWidth - iframe.width) / 2 + 120, 10);
    } else if (selected === '作品測驗') {
      iframe = createElement('iframe', '');
      iframe.attribute('src', 'https://melody65.github.io/20250310/');
      iframe.size(Math.min(1200, windowWidth - 150), windowHeight - 50);
      iframe.position((windowWidth - iframe.width) / 2 + 120, 10);
    }
  });

  button3 = createButton('筆記說明');
  button3.position(50, 250);
  button3.size(100, 50);
  button3.style('font-size', '20px');
  button3.style('background-color', '#edafb8');
  button3.style('border', 'none');
  button3.style('border-radius', '25px');
  button3.mouseOver(() => showAnimation3 = true);
  button3.mouseOut(() => showAnimation3 = false);
  button3.mousePressed(() => {
    if (iframe) iframe.remove();
    iframe = createElement('iframe', '');
    iframe.attribute('src', 'https://hackmd.io/@7gWLWDkkQKqLdkHgvclZTA/ryeHyyXnake');
    iframe.size(1200, windowHeight - 50);
    iframe.position((windowWidth - iframe.width) / 2 + 120, 10);
  });

  button4 = createButton('教學影片');
  button4.position(180, 250);
  button4.size(100, 50);
  button4.style('font-size', '20px');
  button4.style('background-color', '#adb5bd');
  button4.style('border', 'none');
  button4.style('border-radius', '25px');
  button4.mouseOver(() => showAnimation4 = true);
  button4.mouseOut(() => showAnimation4 = false);
  button4.mousePressed(() => {
    if (iframe) iframe.remove(); // 移除之前的 iframe 或其他內容

    // 創建一個 iframe 顯示影片
    iframe = createElement('iframe', '');
    iframe.attribute('src', 'https://cfchen58.synology.me/%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%882024/B2/week8/20250407_101522.mp4');
    iframe.size(Math.min(1200, windowWidth - 150), windowHeight - 50); // 設置與教科介紹相同大小
    iframe.position((windowWidth - iframe.width) / 2 + 120, 10); // 居中顯示
  });

  closeButton = createButton('X');
  closeButton.position(10, windowHeight - 50); // 移動到左下角
  closeButton.size(30, 30);
  closeButton.style('font-size', '16px');
  closeButton.style('background-color', '#fdd835');
  closeButton.style('border', 'none');
  closeButton.style('border-radius', '15px');
  closeButton.mousePressed(() => {
    if (iframe) iframe.remove();
  });

  // 初始化三个飞碟
  for (let i = 0; i < 3; i++) {
    ufos.push({
      x: random(width),
      y: random(height / 2),
      vx: random(1, 3),
      vy: random(1, 3),
      size: 100 // 飞碟图片大小
    });
  }

  // 初始化星星
  for (let i = 0; i < 100; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      size: random(2, 5),
      brightness: random(150, 255)
    });
  }
}

function draw() {
  background('#4a5759');

  // 绘制背景中的星星
  noStroke();
  for (let star of stars) {
    fill(star.brightness);
    ellipse(star.x, star.y, star.size);
  }

  let currentFrame = Math.floor(frame / animationSpeed) % totalFrames;
  let sx1 = (currentFrame % framesPerRow1) * spriteWidth1;
  let sy1 = Math.floor(currentFrame / framesPerRow1) * spriteHeight1;
  let sx2 = (currentFrame % framesPerRow2) * spriteWidth2;
  let sy2 = Math.floor(currentFrame / framesPerRow2) * spriteHeight2;
  let sx3 = (currentFrame % framesPerRow3) * spriteWidth3;
  let sy3 = Math.floor(currentFrame / framesPerRow3) * spriteHeight3;
  let sx4 = (currentFrame % framesPerRow4) * spriteWidth4;
  let sy4 = Math.floor(currentFrame / framesPerRow4) * spriteHeight4;

  if (showAnimation1) {
    image(spriteSheet1, 50 + (button1.width - spriteWidth1) / 2, 50 + button1.height + 10, spriteWidth1, spriteHeight1, sx1, sy1, spriteWidth1, spriteHeight1);
  }

  if (showAnimation2) {
    image(spriteSheet2, 180 + (dropdown.width - spriteWidth2) / 2, 50 + dropdown.height + 10, spriteWidth2, spriteHeight2, sx2, sy2, spriteWidth2, spriteHeight2);
  }

  if (showAnimation3) {
    image(spriteSheet3, 50 + (button3.width - spriteWidth3) / 2, 250 + button3.height + 10, spriteWidth3, spriteHeight3, sx3, sy3, spriteWidth3, spriteHeight3);
  }

  if (showAnimation4) {
    image(spriteSheet4, 180 + (button4.width - spriteWidth4) / 2, 250 + button4.height + 10, spriteWidth4, spriteHeight4, sx4, sy4, spriteWidth4, spriteHeight4);
  }

  // 繪製煙火
  for (let i = fireworks.length - 1; i >= 0; i--) {
    let firework = fireworks[i];
    firework.update();
    firework.show();
    if (firework.isDone()) {
      fireworks.splice(i, 1);
    }
  }

  // 隨機生成煙火
  if (random(1) < 0.05) {
    fireworks.push(new Firework());
  }

  // 绘制和更新所有飞碟
  for (let ufo of ufos) {
    image(ufoImage, ufo.x, ufo.y, ufo.size, ufo.size / 2); // 使用飞碟图片
    ufo.x += ufo.vx;
    ufo.y += ufo.vy;

    // 反弹边界
    if (ufo.x > width || ufo.x < 0) ufo.vx *= -1;
    if (ufo.y > height || ufo.y < 0) ufo.vy *= -1;
  }

  frame++;
}

function mousePressed() {
  // 在滑鼠点击位置生成一个更丰富的烟火
  let richFirework = new RichFirework(mouseX, mouseY);
  fireworks.push(richFirework);
}

// 原本的烟火类保持不变
class Firework {
  constructor(x = random(width), y = random(height / 2)) {
    this.x = x;
    this.y = y;
    this.particles = [];
    for (let i = 0; i < 50; i++) { // 原本的粒子数量
      this.particles.push(new Particle(this.x, this.y));
    }
  }

  update() {
    for (let particle of this.particles) {
      particle.update();
    }
  }

  show() {
    for (let particle of this.particles) {
      particle.show();
    }
  }

  isDone() {
    return this.particles.every(p => p.isDone());
  }
}

// 新增更丰富的烟火类
class RichFirework {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.particles = [];
    for (let i = 0; i < 150; i++) { // 增加粒子数量
      this.particles.push(new RichParticle(this.x, this.y));
    }
  }

  update() {
    for (let particle of this.particles) {
      particle.update();
    }
  }

  show() {
    for (let particle of this.particles) {
      particle.show();
    }
  }

  isDone() {
    return this.particles.every(p => p.isDone());
  }
}

// 原本的粒子类保持不变
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-2, 2);
    this.vy = random(-2, 2);
    this.alpha = 255;
    this.size = random(2, 4);
    this.color = color(255, 255, 255, this.alpha); // 白色粒子
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
    this.color.setAlpha(this.alpha);
  }

  show() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }

  isDone() {
    return this.alpha <= 0;
  }
}

// 新增更丰富的粒子类
class RichParticle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-5, 5); // 更大的速度范围
    this.vy = random(-5, 5);
    this.alpha = 255;
    this.size = random(4, 8); // 更大的粒子大小
    this.color = color(random(255), random(255), random(255), this.alpha); // 随机颜色
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 4; // 粒子逐渐消失
    this.color.setAlpha(this.alpha);
  }

  show() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }

  isDone() {
    return this.alpha <= 0;
  }
}


