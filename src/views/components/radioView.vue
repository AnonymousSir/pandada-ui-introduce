<template>
    <div class="radio-view">
        <div class="content__box">
            <h1 class="title none">
                Radio 单选框
            </h1>
        </div>
        <content-box h2 id="radio-usage" to="/introduce/radio-view#radio-usage" text="基础用法">
            <p>要使用 <code>Radio</code> 组件，只需要设置 <code>v-model</code> 绑定变量，选中意味着变量的值为相应Radio <code>label</code> 属性的值，<code>label</code>可以是<code>String</code>、<code>Number</code>或<code>Boolean</code></p>
            <h4>演示效果</h4>
            <pan-radio v-model="radio" label="1">选项1</pan-radio>
            <pan-radio v-model="radio" label="2">选项2</pan-radio>
            <h4>代码演示</h4>
            <div class="codeView" v-highlight>
                <pre class="language-html"><code v-html="code1"></code></pre>
            </div>
        </content-box>
        <content-box h2 id="radio-group" to="/introduce/radio-view#radio-group" text="单选框组">
            <p>结合 <code>pan-radio-group</code> 元素和子元素 <code>pan-radio</code> 可以实现单选组，在 <code>pan-radio-group</code> 中绑定 <code>v-model</code> ，在 <code>pan-radio</code> 中设置好 <code>label</code> 即可，无需再给每一个 <code>pan-radio</code> 绑定变量</p>
            <h4>演示效果</h4>
            <pan-radio-group v-model="radio2">
                <pan-radio label="1">选项1</pan-radio>
                <pan-radio label="2">选项2</pan-radio>
                <pan-radio label="3">选项3</pan-radio>
            </pan-radio-group>
            <h4>代码演示</h4>
            <div class="codeView" v-highlight>
                <pre class="language-html"><code v-html="code2"></code></pre>
            </div>
        </content-box>
        <content-footer 
          leftTo="/introduce/switch-view"
          leftText="Switch 输入框"
          rightTo="/introduce/checkbox-view"
          rightText="Checkbox 多选框"
        ></content-footer>
    </div>
</template>

<script>
export default{
    name: 'radioView',
    data () {
        return {
            radio: '1',
            radio2: '1',
            code1: 
`&lt;template&gt;
    &lt;pan-radio v-model=&quot;radio&quot; label=&quot;1&quot;&gt;选项1&lt;/pan-radio&gt;
    &lt;pan-radio v-model=&quot;radio&quot; label=&quot;2&quot;&gt;选项2&lt;/pan-radio&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        radio: &#x27;1&#x27;
      };
    }
  }
&lt;/script&gt;
`,
        code2: 
`&lt;template&gt;
    &lt;pan-radio-group v-model=&quot;radio&quot;&gt;
        &lt;pan-radio label=&quot;1&quot;&gt;选项1&lt;/pan-radio&gt;
        &lt;pan-radio label=&quot;2&quot;&gt;选项2&lt;/pan-radio&gt;
        &lt;pan-radio label=&quot;3&quot;&gt;选项3&lt;/pan-radio&gt;
    &lt;/pan-radio-group&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        radio: &quot;1&quot;
      };
    }
  }
&lt;/script&gt;
`
        }
    }
}
</script>
