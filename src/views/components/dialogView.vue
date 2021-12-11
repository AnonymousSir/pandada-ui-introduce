<template>
    <div class="dialog-view">
        <content-box h1 text="对话框"></content-box>
        <content-box h2 id="dialog-usage" to="/introduce/dialog-view#dialog-usage" text="基本用法">
            <p>需要设置 <code>visible</code> 属性，它接收 <code>Boolean</code> ，当为 <code>true</code> 时显示对话框。对话框分为两个部分： <code>body</code> 和 <code>footer</code> ， <code>footer</code> 需要具名为 <code>footer</code> 的 <code>slot</code> 。 <code>title</code> 属性用于定义标题，它是可选的，默认值为 <code>"提示"</code> ，若需要标题为空，需要设置 <code>title=""</code> </p>
            <h4>效果演示</h4>
            <pan-button @click="dialogVisible = true">打开对话框</pan-button>
            <pan-dialog
                title=""
                width="30%"
                :visible.sync="dialogVisible">
                <span>对话框信息</span>
                <span slot="footer">
                    <pan-button @click="dialogVisible = false">取消</pan-button>
                    <pan-button @click="dialogVisible = false" type="primary">确定</pan-button>
                </span>
            </pan-dialog>
            <h4>代码演示</h4>
            <div class="codeView" v-highlight>
                <pre class="language-html"><code v-html="code1"></code></pre>
            </div>
        </content-box>
        <content-footer
            leftTo="/introduce/checkbox-view"
            leftText="Checkbox 多选框"
        ></content-footer>
    </div>
</template>

<script>
export default{
    name: "dialogView",
    data () {
        return {
            dialogVisible: false,
            code1: 
`&lt;template&gt;
  &lt;pan-button @click=&quot;dialogVisible = true&quot;&gt;打开对话框&lt;/pan-button&gt;
  &lt;pan-dialog
    title=&quot;提示&quot;
    width=&quot;30%&quot;
    :visible.sync=&quot;dialogVisible&quot;&gt;
    &lt;span&gt;对话框信息&lt;/span&gt;
    &lt;span slot=&quot;footer&quot;&gt;
      &lt;pan-button @click=&quot;dialogVisible = false&quot;&gt;取消&lt;/pan-button&gt;
      &lt;pan-button @click=&quot;dialogVisible = false&quot; type=&quot;primary&quot;&gt;确定&lt;/pan-button&gt;
  &lt;/span&gt;
  &lt;/pan-dialog&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        centerDialogVisible: false
      };
    }
  };
&lt;/script&gt;
`
        }
    }
}
</script>
