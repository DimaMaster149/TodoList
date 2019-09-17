<template>
  <div>
    <span class="px-4">{{todo.text}}</span> 
    <span v-if="!todo.isDone" @click="checkTodo()">
      <font-awesome-icon :icon="['fas', 'check']" class="check-icon"/>
    </span>
  </div>
</template>

<script>
export default {
  name: 'todo-list-item',
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    checkTodo() {
      this.$emit('check-todo', this.todo.id);
    },
  },
}
</script>