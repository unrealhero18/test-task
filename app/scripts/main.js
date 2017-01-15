$(function() {
  //chosen
  (function() {
    $('.js-chosen-select').chosen({
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

      $(e.delegateTarget).children('a').removeClass('active');
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

  //magic line
  (function() {
    $.fn.magicLine = function() {
      var $magicLine = $('.js-magic-line');

      $magicLine.css({
        width: this.width() + 'px',
        left: this.position().left + parseInt( this.css('paddingLeft') ) + 'px'
      });

      return this;
    };
  })();

  //product extra nav
  (function() {
    var $linkCollections = $('.js-product-enav').children().children();
    $linkCollections.first().magicLine().addClass('active');

    $('.js-product-enav').on('click', 'a', function(e) {
      e.preventDefault();

      $linkCollections.removeClass('active');
      $(this).magicLine().addClass('active');
    });

    $('.js-product-enav').on('mouseenter', 'a', function() {
      $(this).magicLine();
    });

    $('.js-product-enav').on('mouseleave', 'a', function() {
      $linkCollections.filter('.active').magicLine();
    });
  })();
});
