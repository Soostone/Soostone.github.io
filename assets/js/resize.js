$(function () {
  function inViewport(element) {
    var elementHeight = element.outerHeight(),
    h = $(window).height(),
    r = element[0].getBoundingClientRect(),
    t = r.top,
    b = r.bottom;
    return Math.max(0, t > 0 ? Math.min(elementHeight, h - t) : Math.min(b, h));
  }

  var sideBarResize = function() {
    if ($(window).width() >= $('.width-ruler').width()) {
      $('.side-bar').height(inViewport($('.main'))).css('top', inViewport($('.site-super-header')));
    } else {
      $('.side-bar').height('auto');
    }
  };

  sideBarResize();
  $(window).on('resize scroll', sideBarResize);
});
