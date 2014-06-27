$('.js-status-block').each(function(i){
  var statusBlock = $(this);
  
  setTimeout(function() {
    statusBlock.addClass('opacity-1');
  }, 500*i);
});



