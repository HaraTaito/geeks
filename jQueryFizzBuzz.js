$(function(){
  $('#myfunc').click(function(){
    $('#result').empty();//ボタンを押すごとにリストを空にする。リストの連続表示を防ぐ
      const myfuncNum = $('#myfuncNum').val();//for文最大値
      const nums = $('.num').each(function(){
        $('num').val();
      });
      nums.each(function(){
        for(let i = 1; i <= myfuncNum; i++){
          if(myfuncNum >=1001 ){
            break;
          } else if (i % $('.num') ===0) {
            const list = $('<li>');
            list.html('.text[$(.num).index();]');
          } else {
            const list = $('<li>');
            list.html(i);
            $('#result').append(list);
          }
        }
      });
    });



  $(document).on("click", '.form-delete', function () {
    $(this).parent().remove();
  });

  $('.form-create').click(function(){
    $('.btn').before('<div class="new-form"><span>変化させる値：</span><input　class="num" type="number" min="1" max="1000"><span> 文字列：</span><input class="text" type="text"><button class="form-delete">削除</button></br></div>');
  });
});
