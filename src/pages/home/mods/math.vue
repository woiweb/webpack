<template>
    <div>
        <div class="num">{{val}}</div>
        <button @click="clk()">Click</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            val: 1
        }
    },
    methods: {
        clk() {
            this.val++
        }

        
    },
};
</script>

<style lang="less">
.num{
    font-size: 20px;
    color: red;
    
}
</style>
