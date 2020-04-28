<!--  -->
<template>
<div class='containerInt'>
    <div class="container">
        <div class="nav">
            <a href="">赞助商</a>
            <img src="@/assets/tree.svg" alt="">
            <router-link to="/introduct/introduct1" tag="a">设计原则</router-link>
            <router-link to="/introduct/introduct2" tag="a">导航</router-link>
        </div>
        <div class="content">
            <h2>设计原则</h2>
            <div class="cards">
                <div class="card">
                    <img src="@/assets/consistency.png" alt="">
                    <h4>一致</h4>
                    <span>Consistency</span>
                </div>
                <div class="card">
                    <img src="@/assets/feedback.png" alt="">
                    <h4>反馈</h4>
                    <span>Feedback</span>
                </div>
                <div class="card">
                    <img src="@/assets/efficiency.png" alt="">
                    <h4>效率</h4>
                    <span>Efficiency</span>
                </div>
                <div class="card">
                    <img src="@/assets/controllerability.png" alt="">
                    <h4>可控</h4>
                    <span>Controllability</span>
                </div>
            </div>
            <h3>一致性 Consistency</h3>
            <ul>
                <li><strong>与现实生活一致：</strong>与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</li>
                <li><strong>在界面中一致：</strong>所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</li>
            </ul>
            <h3>反馈 Feedback</h3>
            <ul>
                <li><strong>控制反馈：</strong>通过界面样式和交互动效让用户可以清晰的感知自己的操作；</li>
                <li><strong>页面反馈：</strong>操作后，通过页面元素的变化清晰地展现当前状态。</li>
            </ul>
            <h3>效率 Efficiency</h3>
            <ul>
                <li><strong>简化流程：</strong>设计简洁直观的操作流程；</li>
                <li><strong>清晰明确：</strong>语言表达清晰且表意明确，让用户快速理解进而作出决策；</li>
                <li><strong>帮助用户识别：</strong>界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</li>
            </ul>
            <h3>可控 Controllability</h3>
            <ul>
                <li><strong>用户决策：</strong>根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</li>
                <li><strong>结果可控：</strong>用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name:'Introduct',
components: {},
data() {
//这里存放数据
return {

};
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
.container{width:1140px; margin:0 auto; overflow:hidden; padding:55px 30px 95px 30px; box-sizing:border-box;}
.nav{width:20%; float:left; text-align:left;}
.content{width:80%; float:left; padding-left:25px; box-sizing:border-box;}
.nav a{display: block; text-align:left; line-height:40px; color:#333; font-weight:bold;}
.nav a:first-child{font-size:14px; color:#777; font-weight:normal;}
.nav .router-link-active{color:#409eff}
.nav img{width:42px; margin: -2px 12px 23px 0;}
.content h2{font-size:28px; font-weight:normal; margin:0 0 10px; color:#1f2f3d;}
.cards{margin:30px 0 70px; width:100%; font-size:0;}
.card{width:25%; text-align:center; background:#fbfcfd; display:inline-block; height:204px;}
.card img{width:80px; height:80px; margin:40px 0 25px;}
.card h4{color:#1f2d3d; font-size:18px; font-weight:normal;}
.card span{font-size:14px; color:#99a9bf;}
.content ul{margin:16px 0 50px;}
.content ul li{color:#99a9bf; font-size:14px; margin:0 0 10px;}
.content ul li strong{color:#5e6d82; font-weight:normal;}
.content ul li:before{content: "";display: inline-block;width: 4px;height: 4px;border-radius: 50%;vertical-align: middle;background-color: #5e6d82;margin-right: 5px;}
.content h3{font-size:22px; margin:0 0 30px; color:#1f2d3d; font-weight:normal;}
</style>