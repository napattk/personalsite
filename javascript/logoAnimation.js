$(document).ready(function(){

    $(document.onload = function(){
    var $gifLogo = $(".logo-large");

    var rand =  Math.floor(Math.random() * (4 - 1 + 1) +1);


    $gifLogo.attr("src", "img/logo"+ rand +".gif?" + Math.random());
    });

    $(document.onload = function(){
    var $heroHeader = $(".hero-section-header");
    var $heroSubHeader = $(".hero-section-subheader");
    $heroHeader.toggleClass('hero-section-header-expanded');
    $heroSubHeader.toggleClass('hero-section-subheader-expanded');

    });




});