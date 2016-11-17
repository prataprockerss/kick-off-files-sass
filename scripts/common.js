$(function () {
  $(document).on('focus','.animated-label .form-field input',function () {
    var target = $(this).parents('.form-field');
    target.addClass('filled');
  });
  $('.animated-label .form-field').each(function () {
    var target  = $(this);
    var input = $(this).find('input');
    if(input.val() == '' || input.val() == 'null' || input.val() == 'undefined'){
      target.removeClass('filled')
    }
    else{
      target.addClass('filled')
    }
  })
  $(document).on('blur','.animated-label .form-field input',function () {
    var target = $(this).parents('.form-field');
    var input = $(this);
    if(input.val() == '' || input.val() == 'null' || input.val() == 'undefined'){
      target.removeClass('filled')
    }
    else{
      target.addClass('filled')
    }
  });

});
