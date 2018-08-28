$(document).ready(function(){

    $(document.onload = function(){
    var $gifLogo = $(".logo-large");
    $gifLogo.attr("src", "img/logo.gif?" + Math.random());
    });

    $(document.onload = function(){
    var $heroHeader = $(".hero-section-header");
    var $heroSubHeader = $(".hero-section-subheader");
    $heroHeader.toggleClass('hero-section-header-expanded');
    $heroSubHeader.toggleClass('hero-section-subheader-expanded');

    });


});