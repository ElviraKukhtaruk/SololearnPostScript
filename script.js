$.ajax({
   url: '/Discuss/Reply',
   data: {
      parentId: parseInt($('#discussionPost').attr('data-id')),
      message: randWord,
      questionAuthorId: parseInt($('.question').attr('data-userId'))
   },
   method: 'post',
   dataType: 'json',
   success: function (response) {
          console.log(getTime()+' ✅ Пост успешно добавлен.');
   },
   error: function(xhr, ajaxOptions, thrownError){
     console.log(getTime()+' ❌ Возникла ошибка: ');
     console.log(xhr);
   }
});
