(function ($) {
  $.overlayBox = function (options) {
    var settings = {
      overlayIn : "bounceIn", // Effects are based on animate.css
      overlayOut: "bounceOut", // Effects are based on animate.css
      closeTrigger : '.overlay-bg',
      callbackInDuration:1000,
      callbackOutDuration:1000,
      overlayInCallBack :  function(){} ,//overlay in call back function
      overlayOutCallBack : function(){}, //overlay out call back function
      responsive:true,
    }
    if (options) {
      $.extend(settings,options)
    }
    var trigger = this;
    var target = $('body').find(settings.target)
    target.append('<div class="overlay-bg"></div>')

    function closeOverlayBox() {
      $('.overlay-box').hide(function () {
        target.remove('.overlay-bg')
      });
    }
    // if(settings.closeTrigger != undefined){
    //   settings.closeTrigger = '.overlay-bg'
    // }
    console.log(settings);
    $(document).on('click', settings.closeTrigger , function () {
      closeOverlayBox();
    });
  }
})(jQuery)
