<template>
    <div class="app-header">
        <h3>添加内容</h3>
        <div style="position: relative">
            <input type="text" placeholder="...添加代办事项" v-model="title">
            <button @click="addTodo(title)">添加</button>
        </div>

        筛选：
        <select v-model="xuanzhong">
            <option v-for="(item, index) in xuan" :key="index">{{item}}</option>
        </select>
    </div>
</template>

<script>
    import { mapMutations, mapGetters } from "vuex"
    export default {
        name: 'app-header',
        data() {
            return {
                title: "",
                xuan: ["200", "100", "50", "20", "10"],
                xuanzhong: "200"
            }
        },
        methods: mapMutations(["addTodo"]),
        watch: {
            xuanzhong(newval, oddval) {
                this.$store.state.sx = newval
                this.$store.getters.sxTodos

            }
        },
    }
</script>


<style scoped>
    input {
        width: 98%;
        height: 30px;
        padding: 4px 8px;
        border: 1px solid green;
        margin-bottom: 20px;
    }

    button {
        width: 180px;
        height: 40px;
        padding: 3px 8px;
        border: 0;
        background-color: aqua;
        position: absolute;
        right: 0;
        color: #ffffff;
    }
</style>