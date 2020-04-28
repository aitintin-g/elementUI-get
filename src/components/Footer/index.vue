<!--  -->
<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-main">
        <h4>链接</h4>
        <a href="https://github.com/ElemeFE/element" target="_blank" class="footer-main-link">代码仓库</a>
        <a
          href="https://github.com/ElemeFE/element/releases"
          target="_blank"
          class="footer-main-link"
        >更新日志</a>
        <a
          href="https://github.com/ElemeFE/element/blob/dev/FAQ.md"
          target="_blank"
          class="footer-main-link"
        >常见问题</a>
        <a
          href="https://github.com/ElementUI/element-starter"
          target="_blank"
          class="footer-main-link"
        >脚手架</a>
        <a href="/#/zh-CN/component/custom-theme" target="_blank" class="footer-main-link">在线主题生成器</a>
        <a
          href="https://github.com/elemefe/element-react"
          target="_blank"
          class="footer-main-link"
        >Element-React</a>
        <a
          href="https://github.com/ElemeFE/element-angular"
          target="_blank"
          class="footer-main-link"
        >Element-Angular</a>
      </div>
      <div class="footer-main">
        <h4>社区</h4>
        <a href="https://gitter.im/ElemeFE/element" target="_blank" class="footer-main-link">在线讨论</a>
        <a
          href="https://github.com/ElemeFE/element/issues"
          target="_blank"
          class="footer-main-link"
        >反馈建议</a>
        <a
          href="https://github.com/ElemeFE/element/blob/master/.github/CONTRIBUTING.zh-CN.md"
          target="_blank"
          class="footer-main-link"
        >贡献指南</a>
        <a
          href="https://segmentfault.com/t/element-ui"
          target="_blank"
          class="footer-main-link"
        >SegmentFault</a>
        <a
          href="https://github.com/ElementUI/awesome-element"
          target="_blank"
          class="footer-main-link"
        >Awesome Element</a>
      </div>
      <div class="footer-social">
        <p class="footer-social-title">Element 2.1 Fullerene</p>
        <span>
          <div
            role="tooltip"
            id="el-popover-4823"
            aria-hidden="true"
            class="el-popover el-popper footer-popover"
            tabindex="0"
            style="width: 120px; display: none;"
          >
            <!---->
            <div class="footer-popover-title">饿了么 UED</div>
            <img src="static/qrcode.a88f522.png" alt />
          </div>
        </span>
        <i
          class="iconfont icon-shenfenzheng elementdoc"
          aria-describedby="el-popover-4823"
          tabindex="0"
        ></i>
        <a href="https://github.com/elemefe" target="_blank">
          <i class="iconfont icon-zhiding elementdoc"></i>
        </a>
        <a href="https://gitter.im/ElemeFE/element" target="_blank">
          <i class="iconfont icon-faxianjihuo elementdoc elementdocu"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  name:'Footer',
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.footer{background-color: #f7fbfd; width:100%; padding:40px 150px; height:340px; box-sizing:border-box;}
.footer-main{display:inline-block; margin-right:110px; vertical-align:top;}
.footer-main h4{font-size:18px; color:#333; line-height:1; margin-bottom:15px;}
.footer-main .footer-main-link{display:block; margin:0; line-height:2; font-size:14px; color:#666;}
.footer-social{float:right; text-align: right; }
.footer-social p{font-size:18px; color:#666; font-weight:bold; margin-bottom:20px;}
.footer-social .elementdoc{display: inline-block; line-height:32px; text-align:center; font-size:32px; margin-right:20px; vertical-align:middle;}
.footer-social .elementdoc.elementdocu{margin:0;}
</style>