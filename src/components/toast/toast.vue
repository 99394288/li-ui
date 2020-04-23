<template>
    <div>
        <div :class="styShow?'fade':'fade_end'" >
            <div class="li-toast-sty" v-show="visible">{{message}}</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            visible: false,
            styShow: false,
            message: ''
        }
    },
    methods:{

    }
}
</script>
<style lang="less" scoped>
.fade {
    animation: beginToast 1s;
}
.fade_end {
    animation: endToast 1s;
}
.li-toast-sty {
    padding: 5px 20px;
    color: #fff;
    background: rgba(0, 0, 0, .8);
    border-radius: 5px;
    text-align: center;
    position: fixed;
    top: 30%;
    left: 50%;
    //   transform-origin:50% 50%;
    transform: translateX(-50%);
    transition: opacity 2s;
}
@keyframes beginToast {
    0% {
    opacity: 0; /*初始状态 透明度为10%*/
    }
    100% {
    opacity: 1; /*结尾状态 不透明*/

    }
}
@keyframes endToast {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0.01;

    }
}
</style>