<template>
    <div class="main-todo">
        <input
            class="add-todo"
            type="text"
            placeholder="what to do"
            autofocus
            v-model="content"
            @keyup.enter="addEvent"
        />
        <todo-item
            v-for="(item,index) in filterData"
            :key="index"
            :todo="item"
            @del="delEvent"
        ></todo-item>
        <todo-info
            v-show="todoData.length"
            :total="total"
            @toggle="toggleEvent"
            @clear="clearCompleted"
        ></todo-info>
    </div>
</template>

<script>
    import TodoItem from './coms/Item.vue'
    import TodoInfo from './coms/Info.vue'

    export default {
        data() {
            return {
                content: '',
                todoData: [],
                total: 0,
                state: 0
            }
        },
        methods: {
            addEvent() {
                if (!this.content) return

                let { todoData, content } = this,
                    temp = {
                        id: todoData.length
                            ? todoData[todoData.length - 1].id + 1
                            : 0,
                        content,
                        completed: false
                    }
                this.todoData.unshift(temp)

                this.content = ''
            },
            delEvent(e) {
                let index = this.todoData.findIndex(item => item.id === e)
                this.todoData.splice(index, 1)
            },
            toggleEvent(state) {
                this.state = state
            },
            clearCompleted() {
                this.todoData = this.todoData.filter(item => !item.completed)
            }
        },
        components: {
            TodoItem,
            TodoInfo
        },
        watch: {
            todoData: {
                deep: true,
                handler() {
                    this.total = this.todoData.filter(
                        item => !item.completed
                    ).length
                }
            }
        },
        computed: {
            filterData() {
                let data = this.todoData
                switch (this.state) {
                    case 1:
                        data = data.filter(item => !item.completed)
                        break
                    case 2:
                        data = data.filter(item => item.completed)
                        break
                }
                return data
            }
        },
        created() {
            this.total = this.todoData.filter(item => !item.completed).length
        }
    }
</script>

<style lang="stylus" scoped>
    .main-todo
        width: 600px
        margin: 0 auto
        background-color: #ffffff
        box-shadow: 0 0 5px #666666

        .add-todo
            width: 100%
            padding: 16px 16px 16px 36px
            box-sizing: border-box
            font-size: 24px
            border: none
            outline: none
</style>
