<template>
    <div class="outer">
        <h1>示例页面</h1>
        <input v-model="val" />
        <div>Hi:{{val}}</div>
        <mods></mods>
    </div>
</template>

<script>
import Mods from './mods/math.vue';

export default {
    name: 'Example',
    components: {
        Mods
    },
    data() {
        return {
            val: 111
        }
    },
    methods: {
        
    },
};
</script>

<style lang="less">
html, body {
    margin: 0;
}

.outer{
    padding: 20px;
    border: 2px solid #ccc;
    margin: 50px;

    h1{
        display: flex;
    }
}

</style>
