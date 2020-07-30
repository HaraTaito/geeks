$(function(){
  $('#myfunc').click(function(){
    location.relord();
    const myfuncNum = $('#myfuncNum').val(); //for文最大値　1000以上の時エラーメッセージを出すコーディング
    const fizzNum = $('#Fizznum').val(); //倍数A;
    const buzzNum = $('#Buzznum').val(); //倍数B;
    const wordA = $('#wordA').val(); //Aの変換文字
    const wordB = $('#wordB').val(); //Bの変換文字

    for(let i = 1; i <= myfuncNum; i++) {
      if(myfuncNum >=1001 ){
        break;
      } else if(i % (fizzNum * buzzNum) ===0){
          const list = $('<li>');
          list.html('公倍数');
          $('#result').append(list);
      } else if(i % fizzNum ===0){
          const list = $('<li>');
          list.html(wordA);
          $('#result').append(list);
      } else if(i % buzzNum ===0){
          const list = $('<li>');
          list.html(wordB);
          $('#result').append(list);
      } else {
        const list = $('<li>');
        list.html(i);
        $('#result').append(list);
      }
    }
  });

});
