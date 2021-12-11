<template>
    <div class="checkbox-view">
        <content-box h1 text="Checkbox 多选框"></content-box>
        <content-box h2 id="checkbox-usage" to="/introduce/checkbox-view#checkbox-usage" text="基本用法">
            <p>在 <code>pan-checkbox</code> 元素中定义 <code>v-model</code> 绑定变量，单一的 <code>checkbox</code> 中，默认绑定变量的值会是 <code>Boolean</code> ，选中为 <code>true</code> </p>
            <h4>效果演示</h4>
            <pan-checkbox v-model="checked1">选项1</pan-checkbox>
            <pan-checkbox v-model="checked2">选项2</pan-checkbox>
            <h4>代码演示</h4>
            <div class="codeView" v-highlight>
                <pre class="language-html"><code v-html="code1"></code></pre>
            </div>
        </content-box>
        <content-box h2 id="checkbox-group" to="/introduce/checkbox-view#checkbox-group" text="多选框组">
            <p><code>pan-checkbox-group</code> 元素能把多个 <code>checkbox</code> 管理为一组，只需要在 <code>pan-checkbox-group</code> 中使用 <code>v-model</code> 绑定 <code>Array</code> 类型的变量即可。 <code>pan-checkbox</code> 的 <code>label</code> 属性是该 <code>checkbox</code> 对应的值，若该标签中无内容，则该属性也充当 <code>checkbox</code> 按钮后的介绍。 <code>label</code> 与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。</p>
            <h4>效果演示</h4>
            <pan-checkbox-group v-model="checkList">
                <pan-checkbox label="选项1"></pan-checkbox>
                <pan-checkbox label="选项2"></pan-checkbox>
                <pan-checkbox label="选项3"></pan-checkbox>
            </pan-checkbox-group>
            <h4>代码演示</h4>
            <div class="codeView" v-highlight>
                <pre class="language-html"><code v-html="code2"></code></pre>
            </div>
        </content-box>
        <content-footer
            leftTo="/introduce/radio-view"
            leftText="Radio 单选框"
            rightTo="/introduce/dialog-view"
            rightText="Dialog 对话框"
        ></content-footer>
    </div>
</template>

<script>
export default{
    name: 'checkboxView',
    data () {
        return {
            checked1: true,
            checked2: false,
            checkList: ["选项1","选项2"],
            code1: 
`&lt;template&gt;
  &lt;pan-checkbox v-model=&quot;checked1&quot;&gt;选项1&lt;/pan-checkbox&gt;
  &lt;pan-checkbox v-model=&quot;checked2&quot;&gt;选项2&lt;/pan-checkbox&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        checked1: true,
        checked2: true
      };
    }
  };
&lt;/script&gt;
`,
            code2: 
`&lt;template&gt;
  &lt;pan-checkbox-group v-model=&quot;checkList&quot;&gt;
    &lt;pan-checkbox label=&quot;选项1&quot;&gt;&lt;/pan-checkbox&gt;
    &lt;pan-checkbox label=&quot;选项2&quot;&gt;&lt;/pan-checkbox&gt;
    &lt;pan-checkbox label=&quot;选项3&quot;&gt;&lt;/pan-checkbox&gt;
  &lt;/pan-checkbox-group&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        checkList: [&quot;选项1&quot;,&quot;选项2&quot;]
      };
    }
  };
&lt;/script&gt;
`
        }
    }
}
</script>
