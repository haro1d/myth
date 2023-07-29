<template>
    <div id="home">
        <div class="home-bg">
            <div class="text_content">
                <div class="line1">
                    I'm Ben.
                    <svg t="1677567386903"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12653" width="50" height="50"><path d="M512 74.666667c241.066667 0 437.333333 196.266667 437.333333 437.333333S753.066667 949.333333 512 949.333333 74.666667 753.066667 74.666667 512 270.933333 74.666667 512 74.666667z m206.933333 529.066666c-12.8-10.666667-34.133333-8.533333-44.8 4.266667-46.933333 57.6-100.266667 85.333333-162.133333 85.333333s-115.2-27.733333-162.133333-85.333333c-10.666667-12.8-32-14.933333-44.8-4.266667s-14.933333 32-4.266667 44.8c59.733333 70.4 130.133333 106.666667 211.2 106.666667s151.466667-36.266667 211.2-106.666667c10.666667-12.8 8.533333-32-4.266667-44.8zM362.666667 362.666667c-23.466667 0-42.666667 19.2-42.666667 42.666666v66.133334c2.133333 21.333333 19.2 40.533333 42.666667 40.533333s42.666667-19.2 42.666666-42.666667v-66.133333c-2.133333-23.466667-19.2-40.533333-42.666666-40.533333z m298.666666 0c-23.466667 0-42.666667 19.2-42.666666 42.666666v66.133334c2.133333 21.333333 19.2 40.533333 42.666666 40.533333s42.666667-19.2 42.666667-42.666667v-66.133333c-2.133333-23.466667-19.2-40.533333-42.666667-40.533333z" fill="rgb(208, 220, 241)" p-id="12654"></path></svg>
                </div>
                <div class="line2">Welcome to my ***</div>
                <div class="line3"></div>
                <div class="line4">CZCZXCZXCZXCZXCCZCZXCZXCZXCZXCCZCZXCZXCZXCZXC</div>
                <div class="line5">一个产品设计界的攀登者</div>
                <div class="line6">拥有一颗毫无边界的好奇心和一股心无旁骛的探索力</div>
                <div class="icon">
                    <div v-for="(item,index) in iconArr" @mouseenter="showTooltip(item)" @mouseleave="exitTootip(item)" @click="toPage(item.url)">
                        <img :src="item.src" alt="" />
                        <transition name="tool">
                            <div class="tooltip" v-html="item.html" v-if="item.showTooltip && item.html"></div>
                        </transition>
                    </div>
                </div>
            </div>
            <div id="three"></div>
            <div id="circle"></div>
        </div>
        
    </div>
</template>

<script setup>
import { onMounted, ref, toRefs, reactive } from 'vue';
import { useRouter, useRoute } from "vue-router";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

onMounted(() => {
    threeInit()
    createSlices(10);
})

const router = useRouter()
function createSlices(n) {
  const circle = document.getElementById("circle");
  while (circle.firstChild) {
    circle.removeChild(circle.firstChild);
  }

  for (let i = 0; i < n; i++) {
    const slice = document.createElement("div");
    slice.className = "slice";
    slice.style.backgroundColor = getRandomColor();
    // slice.style.transformOrigin = "50% 100%";
    slice.style.transform = `rotate(${360 / n * i}deg)`;
    slice.style['clip-path'] = `polygon(50% 50%, 50% 0, 100% 0)`;
    if(n>=4 && n<8){
        const perc = ((1 - Math.tan((90 - (360 / n)) * Math.PI / 180))) / 2
        //扇形数量[4,8]，角度[45,90]
        slice.style['clip-path'] = `polygon(50% 50%, 50% 0, 100% 0, 100% ${100 * perc}%)`;
    }
    else if(n>=8){
        const perc = ((Math.tan((360 / n) * Math.PI / 180))+1) / 2
        //扇形数量大于等于8的时候，角度<=45度，才可以用这个算法
        slice.style['clip-path'] = `polygon(50% 50%, 50% 0, ${100 * perc}% 0)`;
    }
    const textElement = document.createElement("div");
    textElement.innerHTML = "文案" + i; // 替换为你想要的文案内容
    textElement.style['writing-mode'] = 'vertical-rl'
    textElement.style.color = '#fff'
    textElement.style.position = 'relative'
    textElement.style.top = '-6px'
    textElement.style.width = '136px'
    textElement.style.transform = 'rotate(16deg)'
    slice.appendChild(textElement);

     // 添加点击事件
    slice.addEventListener("click", function() {
      handleClick(i);
    });
    circle.appendChild(slice);
  }
}
function handleClick(i){
    console.log("i", i);
}
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



const threeInit = ()=>{
    const scene = new THREE.Scene();
    let three = document.getElementById('three')
    let width = three.offsetWidth; //窗口宽度
    let height = three.offsetHeight; //窗口高度
    const camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer({
        alpha: true
    });
    renderer.setSize( width, height );
    three.appendChild( renderer.domElement );

    const geometry = new THREE.BoxGeometry( 1.5, 1, 1 );
    let material = new THREE.MeshPhongMaterial({
        color: 0x03DA06,
        specular:0x025803,
        shininess:30,//高光部分的亮度，默认30
    });
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    // 平行光
    var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    // 设置光源的方向：通过光源position属性和目标指向对象的position属性计算
    directionalLight.position.set(160, 100, 150);
    // 方向光指向对象网格模型mesh2，可以不设置，默认的位置是0,0,0
    directionalLight.target = cube;
    scene.add(directionalLight);

    cube.rotateX(-12)
    camera.position.z = 2;
    let T0 = new Date();//上次时间
    function render() {
        let T1 = new Date();//本次时间
        let t = T1-T0;//时间差
        T0 = T1;//把本次时间赋值给上次时间
        requestAnimationFrame(render);
        renderer.render(scene,camera);//执行渲染操作
        cube.rotateY(0.0005*t);//旋转角速度0.001弧度每毫秒
    }
    render();
    let controls = new OrbitControls(camera,renderer.domElement);//创建控件对象
    controls.addEventListener('change', render);//监听鼠标、键盘事件
}
const showTooltip = (item)=>{
    item.showTooltip = true
}
const exitTootip = (item)=>{
    item.showTooltip = false
}
const toPage = (url)=>{
    if(url){
        router.push(url)
    }
}
let state = reactive({
    iconArr: [
        { src: '/img/pen.svg' ,    showTooltip: false, url: 'note' },
        { src: '/img/front.svg' ,  showTooltip: false, url: 'front' },
        { src: '/img/music.svg' ,  showTooltip: false, url: 'music', html: '暂无' },
        { src: '/img/wechat.svg' , showTooltip: false, html: '暂无' },
    ]
})
const { iconArr } = toRefs(state)
</script>

<style lang="less">
.slice {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
cursor: pointer;
    &:hover{
        filter: brightness(80%);
    }
}
</style>
<style lang="less" scoped>
#home{
    height: 100vh;
    width: 100%;
    overflow: hidden;
}
.home-bg{
    position: relative;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(30deg, rgb(255, 123, 0), rgb(224, 255, 182));
    border-bottom: 5px solid rgb(239, 194, 98);
}
.text_content{
    position: absolute;
    left: 60px;
    bottom: 40px;
    color: #fff;
    // z-index: 1;
    .line1{
        display: flex;
        align-items: center;
        gap: 16px;
        font-size: 40px;
        margin-bottom: 16px;
        color: rgb(208, 220, 241);
        font-family: 'bird';
        
    }
    .line2{
        font-size: 54px;
        margin-bottom: 12px;
        font-weight: 600;
        color: #FFFCF2;
        background: linear-gradient(180deg, #4CE1FF 0%, #3D72FF 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: 'liuguang';
        
    }
    .line3{
        width: 270px;
        height: 3px;
        background-image: linear-gradient(to right, #3D72FF, transparent);
        margin-bottom: 24px;
    }
    .line4{
        margin-bottom: 20px;
        color: rgb(206, 206, 206);
    }
    .line5, .line6{
        color: rgb(255, 255, 255);
        line-height: 36px;
        font-size: 20px;
        font-family: 'shoujin';
    }
    .icon{
        display: flex;
        gap: 54px;
        margin-top: 70px;
        >div{
            position: relative;
            height: 84px;
            width:  84px;
            border: 1px solid rgba(255, 255, 255, 0.65);
            border-radius: 50%;
            padding: 24px;
            cursor: pointer;
            transition: .3s;
            box-shadow: 0 4px 8px 6px rgba(255, 166, 0, 0.7);
            &:hover{
                background: rgb(255, 115, 0);
            }
            &:hover img{
                animation: myRotate 2.5s infinite linear;
            }
            img{
                height: 100%;
                width: 100%;
                object-fit: contain;
            }
            .tooltip{
                position: absolute;
                bottom: 100px;
                left: 50%;
                transform: translateX(-50%);
                width: 160px;
                min-height: 110px;
                background-image: linear-gradient(to bottom, rgb(255, 230, 0), rgb(255, 115, 0));
                border: 1px solid rgb(255, 115, 0);
                border-radius: 6px;
                padding: 16px;
                &::after{
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 50%;
                    height: 10px;
                    width:  10px;
                    border-radius: 4px;
                    background: rgb(255, 115, 0);
                    transform: translateX(-50%) rotate(45deg);
                    // transform-origin: center center;
                    z-index: 10;

                }
            }
        }
    }
}
@keyframes myRotate {
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}
#three{
    width:  400px;
    height: 400px;
    // background: transparent;
    float: right;
    cursor: pointer;
}

/* 进入之前和离开后的样式 */
.tool-enter-from,
.tool-leave-to {
  opacity: 0;
}
/* 离开和进入过程中的样式 */
.tool-enter-active,
.tool-leave-active {
  /* 添加过渡动画 */
  transition: opacity .5s ease;
}
/* 进入之后和离开之前的样式 */
.tool-enter-to,
.tool-leave-from {
  opacity: 1;
}
#circle {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}


</style>