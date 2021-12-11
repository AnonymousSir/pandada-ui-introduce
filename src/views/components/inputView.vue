<template>
    <div class="input-view">
        <div class="content__box">
            <h1 class="title none">
              Input 输入框
            </h1>
        </div>
        <div class="content__box">
            <h2 class="title" id="input-usage">
                <router-link to="/introduce/input-view#input-usage">#</router-link>
                基础用法
            </h2>
            <h4>效果演示</h4>
            <pan-input v-model="value" placeholder="请输入内容"></pan-input>
            <p>value: {{value}}</p>
            <h4>代码演示</h4>
            <div class="codeView" v-highlight>
                <pre class="language-html"><code v-html="code1"></code></pre>
            </div>
        </div>
        <div class="content__box">
            <h2 class="title" id="input-disable">
                <router-link to="/introduce/input-view#input-disable">#</router-link>
                禁用状态
            </h2>
            <p>通过<code>disabled</code>属性设置是否禁用input组件</p>
            <h4>效果演示</h4>
            <pan-input disabled v-model="value2" placeholder="请输入内容"></pan-input>
            <h4>代码演示</h4>
            <div class="codeView" v-highlight>
                <pre class="language-html"><code v-html="code2"></code></pre>
            </div>
        </div>
        <div class="content__box">
            <h2 class="title" id="input-empty">
                <router-link to="/introduce/input-view#input-empty">#</router-link>
                清空
            </h2>
            <p>通过<code>clearable</code>属性可得到一个可清空的输入框</p>
            <h4>效果演示</h4>
            <pan-input clearable v-model="value3" placeholder="请输入内容"></pan-input>
            <h4>代码演示</h4>
            <div class="codeView" v-highlight>
                <pre class="language-html"><code v-html="code3"></code></pre>
            </div>
        </div>
        <div class="content__box">
            <h2 class="title" id="input-password">
                <router-link to="/introduce/input-view#input-password">#</router-link>
                密码框
            </h2>
            <p>通过<code>show-password</code>属性可得到一个可切换显示隐藏的密码框</p>
            <h4>效果演示</h4>
            <pan-input show-password v-model="value4" placeholder="请输入内容"></pan-input>
            <h4>代码演示</h4>
            <div class="codeView" v-highlight>
                <pre class="language-html"><code v-html="code4"></code></pre>
            </div>
        </div>

        <div class="content__footer">
            <router-link to="/introduce/button-view"> <span class="iconfont">&#xe65e;</span> Button 按钮</router-link>
            <router-link to="/introduce/switch-view">Switch <span class="iconfont">&#xe65d;</span> </router-link>
        </div>
    </div>
</template>

<script>
export default{
    name: 'inputView',
    data () {
        return {
            value: '',
            value2: '',
            value3: 'Hello World',
            value4: 'Hello World',
            code1:
`&lt;template&gt;
  &lt;pan-input v-model=&quot;value&quot; placeholder=&quot;请输入内容&quot;&gt;&lt;/pan-input&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: &#x27;&#x27;
      }
    }
  }
&lt;/script&gt;
`,
            code2: 
`&lt;template&gt;
  &lt;pan-input disabled v-model=&quot;value&quot; placeholder=&quot;请输入内容&quot;&gt;&lt;/pan-input&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: &#x27;&#x27;
      }
    }
  }
&lt;/script&gt;
`,
            code3: 
`&lt;template&gt;
  &lt;pan-input clearable v-model=&quot;value&quot; placeholder=&quot;请输入内容&quot;&gt;&lt;/pan-input&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: &#x27;Hello World&#x27;
      }
    }
  }
&lt;/script&gt;
`,
            code4: 
`&lt;template&gt;
  &lt;pan-input show-password v-model=&quot;value&quot; placeholder=&quot;请输入内容&quot;&gt;&lt;/pan-input&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: &#x27;Hello World&#x27;
      }
    }
  }
&lt;/script&gt;
`
        }
    }
}
</script>
