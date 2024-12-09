$(document).ready(function() {
  $('.buy').click(function() {
    $('.card p').slideUp();
    $('.menu').css('top', '40%');
  });

  $('.cancel').click(function() {
    $('.card p').slideDown();
    $('.menu').css('top', '80%');
  });

  $('.addcart').click(function() {
    var y = 180;
    $('.content').css({
      'transform': 'rotateY(' + y + 'deg)'
    });

    $('.content').delay(3000).queue(function() {
      $(this).css({
        'transform': 'rotateY(0deg)'
      }).dequeue();
      $('.card p').slideDown();
      $('.menu').css('top', '80%');
      $('.icon').toggle();
    });
  });
});
