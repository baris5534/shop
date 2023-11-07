/* Owl Carousel 2 All Settings. See the bottom for how to use equal heights with matchHeight  plugin */

jQuery(document).ready(function($) {

    var owl = $("#owl-demo-2");
  
    owl.owlCarousel({
  
      
        autoplay:false,  
        autoplayTimeout:1000,
        autoplayHoverPause:false,    
    nav:false,
      items: 3,
      loop: true,
      center: true,
      rewind: false,
  
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      freeDrag: false,
  
      margin: 5,
      stagePadding: 0,
  
      merge: false,
      mergeFit: true,
      autoWidth: false,
  
      startPosition: 0,
      rtl: false,
  
      smartSpeed: 250,
      fluidSpeed: false,
      dragEndSpeed: false,
      responsive: {
        0: {
          items: 1,
          nav: false,
          margin:5,
          stagePadding:3,
        },
        480: {
          items: 1,
          nav: false
        },
        768: {
          items: 3,
          nav: false,
          loop: true,
          margin:7
        },
        992: {
          items: 3,
          nav: false,
          loop: true,
          margin:3
        }
      },
      responsiveRefreshRate: 200,
      responsiveBaseElement: window,
  
      fallbackEasing: 'swing',
  
      info: false,
  
      nestedItemSelector: false,
      itemElement: 'div',
      stageElement: 'div',
  
      refreshClass: 'owl-refresh',
      loadedClass: 'owl-loaded',
      loadingClass: 'owl-loading',
      rtlClass: 'owl-rtl',
      responsiveClass: 'owl-responsive',
      dragClass: 'owl-drag',
      itemClass: 'owl-item',
      stageClass: 'owl-stage',
      stageOuterClass: 'owl-stage-outer',
      grabClass: 'owl-grab',
      autoHeight: false,
      lazyLoad: false
  
    });
  
    $(".next").click(function() {
      owl.trigger('owl.next');
    });
    $(".prev").click(function() {
      owl.trigger('owl.prev');
    });
  
    /* Equal Heights using javascript */
    // $('.latest-blog-posts .thumbnail.item').matchHeight();
  
  });