;!function () {
  $(document).ready(function() {
  $('.thumbnail').click(function(){
        $('.modal-body').empty();
      var title = $(this).parent('a').attr("title");
      $('.modal-title').html(title);
      $($(this).parents('div').html()).appendTo('.modal-body');
      $('#galeria1').modal({show:true});
  });
  });
}()
