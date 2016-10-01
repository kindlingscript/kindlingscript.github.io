$(document).ready(function() {
  $('a[href="#portfolio"]').click(function() {
    $('html, body').animate({
      scrollTop: $('.portfolio').offset().top}, 2500);
  });

  $('a[href="#about"]').click(function() {
    $('html, body').animate({
      scrollTop: $('.about').offset().top}, 2000);
  });

  $('a[href="#contact"]').click(function() {
    $('html, body').animate({
      scrollTop: $('.contact').offset().top}, 3500);
  });

  $('.btn-large').click(function() {
    $('html, body').animate({
      scrollTop: $('.about').offset().top}, 2000);
  });
});
