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

左箭头.addEventListener("click", 向前移动);
右箭头.addEventListener("click", 向后移动);

function 向后移动() {
  图片长廊.style.transition = `${移动时长}ms`;
  当前索引++;
  图片长廊.style.translate = `${初始位移 - (当前索引 - 初始索引) * 图片宽度}px`;
  右箭头.style.pointerEvents = "none";
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
  图片长廊.style.translate = `${初始位移 + (当前索引 - 初始索引) * 图片宽度}px`;
  左箭头.style.pointerEvents = "none";
  setTimeout(() => {
    左箭头.style.pointerEvents = "all";
    if (当前索引 === 初始索引 - 图片数量) {
      当前索引 = 初始索引;
      图片长廊.style.transition = "0ms";
      图片长廊.style.translate = `${初始位移}px`;
    }
  }, 移动时长);
}
