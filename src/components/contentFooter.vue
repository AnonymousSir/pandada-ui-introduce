<template>
    <div class="content__footer">
        <router-link :to="leftTo" v-if="leftText"> <span class="iconfont">&#xe65e;</span> {{leftText}}</router-link>
        <router-link :to="rightTo" v-if="rightText">{{rightText}} <span class="iconfont">&#xe65d;</span> </router-link>
    </div>
</template>

<script>
export default{
    name: 'contentFooter',
    props: {
        leftTo: {
            type: String,
            default: ''
        },
        leftIcon: {
            type: String,
            default: '&#xe65e;'
        },
        leftText: {
            type: String,
            default: ''
        },
        rightTo: {
            type: String,
            default: ''
        },
        rightIcon: {
            type: String,
            default: '&#xe65d;'
        },
        rightText: {
            type: String,
            default: ''
        }
    }
}
</script>
