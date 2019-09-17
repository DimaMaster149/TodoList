<template>
  <div>
    <input type="text" v-model="newTodo">
    <button @click="addTodo($event)">Add todo</button>
    <br>
    <input type="checkbox" v-model="showChecked">
    <span> Show checked todos </span>
    <template v-if="!showChecked">
      <todo-list-item 
        v-for="todo in todos" 
        :todo="todo" 
        :key="todo.id"
        @check-todo="checkTodo($event)"
      ></todo-list-item>
    </template>
    <template v-else>
      <todo-list-item 
        v-for="todo in checkedTodos" 
        :todo="todo" 
        :key="todo.id"
      ></todo-list-item>
    </template>

  </div>
</template>

<script>
import TodoListItem from '@/components/TodoListItem.vue';

export default {
  name: 'todo-list',
  components: {
    TodoListItem
  },
  data() {
    return {
      todos: [],
      newTodo: '',
      showChecked: false,
      editTodo: {},
    };
  },
  computed: {
    checkedTodos() {
      return this.todos.filter(todo => todo.isDone === true);
    },
  },
  watch: {
    todos: {
      handler(newTodos) {
        console.log(newTodos)
      },
      deep: true,
    },
  },
  methods: {
    addTodo() {
      if (this.newTodo === '') {
        return;
      }
      this.todos.push({
        id: Math.round(Math.random() * 100),
        text: this.newTodo,
        isDone: false
      });
      this.newTodo = '';
    },
    checkTodo(id) {
      this.todos = this.todos.map(todo => {
        if (todo.id === id) {
          todo.isDone = true;
        }
        return todo;
      });
    },
  }
}
</script>