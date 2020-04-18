<template>
    <div>
        <todo-header></todo-header>
        <todo-main></todo-main>
        <todo-footer></todo-footer>
    </div>
</template>

<script>
    import './assets/css/gloabl.stylus'

    import TodoHeader from './components/TodoHeader.vue'
    import TodoMain from './components/TodoMain/TodoMain.vue'
    import TodoFooter from './components/TodoFooter.vue'

    export default {
        name: 'App',
        data() {
            return {}
        },
        components: {
            TodoHeader,
            TodoMain,
            TodoFooter
        }
    }
</script>

<style lang="stylus" scoped></style>
