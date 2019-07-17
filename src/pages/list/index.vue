<template>
    <div class="outer">
        <ul>
            <li :key="item" v-for="item in list">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
            list : [
                1,2,3,4
            ]
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
</style>
