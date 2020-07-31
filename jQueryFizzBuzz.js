$(function(){
  $('#myfunc').click(function(){
    $('#result').empty();
    const myfuncNum = $('#myfuncNum').val(); //for文最大値　1000以上の時エラーメッセージを出すコーディング
    const fizzNum = $('.new-form').find(); //倍数A;
    const buzzNum = $('#Buzznum').val(); //倍数B;
    const wordA = $('#wordA').val(); //Aの変換文字
    const wordB = $('#wordB').val(); //Bの変換文字
//エラーメッセージが一番外のif文。全部通ってfor文が起動
    // if(myfuncNum ===''){
    //   $('#error-message0').text('※最大値を入力してください');
    // } else if(fizzNum ===''){
    //   $('#error-message1').text('※倍数Aを入力してください');
    // } else if(wordA ===''){
    //   $('#error-message2').text('※変化後の文字を入力してください');
    // } else if(buzzNum ===''){
    //   $('#error-message3').text('※倍数Bを入力してください');
    // } else if(wordB ===''){
    //   $('#error-message4').text('※変更後の文字を入力してください');
    // } else {
        for(let i = 1; i <= myfuncNum; i++) {
          if(myfuncNum >=1001 ){
            break;
          } else if(i % (fizzNum * buzzNum) ===0){
              const list = $('<li>');
              list.html(wordA + wordB);
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
      // }
  });

  $('.form-delete').click(function(){
    //入力フォームを含めた要素、たぶんdivごと削除
    $(this).parent().remove();
  });

  $('.form-create').click(function(){
    //入力フォームを含めた要素、たぶんdivごと追加
    $('.btn').before('<div class="new-form"><span>変化させる値：</span><input type="number" min="1" max="1000"><span> 文字列：</span><input type="text"><button class="form-delete">削除</button></br></div>');
  });

});
