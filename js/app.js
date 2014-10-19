// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function(){
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing');

  });

  $.BgSwitcher.defaultConfig.images = ['images/slide0.jpg', 1, 5];

  $("#header").bgswitcher({
    // images: ["slide01.jpg", "slide02.jpg", "slide03.jpg", "slide04.jpg"],
    loop: true
  });
});
