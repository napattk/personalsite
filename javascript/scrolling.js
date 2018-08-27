$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 90
      }, 800);
    } 
  });
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    var $hero = $(".hero-section");

    $nav.toggleClass('scrolled', $(this).scrollTop() > $hero.height());
  });
});