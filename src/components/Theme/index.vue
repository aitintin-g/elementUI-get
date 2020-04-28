<!--  -->
<template>
<div class='containThe'>
    <div class="container">
        <section>
            <h2>官方主题</h2>
            <ul>
                <li class="theme-card">
                    <section>
                        <div class="preview">
                            <div class="line">
                                <span class="line2" style="background: rgb(64, 158, 255);"></span>
                                <span class="line2" style="background: rgb(48, 49, 51);"></span>
                            </div>
                            <div class="line">
                                <span class="line4" style="background: rgb(160, 207, 255);"></span>
                                <span class="line4" style="background: rgb(217, 236, 255);"></span>
                                <span class="line4" style="background: rgb(220, 223, 230);"></span>
                                <span class="line4" style="background: rgb(144, 147, 153);"></span>
                            </div>
                            <div class="action">
                                <div class="action-mask"></div>
                                <div class="action-block">
                                    <div class="action-item">
                                        <div class="icon">
                                            <img src="@/assets/look.png" alt="">
                                            <span></span>  
                                        </div>
                                        <div class="name">
                                            <span>查看</span>
                                        </div>
                                    </div>
                                    <div class="action-item action-item-left">
                                        <div class="icon">
                                            <img src="@/assets/copy.png" alt="">
                                            <span></span>  
                                        </div>
                                        <div class="name">
                                            <span>复制</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="info">
                            <div class="info-center">
                                <div class="title">
                                    <span>Element</span>
                                    <span class="right">by Element</span>
                                </div>
                                <div class="description">默认主题 </div>
                            </div>
                        </div>
                    </section>
                </li>
                <li class="theme-card"></li>
                <li class="theme-card"></li>
                <li class="theme-card"></li>
            </ul>
        </section>
        <section class="section-second">
            <h2>我的主题 (0/8)</h2>
            <ul>
                <li class="theme-card">
                    <section class="isupload">
                        <div class="upload">
                            <div class="upload-action"> 
                                <img  src="@/assets/upload.svg"/>
                                <span>点击上传主题</span>
                            </div>
                        </div>
                        <input type="text">
                    </section>
                </li>
            </ul>
        </section>
    </div>   
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
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
.container{width:1140px; margin:0 auto 55px auto; padding-top:55px;}
.container section h2{font-size:28px; color:#1f2f3d; font-weight:normal; line-height: 28px;}
.container section ul{display:flex; flex-wrap:wrap; justify-content:space-between;}
.container section ul li{max-height: 230px; height: 16vw;flex: 0 0 24%;vertical-align: bottom;}
.theme-card section{height: 90%; background: #fff; margin: 25px 0; border-radius: 4px;overflow: hidden; box-shadow: 0 0 1px 0 #666;}
.theme-card section .preview{width:100%; height:70%; position:relative;}
.theme-card section .info{width:100%; height:30%; display:flex; align-items:center; line-height:16px;}
.theme-card section .preview .line{height:50%; width:100%;}
.theme-card section .preview .line span.line2{width:50%; height:100%; display:inline-block;}
.theme-card section .preview .line span.line4{width:25%; height:100%; display:inline-block;}
.theme-card section .preview .action{transition: all .3s; opacity:0; position: absolute; top:0; left:0; right:0; bottom:0; }
.theme-card section .preview .action:hover{opacity:1;}
.theme-card section .preview .action .action-mask{position:absolute; top:0; right:0; bottom:0; left:0; background:#000;opacity: .4}
.theme-card section .preview .action .action-block{position:absolute; width:50%; height:50%; top:25%; left:25%;}
.action-block .action-item{width:30%; height:100%; display:inline-block; cursor:pointer; color:#eee;}
.action-block .action-item-left{margin-left:40%;}
.action-item .icon{height:50%; text-align:center; display:flex; justify-content:center; align-items:center; font-size:22px;}
.action-item .icon img{width:130%;}
.action-item .name{font-size:12px; height:50%; text-align:center; display:flex; justify-content:center; align-items:center; margin-top:4px;}
.info .info-center{width:100%;}
.info .info-center .title{font-weight:700; font-size:16px; color:#303133; padding:0 12px;}
.info .info-center .title span{font-weight:bold;}
.info .info-center .title span.right{float:right; font-weight:400; font-size: 14px; color: #909399;}
.info .info-center .description{padding:0 12px; font-size:14px; color:#606266; margin-top:10px;}
.container section.section-second{margin-top:60px;}
.theme-card section.isupload{box-shadow:none; border: 1px dashed #dcdfe6;}
section.isupload input{display: none;}
section.isupload .upload{background:#f5f7fa; display:flex; width:100%; height:100%; justify-content:center; align-items:center; cursor:pointer;}
section.isupload .upload .upload-action{width:40%; margin:0 auto; text-align:center; color:#606266;}
.upload .upload-action img{display:block; margin:0 auto;}
.upload .upload-action span{display: block;font-size: 14px;margin-top: 8px;}
</style>