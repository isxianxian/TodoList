<template>
    <div class="todo-info">
        <span class="total">{{total}} item left</span>
        <div class="tabs">
            <a
                :class="['btn','primary',' border' ,state==index?'actived':'']"
                v-for="(item,index) in states"
                :key="index"
                @click="toggleEvent(index)"
            >{{item}}</a>
        </div>
        <button class="btn info" @click="clearCompleted">Clear Completed</button>
    </div>
</template>

<script>
    export default {
        name: 'TodoInfo',
        props: {
            total: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                states: ['all', 'active', 'completed'],
                state: 0
            }
        },
        methods: {
            toggleEvent(index) {
                this.state = index
                this.$emit('toggle', index)
            },
            clearCompleted() {
                this.$emit('clear')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~css/theme.stylus'
    @import '~css/mixins.stylus'

    .todo-info
        display: flex
        justify-content: space-between
        padding: 5px 10px
        line-height: 30px
        font-weight: 400
        border-top: 1px solid rgba(0, 0, 0, 0.1)

        .total
            color: $red

        .tabs
            display: flex
            justify-content: space-between
            width: 220px

        .btn.primary.border
            primaryBorderBtn()

            &.actived
                primaryBtn()

        .btn.info
            infoBtn()
</style>
