
var app = new Vue({
    el: '#app',
    data: {
      newTodoTitle: null,
      newname:"",
      todos:[],//初期値でローカルデータ取得
      filter:'all',
      addDate: '',
      viewtodo: []
    },
    computed: {
      //算出プロパティ。dataの拡張版のようなもの
      // filterTodos: function(){//9/16エラー吐いてます
      //   if(this.filter === 'all'){
      //     return this.todos
      //   }else if(this.filter === 'completed'){
      //   return this.todos.filter((todo) => {
      //     return todo.completed;//completedクラスがついてるものだけ配列に入れなおし、返している
      //   })
      //   }else if(this.filter === 'active'){
      //     return this.todos.filter((todo) => {
      //       return !todo.completed;//completedクラスが付いていないtodを表示
      //     })
      //   }
      // },
    },
    methods: {
      addTodo: function(){
        if(this.newTodoTitle == null || this.newname ===""){
          alert("入力Error。記述した項目を確認してください");
          return;//処理中断
        }
        this.time();
        this.todos.push({title: this.newTodoTitle,　name: this.newname, date: this.addDate, completed:false});
        localStorage.setItem('todo', JSON.stringify(this.todos))//ローカルに保存
        this.viewtodo = JSON.parse(localStorage.getItem('todo'));//todosにローカルのデータ代入
        this.newTodoTitle = null;
      },
      remove: function(index){
        var item = JSON.parse(localStorage.getItem('todo'));//index番のtitleを1個消す
        //ここにlocalからデータを消すメソッド
      },
      time: function()  {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() +1;
        var day = date.getDate();
        return this.addDate = year + '/' + month + '/' + day;
      },
      checkUpdate: function(){
        this.todos = localStorage.setItem('todo', JSON.stringify(this.todos));
        this.viewtodo = localStorage.setItem('todo', JSON.stringify(this.todos));
      }
      
    }
})
  