var onMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

$(window).load(function() {
  if (onMobileDevice) {
    $('.js-fade-in').show();

  } else {
    $('.js-fade-in').each(function(i){
      var fadeIn = $(this);

      setTimeout(function() {
        fadeIn.addClass('opacity-1');
      }, 500*i);
    });
  };

  $('.js-timeline').height($('.js-main').outerHeight(true));

  $(window).resize(function () {
    $('.js-timeline').height($('.js-main').outerHeight(true));
  });
});
