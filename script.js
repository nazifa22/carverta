$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $(".header_1").css("position", "relative");
    } else {
      $(".header_1").css("position", "fixed");
    }    
  });
});

// $(window).scroll(function() {
//     if ($(this).scrollTop() >= 50) {       
//         $('#return-to-top').fadeIn(200);    
//     } else {
//         $('#return-to-top').fadeOut(200);   
//     }
//     $('#return-to-top').click(function() {      
//     $('body,html').animate({
//         scrollTop : 0                       
//     }, "700");
// });
// });

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  loop: true,
  nav: true,
  items: 1,
  slideSpeed: 100,
    paginationSpeed: 100,
    singleItem: true,
    navigation: true,
    scrollPerPage: true
});

});




