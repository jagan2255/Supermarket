window.onscroll = function() {
    const navbar = document.getElementsByClassName("nav22")[0];
    const threshold = navbar.offsetHeight;
  
    if (window.pageYOffset >= threshold) {
      navbar.style.backgroundColor = "black";
    } else {
      navbar.style.backgroundColor = "transparent";
    }
  };


  $(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });


  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
          items:4,
          loop:true,
          margin:10,
          autoplay:true,
          autoplayTimeout:2000,
          autoplayHoverPause:true
     
        }
    }
})