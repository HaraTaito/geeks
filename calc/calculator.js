 Vue.config.devtools = true;

var app = new Vue({
   el: '#app',
  data: {
    output: '0',
    items: [
      ['7', '8', '9', '/'],
      ['4', '5', '6', '*'],
      ['1', '2', '3', '-'],
      ['0', '.', '+', '=']

    ],
    resultlist: []//課題点、値を入れることには成功している→あとはHTMLにわたすだけ
  },
  methods: {
    calc: function(cmd) {//calcでメソッド起動するボタンをデータで連携。itemで送られてcmdで受け取っている。
        if(cmd === '='){
          try{
            this.output = eval(this.output);
            this.resultlist.push({calcResult: this.output});//課題点resultlistに計算結果入れる→HTML計算結果履歴に表示したい

          } catch(error){
            alert('計算式Error');
          }
        }else if(cmd === 'C'){
          this.output = '0';
        }else if(this.output ==='0'){
          this.output = cmd;//
        }else{
          this.output += cmd;
        }
    }
  }
})
