$(function(){
  $('#myfunc').click(function(){
    $('#result').empty();//ボタンを押すごとにリストを空にする。リストの連続表示を防ぐ
    const inputArray = [];//初期化とリセット
    const myfuncNum = $('#myfuncNum').val();//for文最大値

    $('.new-form').each(function(index, element){
      let num = $(element).find('.num').val();
      let text = $(element).find('.text').val();
      let rensou = {numKey : num, textKey : text};

      inputArray.push(rensou);//配列に連想配列を1ペアずつ入れいている。キー名は一緒
      //[0番号　nums:x tezts:y・・・がフォームの数だけある]
    });

    for(let i = 1; i <= myfuncNum; i++) {
      let result = "";//初期化
      for(let j = 0; j < inputArray.length; j++) {
        if(i % inputArray[j].numKey === 0){
          result += inputArray[j].textKey;//文字列の代入と連結どっちもできる。
        }
      }
        if(result ==="") {
          result = i;
        }
            $('#result').append('<li>' + result + '</li>');
    }
  });

  $(document).on("click", '.form-delete', function () {
    $(this).parent().remove();
  });

  $('.form-create').click(function(){
    $('.btn').before('<div class="new-form"><span>変化させる値：</span><input class="num" type="number" min="1" max="1000"><span> 文字列：</span><input class="text" type="text"><button class="form-delete">削除</button></br></div>');
  });
});
