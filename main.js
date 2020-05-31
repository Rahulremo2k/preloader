// preloader
$(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(700).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });