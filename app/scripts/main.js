$(function() {
  //chosen
  (function() {
    $(".js-chosen-select").chosen({
      disable_search: true,
      inherit_select_classes: true
    });
  })();

  //slick
  (function() {
    var $slider = $('.js-product-slider');

    $slider.slick({
      arrows: false,
      dots: false
    });

    $('.js-product-pagers').on('click', 'a', function(e) {
      e.preventDefault();

      $(this).parent().children('a').removeClass('active');
      $(this).addClass('active');

      var slideInder = + this.dataset.slide;
      $slider.slick('slickGoTo', slideInder);
    })
  })();

  //modal
  (function() {
    $('.js-modal-image').magnificPopup({
      type: 'image',
      gallery: { enabled: true }
    });
  })();
});
