<template>
    <div class="button-view">
        <div class="content__box">
            <h1 class="title none">
                 Button 按钮
            </h1>
        </div>
        <!-- 基础用法 -->
        <div class="content__box">
            <h2 class="title" id="button-usage">
                <router-link to="/introduce/button-view#button-usage">#</router-link>
                基础用法
            </h2>
            <p>使用<code>type</code>、<code>plain</code>、<code>round</code>、<code>circle</code>属性来定义Button的样式</p>
            <h4>效果演示</h4>
            <div>
                <pan-button>默认按钮</pan-button>
                <pan-button type="primary">主要按钮</pan-button>
                <pan-button type="success">成功按钮</pan-button>
                <pan-button type="info">信息按钮</pan-button>
                <pan-button type="warning">警告按钮</pan-button>
                <pan-button type="danger">危险按钮</pan-button>
            </div>
            <div>
                <pan-button plain>朴素按钮</pan-button>
                <pan-button round>圆角按钮</pan-button>
                <pan-button circle icon="pan-icon-search"></pan-button>
                <pan-button>默认按钮</pan-button>
            </div>
            <h4>代码演示</h4>
            <div class="codeView" v-highlight>
                <pre class="language-html"><code v-html="code1"></code></pre>
            </div>
        </div>
        <!-- 禁用状态 -->
        <div class="content__box">
            <h2 class="title" id="button-disable">
                <router-link to="/introduce/button-view#button-disable">#</router-link>
                禁用状态
            </h2>
            <p>使用<code>disabled</code>属性来定义按钮是否可用，它接收一个<code>Boolean</code>值</p>
            <h4>演示效果</h4>
            <div class="panbuttonbox">
                <pan-button disabled>默认按钮</pan-button>
                <pan-button disabled type="primary">主要按钮</pan-button>
                <pan-button disabled type="success">成功按钮</pan-button>
                <pan-button disabled type="info">信息按钮</pan-button>
                <pan-button disabled type="warning">警告按钮</pan-button>
                <pan-button disabled type="danger">危险按钮</pan-button>
            </div>
            <div>
                <pan-button plain disabled>默认按钮</pan-button>
                <pan-button plain disabled type="primary">主要按钮</pan-button>
                <pan-button plain disabled type="success">成功按钮</pan-button>
                <pan-button plain disabled type="info">信息按钮</pan-button>
                <pan-button plain disabled type="warning">警告按钮</pan-button>
                <pan-button plain disabled type="danger">危险按钮</pan-button>
            </div>
        </div>
        <h4>代码演示</h4>
        <div class="codeView" v-highlight>
            <pre class="language-html"><code v-html="code2"></code></pre>
        </div>
        <!-- 图标按钮 -->
        <div class="content__box">
            <h2 class="title" id="button-icon">
                <router-link to="/introduce/button-view#button-icon">#</router-link>
                图标按钮
            </h2>
            <!-- <i style="color: #900">！该项目的 icon 取自 Element ，为了命名统一，所以将 el-icon-xxx 改为了 pan-icon-xxx</i> -->
            <p>设置<code>icon</code>属性即可，icon 的列表可以参考 Element 的 icon 图标，也可以设置在文字右边的 icon ，只要使用<code>i</code>标签即可，可以使用自定义图标。</p>
            <h4>演示效果</h4>
            <div>
                <pan-button icon="pan-icon-edit"></pan-button>
                <pan-button icon="pan-icon-message" type="primary"></pan-button>
                <pan-button disabled icon="pan-icon-message" type="primary"></pan-button>
                <pan-button icon="pan-icon-delete" type="danger" circle></pan-button>
                <pan-button icon="pan-icon-user-solid" type="primary"> 联系人</pan-button>
                <pan-button type="primary">分享 <i class="pan-icon-upload pan-icon--right"></i></pan-button>
            </div>
            <h4>代码演示</h4>
            <div class="codeView" v-highlight>
                <pre class="language-html"><code v-html="code3"></code></pre>
            </div>
        </div>
        <div class="content__footer">
            <router-link to="/introduce/started"> <span class="iconfont">&#xe65e;</span> 快速上手</router-link>
            <router-link to="/introduce/input-view">Input 输入框 <span class="iconfont">&#xe65d;</span> </router-link>
        </div>
    </div>
</template>

<script>
export default{
    name: 'buttonView',
    data () {
        return {
            code1: `&lt;div&gt;
    &lt;pan-button&gt;默认按钮&lt;/pan-button&gt;
    &lt;pan-button type=&quot;primary&quot;&gt;主要按钮&lt;/pan-button&gt;
    &lt;pan-button type=&quot;success&quot;&gt;成功按钮&lt;/pan-button&gt;
    &lt;pan-button type=&quot;info&quot;&gt;信息按钮&lt;/pan-button&gt;
    &lt;pan-button type=&quot;warning&quot;&gt;警告按钮&lt;/pan-button&gt;
    &lt;pan-button type=&quot;danger&quot;&gt;危险按钮&lt;/pan-button&gt;
&lt;/div&gt;
&lt;div&gt;
    &lt;pan-button plain&gt;朴素按钮&lt;/pan-button&gt;
    &lt;pan-button round&gt;圆角按钮&lt;/pan-button&gt;
    &lt;pan-button circle icon=&quot;pan-icon-search&quot;&gt;&lt;/pan-button&gt;
    &lt;pan-button&gt;默认按钮&lt;/pan-button&gt;
&lt;/div&gt;`,
            code2: 
`&lt;div&gt;
    &lt;pan-button disabled&gt;默认按钮&lt;/pan-button&gt;
    &lt;pan-button disabled type=&quot;primary&quot;&gt;主要按钮&lt;/pan-button&gt;
    &lt;pan-button disabled type=&quot;success&quot;&gt;成功按钮&lt;/pan-button&gt;
    &lt;pan-button disabled type=&quot;info&quot;&gt;信息按钮&lt;/pan-button&gt;
    &lt;pan-button disabled type=&quot;warning&quot;&gt;警告按钮&lt;/pan-button&gt;
    &lt;pan-button disabled type=&quot;danger&quot;&gt;危险按钮&lt;/pan-button&gt;
&lt;/div&gt;
&lt;div&gt;
    &lt;pan-button plain disabled&gt;默认按钮&lt;/pan-button&gt;
    &lt;pan-button plain disabled type=&quot;primary&quot;&gt;主要按钮&lt;/pan-button&gt;
    &lt;pan-button plain disabled type=&quot;success&quot;&gt;成功按钮&lt;/pan-button&gt;
    &lt;pan-button plain disabled type=&quot;info&quot;&gt;信息按钮&lt;/pan-button&gt;
    &lt;pan-button plain disabled type=&quot;warning&quot;&gt;警告按钮&lt;/pan-button&gt;
    &lt;pan-button plain disabled type=&quot;danger&quot;&gt;危险按钮&lt;/pan-button&gt;
&lt;/div&gt;
`,
            code3: 
`&lt;div&gt;
    &lt;pan-button icon=&quot;pan-icon-edit&quot;&gt;&lt;/pan-button&gt;
    &lt;pan-button icon=&quot;pan-icon-message&quot; type=&quot;primary&quot;&gt;&lt;/pan-button&gt;
    &lt;pan-button disabled icon=&quot;pan-icon-message&quot; type=&quot;primary&quot;&gt;&lt;/pan-button&gt;
    &lt;pan-button icon=&quot;pan-icon-delete&quot; type=&quot;danger&quot; circle&gt;&lt;/pan-button&gt;
    &lt;pan-button icon=&quot;pan-icon-user-solid&quot; type=&quot;primary&quot;&gt; 联系人&lt;/pan-button&gt;
    &lt;pan-button type=&quot;primary&quot;&gt;
        分享 
        &lt;i class=&quot;pan-icon-upload pan-icon--right&quot;&gt;&lt;/i&gt;
    &lt;/pan-button&gt;
&lt;/div&gt;
`
        }
    }
}
</script>

<style lang="scss">
.button-view {
    & > .content__box .pan-button{
        margin: 10px;
    }
}
</style>
