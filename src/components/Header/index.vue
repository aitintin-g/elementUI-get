<!--  -->
<template>
<div class="headerWrapper" :class="{fixed:isFixed}">
    <header class="header">
        <div class="container">
            <h1>
                <router-link to="/home" tag="a">
                    <img src="@/assets/log.svg" alt="">
                </router-link>
            </h1>
            <ul class="nav">
                <li v-show="isShow" class="search">
                    <input placeholder="搜索文档" />
                </li>
                <li>
                    <router-link to="/introduct" tag="a">指南</router-link>
                </li>
                <li>
                    <router-link to="/component" tag="a">组件</router-link>
                </li>
                <li>
                    <router-link to="/theme" tag="a">主题</router-link>
                </li>
                <li>
                    <router-link to="/resource" tag="a">资源</router-link>
                </li>
                <li v-show="isShow" class="gap">
                    <div>|</div>
                </li>
                <li v-show="isShow" class="version" @click="handleToToggle2()">
                    <span>2.13.1 <i class="iconfont icon-jiantouxia"></i></span>
                </li>
                <li class="lang" @click="handleToToggle()">
                    <span>中文 <i class="iconfont icon-jiantouxia"></i></span>
                </li>
            </ul>
        </div>
    </header>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {box} from '@/components/JS'

export default {
//import引入的组件需要注入到对象中才能使用
name:'Header',
components: {},
props:['isShow','isFixed'],
data() {
//这里存放数据
return {
    toggele:false,
    toggele2:false
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    handleToToggle(){
        if(!this.toggle){
            box({
                isFixed:this.isFixed
            });
            this.toggle=true;
        }else{
            document.body.removeChild(document.getElementById('contentbox'));
            this.toggle=false;
        }
    },
    handleToToggle2(){
        if(!this.toggle2){
            box({
                textList:['1.4.13','2.0.11','2.1.0','2.2.2','2.3.9','2.4.11'],
                pos:[80,150],
                name:'contentbox2',
                isFixed:this.isFixed
            });
            this.toggle2=true;
        }else{
            document.body.removeChild(document.getElementById('contentbox2'));
            this.toggle2=false;
        }
    }
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
beforeDestroy() {
    // if(document.getElementById('contentbox')){
    //     document.body.removeChild(document.getElementById('contentbox'));
    //     this.toggle=false;
    // }
}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
deactivated(){
    if(document.getElementById('contentbox')){
        document.body.removeChild(document.getElementById('contentbox'));
        this.toggle=false;
    }
    if(document.getElementById('contentbox2')){
        document.body.removeChild(document.getElementById('contentbox2'));
        this.toggle2=false;
    }
}
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.header{height:80px; background:#fff; width:100%; color:#fff; line-height:80px;}
.container{height:80px; width:1140px; padding:0; margin:0 auto; box-sizing:border-box; border-bottom:1px solid #dcdfe6;}
.container h1{float:left;}
.container h1 a{height:80px; display:block;}
.container h1 a img{vertical-align:sub;}
.container .nav{float:right;}
.container .nav li{float:left; list-style:none; cursor:pointer; line-height:80px;}
.container .nav li a{padding:0 22px; height:80px; line-height:80px; display:block; text-decoration:none; color: #1989fa; opacity: .5;}
.container .nav li a:hover{opacity:1;}
.container .nav li .router-link-active{opacity:1; box-sizing:border-box; border-bottom:2px #1989fa solid;}
.container .nav li.lang{margin-left:34px; color:#888; width:71px; height:80px; line-height:80px;}
.container .nav li.lang span{ width:100%; margin-bottom: 6px; padding-left:18px; line-height:40px; display:inline-block;}
.container .nav li.gap div{width:1px; padding:0 20px; height:80px; color:#999;}
.container .nav li.version{margin-left:34px; color:#888; width:71px; height:80px; line-height:80px;}
.container .nav li.version span{ width:100%; margin-bottom: 6px; padding-left:18px; line-height:40px; display:inline-block;}
.container .nav li.search input{box-sizing:border-box; width:200px; height:30px; padding:0 15px; border: 1px solid #dcdfe6; border-radius:3px;}
.fixed{position:fixed; z-index:2019;  width:100%;}
</style>