//JS ふぁずびず問題（JS）

const myfunc = document.getElementById("myfunc");
myfunc.addEventListener("click", function() {
const num = document.getElementById("myfuncNum").value;
document.getElementById('result').textContent = null; //リストの初期化
for (let i = 1; i <= num; i++) {
    if(num >= 1001){
          break;
    }else if(i % 15 === 0){
        const li = document.createElement('li'); //liノードを作成
        li.textContent ="FizzBuzz";　//liに文字列を入れる
        document.getElementById('result').appendChild(li);//resultにliを追加。以下繰り返し
     } else if (i % 5 === 0){
        const li = document.createElement('li');
        li.textContent ="Buzz";
        document.getElementById('result').appendChild(li);
     } else if(i % 3 === 0){
        const li = document.createElement('li');
        li.textContent ="Fizz";
        document.getElementById('result').appendChild(li);
     }else {
        const li = document.createElement('li');
        li.textContent = i;
        document.getElementById('result').appendChild(li);
     }
   }
} );
