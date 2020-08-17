$(function(){
  $('#myfunc').click(function(){
    $('#result').empty();//ボタンを押すごとにリストを空にする。リストの連続表示を防ぐ
      const myfuncNum = $('#myfuncNum').val();//for文最大値
      let inputArray2 = [];

      $('.new-form').each(function(index, element){
      const num2 = $(element).find('.num').val();
      const text2 = $(element).find('.text').val();
      let rensou = {numKey2 : num2, textKey2 : text2}

      inputArray2.push(rensou);
    });

      for(let i = 1; i <= myfuncNum; i++){
        let kakuninn = "";

        for(let j = 0; j < inputArray2.length; j++){

          if(i % inputArray2[j].numKey2 === 0){
            kakuninn += inputArray2[j].textKey2;
          }
        }
        if(kakuninn === ""){
          kakuninn = i;
        }
        $('#result').append('<li>' + kakuninn);
      }

  });

      $(document).on("click", '.form-delete', function () {
        $(this).parent().remove();
      });

      $('.form-create').click(function(){
        $('.btn').before('<div class="new-form"><span>変化させる値：</span><input class="num" type="number" min="1" max="1000"><span> 文字列：</span><input class="text" type="text"><button class="form-delete">削除</button></br></div>');
      });
    });
