var app = new Vue({
  el: '#app',
  data: {
    newTodoTitle: null,
    num: 0,
    todos:[]
  },
  methods: {
    addTodo: function(){
      this.num += 1;
      this.todos.push({id: this.num, title: this.newTodoTitle});
      this.newTodoTitle = null;

    }
  }

})
