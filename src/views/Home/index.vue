<!--  -->
<template>
  <div class="containerHom">
    <Header :isShow="false" />
    <div class="main">
      <div class="banner">
        <h1>网站快速成型工具</h1>
        <p>Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库</p>
      </div>
      <div class="jumbtron">
        <img src="/images/theme-index-blue.c38b733.png" alt />
        <div class="jumbtron-red" style="height:0;" ref="transformRed">
          <img src="/images/theme-index-red.c8e136e.png" alt />
        </div>
      </div>
      <div class="sponsor">
        <a href>
          <img src="@/assets/tree.svg" alt />
          <div>
            <p>Sponsored by 多会</p>
            <p>炫酷的新一代活动票务系统</p>
          </div>
        </a>
      </div>
      <div class="cards">
        <ul>
          <li>
            <div data-v-3be23689 class="card">
              <img data-v-3be23689 src="/images/guide.0a8462c.png" alt />
              <h3 data-v-3be23689>指南</h3>
              <p data-v-3be23689>了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。</p>
              <a data-v-3be23689 href="#/zh-CN/guide/design" class>查看详情</a>
            </div>
          </li>
          <li>
            <div data-v-3be23689 class="card">
              <img data-v-3be23689 src="images/component.bd3411b.png" alt />
              <h3 data-v-3be23689>组件</h3>
              <p data-v-3be23689>使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。</p>
              <a data-v-3be23689 href="#/zh-CN/component/layout" class>查看详情</a>
            </div>
          </li>
          <li>
            <div data-v-3be23689 class="card">
              <img data-v-3be23689 src="@/assets/theme.svg" alt />
              <h3 data-v-3be23689>主题</h3>
              <p data-v-3be23689>在线主题编辑器，可视化定制和管理站点主题、组件样式</p>
              <a data-v-3be23689 href="#/zh-CN/theme" class>查看详情</a>
            </div>
          </li>
          <li>
            <div data-v-3be23689 class="card">
              <img data-v-3be23689 src="images/resource.a72b8f8.png" alt />
              <h3 data-v-3be23689>资源</h3>
              <p data-v-3be23689>下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率。</p>
              <a data-v-3be23689 href="#/zh-CN/resource" class>查看详情</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Header,
    Footer
  },
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
  mounted() {
    window.addEventListener(
      "scroll",
      () => {
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        this.$refs.transformRed.style.height = t > 530 ? "530px" : t + "px";
      },
      false
    );
  },
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
.main .banner {
  padding-top: 20px;
}
.main .banner h1 {
  text-align: center;
  font-size: 34px;
  color: #555;
  line-height: 48px;
}
.main .banner p {
  text-align: center;
  margin: 10px 0 5px;
  color: #888;
  font-size: 18px;
  line-height: 28px;
}

.main .jumbtron {
  width: 890px;
  margin: 30px auto;
  position: relative;
}
.main .jumbtron-red {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}
.main .jumbtron img {
  width: 100%;
}

.sponsor {
  display: flex;
  justify-content: center;
}
.sponsor a {
  margin: 0 20px 50px;
  width: 300px;
  height: 100px;
  display: flex;
}
.sponsor a img {
  width: 45px;
  height: 100px;
  margin-right: 20px;
  display: block;
}
.sponsor a div {
  display: flex;
  height: 100px;
  justify-content: center;
  flex: 1;
  flex-direction: column;
}
.sponsor a div p {
  line-height: 25px;
  line-height: 1.8;
  color: #999;
  font-size: 14px;
}

.cards {
  width: 1140px;
  margin: 0 auto 110px;
}
.cards ul {
  overflow: hidden;
}
.cards li {
  width: 25%;
  float: left;
  padding: 0 19px;
  box-sizing: border-box;
}
.cards li .card {
  width: 100%;
  height: 430px;
  text-align: center;
  box-sizing: border-box;
  border: 1px solid #eaeefb;
  position: relative;
}
.card img {
  width: 160px;
  height: 120px;
  margin: 66px auto 60px;
}
.card h3 {
  font-size: 18px;
  color: #1f2f3d;
  font-weight: normal;
  margin: 0;
}
.card p {
  font-size: 14px;
  color: #99a9bf;
  padding: 0 25px;
  line-height: 20px;
  margin: 14px 0;
}
.card a {
  height: 53px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  line-height: 53px;
  border-top: 1px solid #eaeefb;
  cursor: pointer;
  font-size: 14px;
  color: #409eff;
}
</style>