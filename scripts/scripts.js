$(document).ready(function() {

$('.mob-nav').click(function() {
  var nav = $('.main-nav');
  var icon = $('.mob-nav i');

  nav.slideToggle(200);

  if (icon.hasClass('fa-bars')) {
    icon.addClass('fa-times');
    icon.removeClass('fa-bars');
}
else {
    icon.addClass('fa-bars');
    icon.removeClass('fa-times');
}

});


$('.testimonials').slick({
  dots: true,
  autoplay:true,
  speed:1000,
  mobileFirst:true,
  adaptiveHeight:true,
  nextArrow: '<i class="fas fa-angle-right"></i>',
prevArrow: '<i class="fas fa-angle-left"></i>',


});


lightbox.option({
'wrapAround': true,
'alwaysShowNavOnTouchDevices':true,
});

});
