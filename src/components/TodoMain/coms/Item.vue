<template>
    <div :class="['todo-item' , todo.completed?'completed':'']">
        <input type="checkbox" v-model="todo.completed" />
        <label>{{todo.content}}</label>
        <button @click="delEvent"></button>
    </div>
</template>

<script>
    export default {
        props: {
            todo: Object
        },
        data() {
            return {}
        },
        methods: {
            delEvent() {
                this.$emit('del', this.todo.id)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~css/theme.stylus'
    @import '~css/mixins.stylus'

    .todo-item
        display: flex
        justify-content: space-between
        padding: 10px
        font-size: 24px
        border-top: 1px solid rgba(0, 0, 0, 0.1)

        &:hover
            button:after
                content: 'X'
                font-size: 24px
                color: $lightred
                cursor: pointer

        &.completed
            label
                color: #d9d9d9
                text-decoration: line-through

        input
            width: 50px
            height: 30px
            text-align: center
            cleanDefaultStyle()

            &:after
                content: url('~img/unChecked.svg')

            &:checked:after
                content: url('~img/checked.svg')

        label
            flex: 1
            transition: color 0.4s

        button
            width: 40px
            cleanDefaultStyle()
            background-color: transparent
</style>
