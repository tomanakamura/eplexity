var $section = $('.js-section'),
    $footer = $('.js-section-footer'),
    $header = $('.js-section-header');

var section = {
  showFooter : function() {
    $footer.addClass('is-active');
  },
  hideFooter : function(){
    $footer.removeClass('is-active');
  },
  fixHeader : function() {
    $header.addClass('is-fixed');
    $section.css({paddingTop : $header.outerHeight()})
  },
  unfixHeader : function() {
    $header.removeClass('is-fixed');
    $section.css({paddingTop : 0})
  },
  init : function() {
    if ( $header.is('.section__header--sticky') ) {
      $(window).scroll(function() {
        if ( $(window).scrollTop() > $header.outerHeight()*2 ){
          section.fixHeader();
        } else {
          section.unfixHeader();
        }
      });
    }
  }
}

section.init();
