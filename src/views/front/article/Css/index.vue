<template>
    <div class="flex justify-between">
        <div class="left-wrap">
            <div class="font-control">
                <el-icon class="calc-btn" size="32px" @click="changeSpeed('min')">
                    <Minus />
                </el-icon>
                <el-icon size="44px" @click="controlFont">
                    <component :is="timer ? 'VideoPause' : 'VideoPlay'"></component>
                </el-icon>
                <el-icon class="calc-btn" size="32px"  @click="changeSpeed('add')">
                    <Plus />
                </el-icon>
    
            </div>
            <div class="my-font">
                <div :style="{ color: randomColor1 }">卷耳猫</div>
                <div :style="{ color: randomColor2 }">飞鸟</div>
                <div :style="{ color: randomColor3 }">春归</div>
                <div :style="{ color: randomColor4 }">沧浪行楷</div>
                <div :style="{ color: randomColor5 }">流光</div>
                <div :style="{ color: randomColor6 }">瘦金体</div>
                <div :style="{ color: randomColor7 }">问道黑</div>
                <div :style="{ color: randomColor8 }">烟波宋</div>
                
            </div>

        </div>
        <div class="right-wrap">
            <div class="card"></div>
            <div class="text-1">人生苦短</div>
            <div class="text-2">苦中作乐</div>
            <div class="text-3">人生苦短</div>
            <div class="text-4">苦中作乐</div>
            <div class="q">
                <div class="a a1"></div>
                <div class="a a2"></div>
                <div class="btn"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { toRefs, onMounted, onUnmounted, reactive } from 'vue'
let state = reactive({
    timer: null, 
    randomColor1: `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})` ,
    randomColor2: `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})` ,
    randomColor3: `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})` ,
    randomColor4: `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})` ,
    randomColor5: `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})` ,
    randomColor6: `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})` ,
    randomColor7: `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})` ,
    randomColor8: `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})` ,
    colorInterval: 2400
})
onMounted(() => {
    timeStart()
})
const timeStart = ()=>{
    state.timer = setInterval(() => {
        state.randomColor1 = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})` 
        state.randomColor2 = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})` 
        state.randomColor3 = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})` 
        state.randomColor4 = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})` 
        state.randomColor5 = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})` 
        state.randomColor6 = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})` 
        state.randomColor7 = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})` 
        state.randomColor8 = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})` 
    }, state.colorInterval);
}
const timeEnd = ()=>{
    clearInterval(state.timer)
    state.timer = null
}
onUnmounted(() => {
    timeEnd()
})
const controlFont = ()=>{
    if(state.timer) timeEnd()
    else timeStart()
}
const changeSpeed = (type)=>{
    if(type === 'min'){     //减速
        state.colorInterval *= 2
    }
    else{       //加速
        state.colorInterval /= 2
    }
    timeEnd()
    timeStart()
    console.log('state.colorInterval', state.colorInterval);
}
const { 
    timer,
    randomColor1,
    randomColor2,
    randomColor3,
    randomColor4,
    randomColor5,
    randomColor6,
    randomColor7,
    randomColor8 } = toRefs(state)
</script>

<style lang="less" scoped>
.left-wrap{
    padding: 20px;
    box-shadow: 0 0 8px 8px rgba(136, 94, 3, 0.12);
    width: 240px;
    text-align: center;
    border-radius: 12px;
}
.my-font{
    font-size: 48px;
    line-height: 72px;
    >div{
        transition: 1s;
    }
    >div:nth-child(1){
        font-family: 'cat';
    }
    >div:nth-child(2){
        font-family: 'bird';
    }
    >div:nth-child(3){
        font-family: 'chungui';
    }
    >div:nth-child(4){
        font-family: 'canglang';
    }
    >div:nth-child(5){
        font-family: 'liuguang';
    }
    >div:nth-child(6){
        font-family: 'shoujin';
    }
    >div:nth-child(7){
        font-family: 'wendao';
    }
    >div:nth-child(81){
        font-family: 'yanbo';
    }

}
.font-control{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;

    .calc-btn{
        border: 1px solid #000;
        border-radius: 50%;
        padding: 8px;
    }
    .el-icon{
        cursor: pointer;
    }
}
 
.right-wrap{
    .card {
        height: 300px;
        width:  300px;
        // 这里使用了三层背景渐变，两层圆锥渐变和一层辐射渐变
        background-image:
        repeating-conic-gradient(red 50%, #E1F5C4 60%),
        repeating-conic-gradient(red 50%, #E1F5C4 60%),
        radial-gradient(
            gold 0%, gold 35%,
            red 35%, red 40%,
            orangered 40%, orangered 50%,
            gold 50%, gold 60%,
            yellowgreen 60%, yellowgreen 70%,
            skyblue 70%, skyblue 80%,
            steelblue 80%, steelblue 90%,
            violet 90%
        );
    
        // 对每一层被渐变分别设置混合模式
        background-blend-mode:
        lighten,
        overlay,
        lighten;
    
        // 对每一层被渐变分别设置背景大小（40px 是因为正好能被 200px 的盒子整除）
        background-size:
        40px 40px,
        6em 6em,
        8em 8em;
        background-position: 50% 50%;
        transition: .45s ease-in;
        cursor: pointer;
    
        // 鼠标悬浮时，变换渐变大小
        &:hover {
        background-size:
            40px 40px,
            4em 4em,
            12em 12em;
        }
    }
    .text-1{
        font-size:80px; /*设置字体大小*/
        font-weight:800; /*设置字体粗细*/
        text-shadow:1px 0px #009916, 1px 2px #006615, 3px 1px #009916,
                2px 3px #006615, 4px 2px #009916, 4px 4px #006615,
                5px 3px #009916, 5px 5px #006615, 7px 4px #009916,
                6px 6px #006615, 8px 5px #009916, 7px 7px #006615,
                9px 6px #009916, 9px 8px #006615, 11px 7px #009916;/*设置文字阴影*/
        
    }
    .text-2{
        font-family:"bird";/*设置字体*/
        font-size:64px; /*设置字体大小*/
        font-weight:bolder; /*设置字体粗细*/
        -webkit-text-stroke:1px #0000FF;        /*文字描边*/
        -webkit-text-fill-color:transparent;    /*设置文字的填充颜色*/
        -webkit-box-reflect: below 2px linear-gradient(transparent, rgba(0, 0, 0, .5));
        margin-bottom: 70px;
    }
    .text-3{
        color:#0000FF; /*设置文字颜色*/
        text-decoration: none;
        font-size:5em; /*设置字体大小*/
        font-family:"canglang";/*设置字体*/
        -webkit-animation: shine 2.4s infinite;/*设置动画*/
    }
    @-webkit-keyframes shine{/*创建动画*/
        0%,100%{ color:#fff;text-shadow:0 0 10px #0000FF,0 0 10px #0000FF; }
        50%{ text-shadow:0 0 10px #0000FF,0 0 40px #0000FF; }
    }
    .text-4{
        font-family: "wendao";
        font-size: 60px;
        text-align: center;
        background: -webkit-linear-gradient(left, #0f0, #00f) 0 0 no-repeat;/*设置线性渐变*/
        -webkit-background-size: 60px;                        /*设置背景大小*/
        -webkit-background-clip: text;                            /*背景被裁剪到文字*/
        -webkit-text-fill-color: rgba(255, 255, 255, 0.3);        /*设置文字的填充颜色*/
        -webkit-animation: shine2 3s infinite;                    /*设置动画*/
    }
    @-webkit-keyframes shine2{   /*创建动画*/
        0%{
            background-position: 0 0;
        }
        100%{
            background-position: 100% 100%;
        }
    }
    .q {
      width:  200px;
      height: 200px;
      position: relative;

      .a {
        width:  80px;
        height: 80px;
        border: 1px solid #000;
        background: #000;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        animation: identifier 3s infinite;
        opacity: 0;
      }
  
      .a2 {
        animation-delay: 1.5s;
      }
  
      .btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        text-align: center;
        line-height: 50px;
      }
  
      @keyframes identifier {
        0% {
          transform: translate(-50%, -50%) scale(0);
          opacity: 0.8;
        }
  
        100% {
          transform: translate(-50%, -50%) scale(1.8);
          opacity: 0;
        }
      }
  }
    }


</style>