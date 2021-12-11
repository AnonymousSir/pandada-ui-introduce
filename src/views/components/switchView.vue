<template>
    <div class="switch-view">
        <div class="content__box">
            <h1 class="title none">
                Switch 开关
            </h1>
        </div>
        <div class="content__box">
            <h2 class="title" id="switch-usage">
                <router-link to="/introduce/switch-view#switch-usage">#</router-link>
                基本用法
            </h2>
            <p>绑定<code>v-model</code>到一个<code>Boolean</code>类型的变量。可以使用<code>active-color</code>属性与<code>inactive-color</code>属性来设置开关的背景色。</p>
            <h4>效果演示</h4>
            <pan-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></pan-switch>
            <h4>代码演示</h4>
            <div class="codeView" v-highlight>
                <pre class="language-html"><code v-html="code1"></code></pre>
            </div>
        </div>
        <content-footer
            leftTo="/introduce/input-view"
            leftText="Input 输入框"
            rightTo="/introduce/radio-view"
            rightText="Radio 单选框"
        ></content-footer>
    </div>
</template>

<script>
export default{
    name: 'switchView',
    data () {
        return {
            value: true,
            code1: 
`&lt;template&gt;
    &lt;pan-switch
        v-model=&quot;value&quot;
        active-color=&quot;#13ce66&quot;
        inactive-color=&quot;#ff4949&quot;&gt;
    &lt;/pan-switch&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: true
      }
    }
  };
&lt;/script&gt;
`
        }
    }
}
</script>
