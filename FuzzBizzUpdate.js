//JS ふぁずびず問題（JS）

const myfunc = document.getElementById("myfunc");
myfunc.addEventListener("click", function() {
const num = document.getElementById("myfuncNum").value;
document.getElementById('result').textContent = null; //リストの初期化
const fizzNum = document.getElementById("Fizznum").value;
const buzzNum = document.getElementById("Buzznum").value;
const wordA = document.getElementById("wordA").value;
const wordB = document.getElementById("wordB").value;
for (let i = 1; i <= num; i++) {
    if(num >= 1001){
          break;
    }else if(i % (fizzNum * buzzNum) === 0){
        const li = document.createElement('li'); //liノードを作成
        li.textContent =　wordA + wordB;　//liに文字列を入れる
        document.getElementById('result').appendChild(li);//resultにliを追加。以下繰り返し
     } else if (i % buzzNum === 0){
        const li = document.createElement('li');
        li.textContent = wordB;
        document.getElementById('result').appendChild(li);
     } else if(i % fizzNum === 0){
        const li = document.createElement('li');
        li.textContent =wordA;
        document.getElementById('result').appendChild(li);
     }else {
        const li = document.createElement('li');
        li.textContent = i;
        document.getElementById('result').appendChild(li);
     }
   }
} );
