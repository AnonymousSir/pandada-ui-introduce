<template>
  <div class="introduce">
    <aside class="sidebar hidden-scroll">
        <ul>
            <!-- 一级标题 -->
            <li v-for="(item1, index) in list" :key="item1.label+ index">
                <h3>{{item1.label}}</h3>
                <ul>
                    <!-- 二级标题 -->
                    <li v-for="(item2, index) in item1.children" :key="item2.label + index">
                        <router-link :to="item2.path" :class="{'iscolor': item2.isshow}" @click.native="jump(item2.children)">{{item2.label}}</router-link>
                        <ul class="sublist">
                            <!-- 三级标题 -->
                            <li v-for="(item3, index) in item2.children" :key="item3.label + index" v-show="item2.isshow">
                                <router-link :to="item3.path" :class="{'iscolor': item3.isshow}">{{item3.label}}</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </aside>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'introduce',
  data () {
    return {
      clickLabel: {},
      list : [
        {
            label: "介绍",
            children: [
                {
                    label: "Pandada UI",
                    path: "/introduce/about",
                    isshow: true,
                    children: [
                        {
                            label: "关于pandada",
                            path: "/introduce/about#about",
                            isshow: true
                        },
                        {
                            label: "提问",
                            path: "/introduce/about#lssues",
                            isshow: false
                        },
                        {
                            label: "联系方式",
                            path: "/introduce/about#contact",
                            isshow: false
                        },
                        {
                            label: "贡献代码",
                            path: "/introduce/about#contribution",
                            isshow: false
                        }
                    ]
                }
            ]
        },
        {
            label: "入门",
            children: [
                {
                    label: "安装",
                    path: "/introduce/install",
                    isshow: false
                },
                {
                    label: "快速上手",
                    path: "/introduce/started",
                    isshow: false
                }
            ]
        },
        {
            label: "组件",
            children: [
                {
                    label: "button 按钮",
                    path: "/introduce/button-view",
                    isshow: false,
                    children: [
                        {
                            label: "基础用法",
                            path: "/introduce/button-view#button-usage",
                            isshow: false
                        },
                        {
                            label: "禁用状态",
                            path: "/introduce/button-view#button-disable",
                            isshow: false
                        },
                        {
                            label: "图标按钮",
                            path: "/introduce/button-view#button-icon",
                            isshow: false
                        }

                    ]
                },
                {
                    label: "input 输入框",
                    path: "/introduce/input-view",
                    isshow: false,
                    children: [
                        {
                            label: "基本用法",
                            path: "/introduce/input-view#input-usage",
                            isshow: false
                        },
                        {
                            label: "禁用状态",
                            path: "/introduce/input-view#input-disable",
                            isshow: false
                        },
                        {
                            label: "清空",
                            path: "/introduce/input-view#input-empty",
                            isshow: false
                        },
                        {
                            label: "密码框",
                            path: "/introduce/input-view#input-password",
                            isshow: false
                        },
                    ]
                },
                {
                    label: "switch 开关",
                    path: "/introduce/switch-view",
                    isshow: false,
                    children: [
                        {
                            label: "基本用法",
                            path: "/introduce/switch-view#switch-usage",
                            isshow: false
                        }
                    ]
                },
                {
                    label: "radio 单选框",
                    path: "/introduce/radio-view",
                    isshow: false,
                    children: [
                        {
                            label: "基本用法",
                            path: "/introduce/radio-view#radio-usage",
                            isshow: false
                        },
                        {
                            label: "单选框组",
                            path: "/introduce/radio-view#radio-group",
                            isshow: false
                        }
                    ]
                },
                {
                    label: "checkbox 多选框",
                    path: "/introduce/checkbox-view",
                    isshow: false,
                    children: [
                        {
                            label: "基本用法",
                            path: "/introduce/checkbox-view#checkbox-usage",
                            isshow: false
                        },
                        {
                            label: "多选框组",
                            path: "/introduce/checkbox-view#checkbox-group",
                            isshow: false
                        }
                    ]
                },
                {
                    label: "dialog 对话框",
                    path: "/introduce/dialog-view",
                    isshow: false,
                    children: [
                        {
                            label: "基本用法",
                            path: "/introduce/dialog-view#dialog-usage",
                            isshow: false
                        }
                    ]
                },
            ]
        }
      ]
    }
  },
  methods: {
    jump (children) {
        if (children) {
            children.forEach(x => {
                x.isshow = false
            })
            children[0].isshow = true
            this.setSession()
        }
    },
    getSession () {
        let x = sessionStorage.getItem('list')
        if (x) {
            this.list = JSON.parse(x)
        }
        return
    },
    setSession () {
        sessionStorage.setItem('list', JSON.stringify(this.list))
    }
  },
  created () {
    this.getSession()
  },
  watch : {
    '$route' () {
        this.setSession()
        let path = this.$route.path
        let hash = this.$route.hash
        for (let i of this.list) {
            for (let j of i.children) {
                if (path == j.path) {
                    if (!j.isshow) {
                        j.isshow = true
                        this.jump(j.children)
                    }
                } else {
                    j.isshow = false
                }
                for (let k in j.children) {
                    if (hash) {
                        if (j.children[k].path.includes(hash)) {
                            if (!j.children[k].isshow) {
                                j.children[k].isshow = true
                            }
                        } else {
                            j.children[k].isshow = false
                        }
                    }
                }
            }
        }
        this.setSession()
    }
  },
}
</script>

<style lang="scss">
.iscolor {
  color: #3eaf7c;
}
.introduce {
  width: 100%;
  height: 100%;
  background-color: #fff;
  & > .view {
    width: calc(100% - 321px);
    height: 100%;
    padding: 0 80px 32px 80px;
    box-sizing: border-box;
    // fixed导致router-link不能滚动，看起来就像是router-link失效了
    // position: fixed;
    position: relative;
    left: 321px;
  }
  & > .sidebar {
    width: 320px;
    height: calc(100% - 61px);
    border-right: 1px solid #eaecef;
    position: fixed;
    top: 61px;
    left: 0;
    overflow-y: scroll;
    a {
        display: block;
        height: 100%;
        width: 100%;
        &:hover {
            color: #3eaf7c;
        }
    }
    ul {
        padding-left: 10px;
        margin-top: 0;
        h3 {
            margin: 10px 0;
        }
        ul {
            padding-left: 10px;
        }
        li {
            padding: 5px;
        }
    }
    .sublist {
        font-size: 14px;
    }
  }
  .isshow {
    color: #3eaf7c;
  }
}
</style>
