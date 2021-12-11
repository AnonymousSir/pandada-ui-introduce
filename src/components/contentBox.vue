<template>
    <div class="content__box">
        <h1 class="title none" :id="id" v-if="h1">
            <router-link :to="to">#</router-link>
            {{idText}}
        </h1>
        <h2 class="title" :id="id" v-if="h2">
            <router-link :to="to">#</router-link>
            {{idText}}
        </h2>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'contentBox',
    props: {
        id: {
            type: String,
            default: ''
        },
        to: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        h1: {
            type: Boolean,
            default: false
        },
        h2: {
            type: Boolean,
            default: false
        },
    },
    computed: {
        idText () {
            return this.text ||this.id
        }
    }
}
</script>
