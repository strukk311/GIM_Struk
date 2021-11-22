$(document).ready(function(){

    $(".owl-carousel").owlCarousel();
  });

  $(document).ready(function(){

    $(".content").hide().prev().click(function(){
        $("content").not(this).slideUp();
        $(this).next().not(":visible").slideDown();
    });
  });