var fadeIn = $('.js-fade-in');
var mainContent = $('.js-main');
var onMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
var timeline = $('.js-timeline');

$(window).load(function() {
  if (onMobileDevice) {
    fadeIn.addClass('opacity-1');

  } else {
    fadeIn.each(function(i){
      var fadeIn = $(this);

      setTimeout(function() {
        fadeIn.addClass('opacity-1');
      }, 500*i);
    });
  };

  timeline.height(mainContent.outerHeight(true));
});

$(window).resize(function () {
  timeline.height(mainContent.outerHeight(true));
});
