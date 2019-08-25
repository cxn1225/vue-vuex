<template>
    <div class="app-body">
        <h3>
            待办事项
        </h3>
        <ul>
            <li @dblclick="item.completed = true" :class="{bac:item.completed}" v-for="(item, index) in sxTodos"
                :key="index">{{item.title}}<span @click="deleteTodo(index)">删除</span></li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters, mapState, mapMutations } from "vuex"
    export default {
        name: 'app-body',
        computed: mapGetters(["sxTodos",]),
        methods: mapMutations(["deleteTodo"]),
        created() {
            this.$store.commit("getTodos")
            this.$store.getters.sxTodos
        },
    }
</script>


<style scoped>
    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    li {
        width: 320px;
        background-color: rgb(20, 92, 20);
        margin: 10px 0;
        border-radius: 10px;
        text-align: center;
        padding: 15px 0;
        padding-right: 20px;
    }

    .bac {
        background-color: rgb(27, 27, 116);
    }

    span {
        float: right;
        color: red;
        cursor: pointer;
    }
</style>