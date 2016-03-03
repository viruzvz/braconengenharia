;!function () {
  $(document).ready(function() {
  $('.thumbnail').click(function(){
        $('.modal-body--js').empty();
      var title = $(this).parent('a').attr("title");
      $('.modal-title--js').html(title);
      $($(this).parents('div').html()).appendTo('.modal-body--js');
      $('#galeria1').modal({show:true});
  });
  });
}()
