function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#sidebar').addClass('stick');
        $('#sticky-anchor').height($('#sidebar').outerHeight());
    } else {
        $('#sidebar').removeClass('stick');
        $('#sticky-anchor').height(0);
    }
}