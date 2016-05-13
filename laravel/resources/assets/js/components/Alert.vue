<template>
    <div :class="alertClasses" v-show="show">
        <slot></slot>
        <span class="Alert__close" @click="show = false">x</span>
    </div>
</template>

<script>
    export default {
        props: ['type'],

        data() {
            return {
                show: true
            };
        },

        computed: {
            alertClasses() {
                var type = this.type;

                return {
                    'Alert': true,
                    'Alert--success': type == 'success',
                    'Alert--error': type == 'error',
                }
            },
        },
    };
</script>


<style lang="stylus">
    .Alert
        position: relative
        background: #ddd
        border: 1px solid darken(#ddd, 10%)
        padding: 1em
        margin-bottom: 10px

    .Alert--success
        background: lighten(green, 70%)
        border: 1px solid lighten(green, 70%)

    .Alert--error
        background: lighten(red, 70%)
        border: 1px solid lighten(red, 70%)

    .Alert__close
        position: absolute
        top: 1em
        right: 1em
        font-weight: bold
        cursor: pointer
</style>