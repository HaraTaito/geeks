$(function(){
  $('#myfunc').click(function(){
    var myfuncNum = $('#myfuncNum').val(); //for文最大値　1000以上の時エラーメッセージを出すコーディング
    var fizzNum = $('#Fizznum').val(); //倍数A;
    var buzzNum = $('#Buzznum').val(); //倍数B;
    var wordA = $('#wordA').val(); //Aの変換文字
    var wordB = $('#wordB').val(); //Bの変換文字

    for(let i = 1; i <= myfuncNum; i++;) {
      if(myfuncNum >=1001 ){
        break;
      }else{
        $('result').append('<div>要素は追加されています</div>')
      }
    }
  });

});
