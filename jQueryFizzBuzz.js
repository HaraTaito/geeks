$(function(){
  $('#myfunc').click(function(){
    $('#result').empty();//ボタンを押すごとにリストを空にする。リストの連続表示を防ぐ
      const myfuncNum = $('#myfuncNum').val();//for文最大値
      const nums = $('.new-form').find('.num');
      const texts = $('.new-form').find('.text');
      const numArray = [];
      const textArray = [];
      let a = 1;

      for(i = 0; i < nums.length; i++) {
        numArray.push(nums[i].value);//配列って概念がfindにないからindexに順番に入れているらしい
      }

      for(i = 0; i < texts.length; i++) {
        textArray.push(texts[i].value); //上記と同じ
      }
      // for (i = 0; i < nums.length; i++) {
      //   a *= nums[i].value; //公倍数をaに先に入れて以下で使いやすくする
      // }

        outside : for(let i = 1; i <= myfuncNum; i++){
          if(myfuncNum >=1001 ){
            break;
          } else{
            for(j = 0; j < nums.length; j++) {
              if(i % nums[j].value ===0){
                 const list = $('<li>');
                 list.html(textArray[j]);
                 $('#result').append(list);
                 break outside;
              } else if(i % a === 0) {
                const list = $('<li>');
                list.html(textArray);
                $('#result').append(list);
                break outside;
              } else {
                const list = $('<li>');
                list.html(i);
                $('#result').append(list);
                break outside;
              }
            }
          }
      }
});

  $(document).on("click", '.form-delete', function () {
    $(this).parent().remove();
  });

  $('.form-create').click(function(){
    $('.btn').before('<div class="new-form"><span>変化させる値：</span><input class="num" type="number" min="1" max="1000"><span> 文字列：</span><input class="text" type="text"><button class="form-delete">削除</button></br></div>');
  });
});
