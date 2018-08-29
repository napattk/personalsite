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

  $(window).scroll(function() {
    var hT = $('#about-section').offset().top,
        wH = $(window).height(),
        wS = $(this).scrollTop();
        $aboutHeader = $(".about-header");
        $aboutBody = $(".about-body");

     
    if (wS > (hT-wH)){
        console.log('H1 on the view!');
        $aboutHeader.addClass('about-header-viewed');
        $aboutBody.addClass('about-body-viewed');
    }
  });
  
  $(window).scroll(function() {
    var hT = $('#education-section').offset().top,
        wH = $(window).height(),
        wS = $(this).scrollTop();
        $educationHeader = $(".education-header");
        $educationBody = $(".education-body");

     
    if (wS > (hT-wH)){
        console.log('H2 on the view!');
        $educationHeader.addClass('education-header-viewed');
        $educationBody.addClass('education-body-viewed');
    }
  });

  $(window).scroll(function() {
    var hT = $('#experience-section').offset().top,
        wH = $(window).height(),
        wS = $(this).scrollTop();
        $experienceHeader = $(".experience-header");
        $experienceBody = $(".experience-body");

     
    if (wS > (hT-wH)){
        console.log('H3 on the view!');
        $experienceHeader.addClass('experience-header-viewed');
        $experienceBody.addClass('experience-body-viewed');
    }
  });













});