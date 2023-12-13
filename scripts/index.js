const 箭头组 = document.getElementsByClassName("箭头");
const 左箭头 = 箭头组[0];
const 右箭头 = 箭头组[1];
const 图片长廊 = document.querySelector(".图片长廊");
const 图片宽度 = 800;
const 初始索引 = 5;
const 图片数量 = 4;
let 当前索引 = 初始索引;

const 初始位移 = 图片宽度 / 2;
const 移动时长 = 250;

const 背景图 = document.querySelector(".背景图");
const 背景图路径 = "./图片/index/";
背景图.src = `${背景图路径}3.webp`;

const 自动播放间隔 = 3000;
let 自动播放 = setInterval(向后移动, 自动播放间隔);

左箭头.addEventListener("click", () => {
  clearInterval(自动播放);
  setTimeout(() => {
    自动播放 = setInterval(向后移动, 自动播放间隔);
  }, 移动时长);
  向前移动();
});

右箭头.addEventListener("click", () => {
  clearInterval(自动播放);
  setTimeout(() => {
    自动播放 = setInterval(向后移动, 自动播放间隔);
  }, 移动时长);
  向后移动();
});

function 向后移动() {
  图片长廊.style.transition = `${移动时长}ms`;
  当前索引++;
  图片长廊.style.translate = `${初始位移 - (当前索引 - 初始索引) * 图片宽度}px`;
  右箭头.style.pointerEvents = "none";
  switch (当前索引) {
    case 0:
    case 4:
    case 8:
      背景图.src = `${背景图路径}2.webp`;
      break;
    case 1:
    case 5:
    case 9:
      背景图.src = `${背景图路径}3.webp`;
      break;
    case 2:
    case 6:
    case 10:
      背景图.src = `${背景图路径}4.webp`;
      break;
    case 3:
    case 7:
    case 11:
      背景图.src = `${背景图路径}5.webp`;
      break;
  }
  setTimeout(() => {
    右箭头.style.pointerEvents = "all";
    if (当前索引 === 初始索引 + 图片数量) {
      当前索引 = 初始索引;
      图片长廊.style.transition = "0ms";
      图片长廊.style.translate = `${初始位移}px`;
    }
  }, 移动时长);
}

function 向前移动() {
  图片长廊.style.transition = `${移动时长}ms`;
  当前索引--;
  图片长廊.style.translate = `${初始位移 - (当前索引 - 初始索引) * 图片宽度}px`;
  左箭头.style.pointerEvents = "none";
  switch (当前索引) {
    case 0:
    case 4:
    case 8:
      背景图.src = `${背景图路径}2.webp`;
      break;
    case 1:
    case 5:
    case 9:
      背景图.src = `${背景图路径}3.webp`;
      break;
    case 2:
    case 6:
    case 10:
      背景图.src = `${背景图路径}4.webp`;
      break;
    case 3:
    case 7:
    case 11:
      背景图.src = `${背景图路径}5.webp`;
      break;
  }
  setTimeout(() => {
    左箭头.style.pointerEvents = "all";
    if (当前索引 === 初始索引 - 图片数量) {
      当前索引 = 初始索引;
      图片长廊.style.transition = "0ms";
      图片长廊.style.translate = `${初始位移}px`;
    }
  }, 移动时长);
}
