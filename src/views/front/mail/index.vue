<template>
    <div>
        <div class="list">
            <div class="search">
                <el-input placeholder="请输入" v-model="keyword"></el-input>
            </div>
            <div v-for="(item, index) in list" :key="index" class="list-item">
                <div class="flex justify-between">
                    <div class="title">{{ item.title }}</div>
                    <div class="author">{{ item.author }}</div>
                </div>
                <div class="flex justify-between line2">
                    <div class="content">{{ item.content }}</div>
                    <div class="time">{{ item.created_at }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, toRefs, reactive } from 'vue';

let state = reactive({
    list: [
        { title: '这是文章的标题这是文章的标题1', author: '张三', created_at: '2023.11.09', content: '十五字十五字十五字十五字十五字' },
        { title: '这是文章的标题这是文章的标题2', author: '李四', created_at: '2023.12.09', content: '十五字十五字十五字十五字十五字' },
        { title: '这是文章的标题这是文章的标题3这是文章的标题这是文章的标题3这是文章的标题这是文章的标题3这是文章的标题这是文章的标题3这是文章的标题这是文章的标题3这是文章的标题这是文章的标题3', author: '王五', created_at: '2023.10.09', content: '十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字' },
        { title: '这是文章的标题这是文章的标题4', author: '程远志', created_at: '2023.08.09', content: '十五字十五字十五字十五字十五字' },
        { title: '这是文章的标题这是文章的标题1', author: '张三', created_at: '2023.11.09', content: '十五字十五字十五字十五字十五字' },
        { title: '这是文章的标题这是文章的标题2', author: '李四', created_at: '2023.12.09', content: '十五字十五字十五字十五字十五字' },
        { title: '这是文章的标题这是文章的标题3这是文章的标题这是文章的标题3这是文章的标题这是文章的标题3这是文章的标题这是文章的标题3这是文章的标题这是文章的标题3这是文章的标题这是文章的标题3', author: '王五', created_at: '2023.10.09', content: '十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字' },
        { title: '这是文章的标题这是文章的标题4', author: '程远志', created_at: '2023.08.09', content: '十五字十五字十五字十五字十五字' },
        { title: '这是文章的标题这是文章的标题1', author: '张三', created_at: '2023.11.09', content: '十五字十五字十五字十五字十五字' },
        { title: '这是文章的标题这是文章的标题2', author: '李四', created_at: '2023.12.09', content: '十五字十五字十五字十五字十五字' },
        { title: '这是文章的标题这是文章的标题3这是文章的标题这是文章的标题3这是文章的标题这是文章的标题3这是文章的标题这是文章的标题3这是文章的标题这是文章的标题3这是文章的标题这是文章的标题3', author: '王五', created_at: '2023.10.09', content: '十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字十五字' },
        { title: '这是文章的标题这是文章的标题4', author: '程远志', created_at: '2023.08.09', content: '十五字十五字十五字十五字十五字' },
    ],
    keyword: ''
})
const { list } = toRefs(state)
</script>

<style lang="less" scoped>
.list{
    width: 800px;
    margin: 32px auto;
    
}
.search{
    display: flex;
    align-items: center;
    padding: 10px 16px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 0 4px rgba(0, 0, 0, .12);
    margin-bottom: 20px;
}
.list-item{
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    margin-bottom: 12px;
    background: #fff;
    padding: 12px 20px;
    border-radius: 12px;
    .title{
        // 两行显示
        font-family: 'yanbo';
        font-size: 20px;
        max-width: calc(100% - 100px);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        word-break: break-all;
        cursor: pointer;
        &:hover{
            text-decoration: underline;
        }
    }
    .author{
        font-family: 'canglang';
        color: rgb(14, 110, 255);
        border-radius: 10px;
        padding: 0 12px;
        height: 30px;
        line-height: 30px;
        cursor: pointer;
        &:hover{
            box-shadow: 0 0 4px 2px rgb(160, 198, 255);
        }
    }
    .line2{
        margin-top: 16px;
        align-items: flex-end;
        .content{
            // 三行显示
            color: #555;
            max-width: calc(100% - 100px);
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            word-break: break-all;
        }
        .time{
            font-family: 'bird';
            color: #777;
        }

    }
}
</style>