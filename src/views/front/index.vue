<template>
    <div id="front">
        <div class="flex">
            <div class="left">
                <div @click="back" class="back">返 回</div>
                <el-menu
                    active-text-color="#00EFB0"
                    background-color="#dd580a"
                    class="el-menu-vertical-demo"
                    text-color="#D7EFF1"
                    router
                    :default-active="route.path"
                >
                    <div v-for="(item,index) in menuList" :key="index">
                        <el-sub-menu :index="item.path" v-if="item.children">
                            <template #title>
                                <el-icon><component :is="item.icon" /></el-icon>
                                <span>{{ item.name }}</span>
                            </template>
                            <el-menu-item :index="it2.path" v-for="(it2,idx2) in item.children" :key="idx2">
                                {{ it2.name }}
                            </el-menu-item>
                        </el-sub-menu>
                        <el-menu-item :index="item.path" v-else>
                            <el-icon><component :is="item.icon" /></el-icon>
                            <span>{{ item.name }}</span>
                        </el-menu-item>
                    </div>
                </el-menu>
    
            </div>
                
            <div class="right">
                <div class="head">
                </div>
                <div class="content">
                    <router-view></router-view>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, toRefs } from 'vue'
import { useRouter, useRoute } from "vue-router";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const router = useRouter()
const route = toRefs(useRoute())
let menuList = router.options.routes[3].children
console.log('route', route);

const back = () =>{
    router.push('/')
}
console.log("menuList", menuList);
</script>

<style lang="less" scoped>
#front{
    background: #e9eef5;
}
@W: 200px;
@H: 60px;
.head{
    height: @H;
    width: 100%;
    background: #dd580a;
    .el-menu{
        height: 100%;
    }
}
.left{
    width: @W;
    height: 100vh;
    background: #dd580a;
    .el-menu{
        // height: 100%;
        border: 0;
    }
}
.right{
    flex: 1;
    color: rgb(0, 0, 0);
    .content{
        padding: 20px;
        height: calc(100vh - @H);
        overflow: auto;
    }
}
.back{
    width: 104px;
    margin: 12px;
    height: 42px;
    line-height: 42px;
    color: #fff;
    font-family: 'liuguang';
    border: 1px solid #fff;
    border-radius: 60px;
    text-align: center;
    cursor: pointer;
    font-size: 16px;
    transition: .3s;
    &:hover{
        background: #fff;
        color: #dd580a;
        font-size: 18px;
    }
}
</style>