$(document).ready(function () {
  // Header Area Style
  // =================
  jQuery('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-nav',
    meanScreenWidth: '768',
    meanMenuOpen: '<span></span><span></span><span></span>',
  });

  // Quick View Area Style
  // ====================
  $('.open-gallery-link').click(function () {
    var items = [];
    $($(this).attr('href'))
      .find('.quick-bg')
      .each(function () {
        items.push({
          src: $(this),
        });
      });

    $.magnificPopup.open({
      items: items,
      gallery: {
        enabled: true,
      },
    });
  });


  // hero Active
  // ==============
  $('.hero_active').owlCarousel({
    loop: true,
    nav: true,
    navText: ['BACK', 'NEXT'],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // Product Active
  // ================
  $('.product_active').owlCarousel({
    loop: true,
    nav: true,
    margin: 30,
    navText: ['BACK', 'NEXT'],
    responsive: {
      0: {
        items: 1,
        navText: false,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  // Client icon
  // ==============
  $('.client-icon-active').owlCarousel({
    loop: true,
    nav: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });

  // Product Details
  // ===============
  $('#zoom_02').ezPlus({
    zoomType: 'lens',
    lensShape: 'round',
    lensSize: 200,
  });
  $('#zoom_03').ezPlus({
    zoomType: 'lens',
    lensShape: 'round',
    lensSize: 200,
  });
  $('#zoom_04').ezPlus({
    zoomType: 'lens',
    lensShape: 'round',
    lensSize: 200,
  });









  // Select Option
  // =============
  $('select').niceSelect({});

  
  $('select').niceSelect({});






});