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
    var $slider = $('.js-single-product-slider');

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

  (function() {
    var customButtons = [
      '<button type="button" class="slick-arrow slick-prev icon icon-arrow-left"></button>',
      '<button type="button" class="slick-arrow slick-next icon icon-arrow-right"></button>'
    ];

    $('.js-many-products-slider').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 2,
      prevArrow: customButtons[0],
      nextArrow: customButtons[1],
      dots: false
    });

    $('.js-articles-slider').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      variableWidth: true,
      prevArrow: customButtons[0],
      nextArrow: customButtons[1],
      dots: false
    });
  })();

  //modal
  (function() {
    var settings = {
      type: 'image',
      gallery: { enabled: true }
    };

    $('.js-product-modal').magnificPopup(settings);
    $('.js-cert-modal').magnificPopup(settings);
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

    $('.js-product-enav').on('click', 'a', function() {
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

  //element sticky
  (function() {
    var $stickyElements = $('.js-sticky-element');
    var $path = $('.js-sticky-path');

    $(window).on('scroll', function() {
      var scrollY = window.scrollY;

      var shiftBottom = 0;
      $stickyElements.each(function(index, el) {
        var height = $(el).outerHeight();
        shiftBottom = height > shiftBottom ? height : shiftBottom;
      });

      var targetTop = $stickyElements.parent().offset().top;
      var targetBottom = targetTop + $path.height() - shiftBottom;
      var isFixed = $stickyElements.hasClass('fixed');

      if ( scrollY >= targetTop && scrollY < targetBottom ) {
        !isFixed && $stickyElements.addClass('fixed');
      } else {
        isFixed && $stickyElements.removeClass('fixed');
      }
    });
  })();

  //accordion
  (function() {
    $('.js-expand-trigger').on('click', function(e) {
      e.preventDefault();

      var $container = $(this).closest('.js-expand-container');
      var $data = $container.find('.js-expand-data').last();
      var $text = $container.find('.js-expand-text').last();

      if ( $(this).hasClass('active') ) {

        $(this).removeClass('active');
        $data.removeClass('active');
        $text.text( $(this).attr('data-text-show') );

      } else {

        $(this).addClass('active');
        $data.addClass('active');
        $text.text( $(this).attr('data-text-hide') );

      }
    });

    //tabs
    (function() {
      $('.js-tab-trigger').on('click', function(e) {
        e.preventDefault();

        var tabIndex = +this.dataset.tabIndex;
        var $commonContainer = $(this).closest('.js-tab-container');
        var $tabsContent = $commonContainer.find('.js-tabs-data');

        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        $tabsContent.each(function(index, el) {
          $(el).children().removeClass('active');
          $(el).children().eq(tabIndex).addClass('active');
        });
      });
    })();

    //video
    (function() {
      $('.js-video-play').on('click', function(e) {
        e.preventDefault();

        var $container = $(this).parent();
        var $thumb = $container.children('img');
        var box = [ $container.width(), $container.height() ];
        var ytVideo = this.dataset.ytVideo;
        var iframeNode = '<iframe width="' + box[0] + '" height="' + box[1] + '" src="https://www.youtube.com/embed/' + ytVideo + '?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>';

        $(this).addClass('active');
        $thumb.replaceWith(iframeNode);
      });
    })();
  })();
});
