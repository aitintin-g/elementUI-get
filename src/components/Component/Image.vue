<!--  -->
<template>
<div class="containerLay">
    <h2>Image 图片</h2>
    <p>图片容器，在保留原生img的特性下，支持懒加载，自定义占位、加载失败等</p>
    <h3>基础用法</h3>
    <div class="demo">
        <div class="demo-image">
        <div class="block" v-for="fit in fits" :key="fit">
            <span class="demonstration">{{ fit }}</span>
            <el-image
            style="width: 100px; height: 100px"
            :src="url"
            :fit="fit"></el-image>
        </div>
        </div>
    </div>
    <h3>占位内容</h3>
    <div class="demo">
        <div class="demo-image__placeholder">
        <div class="block">
            <span class="demonstration">默认</span>
            <el-image :src="src"></el-image>
        </div>
        <div class="block">
            <span class="demonstration">自定义</span>
            <el-image :src="src">
            <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
            </div>
            </el-image>
        </div>
        </div>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name:'Image1',
components: {},
data() {
//这里存放数据
return {
    fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
    url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'    
}
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.container h2 {color: #1f2f3d;font-weight: 400;font-size: 28px;}
.container p {color: #5e6d82;font-size: 14px;line-height: 1.5em;margin: 14px 0;}
.container h3 {color: #1f2f3d;margin: 55px 0 20px; font-size:22px; font-weight:400;}
.container .demo {border: 1px #ebebeb solid;border-radius: 3px;box-sizing: border-box;padding: 24px;}


</style>