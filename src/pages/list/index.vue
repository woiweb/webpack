<template>
    <div class="outer">
        <input v-if='data.hot' type="search" v-model="data.hot.hotWord" />
        <ul>
            <li class="cl" :key="item.gid" v-for="item in data.channel">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
import '../../common.less';
import {fetch} from 'whatwg-fetch';
import { log } from 'util';

export default {
    components: {
    },
    data() {
        return {
            list : [
                1,2,3,4
            ],
            data: {}
        }
    },
    created() {
        let that = this;
        fetch('/api').then(function(res) {
            return res.json();
        }).then(function(ret) {
            if(ret && ret.data) {
                that.data = ret.data;
            }

        }).catch((e)=>{
            console.log(e)
        })

    },
    methods: {
        
    },
};
</script>

<style lang="less">
html, body {
    margin: 0;
}
ul,li{
    list-style: none;
    margin: 0;
    padding: 0;
}

input{
    background-color: #ebebec;
    border: 0;
    width: 350px;
    height: 27px;
    display: block;
    margin: 0 auto;
    padding: 3px 5px;
    margin: 10px;
}
.cl{
    float: left;
    font-size: 14px;
    color: #fd3aaf;
    padding: 0 5px;
    cursor: pointer;
}
</style>
