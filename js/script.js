function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#sidebar').addClass('stick');
        $('#sticky-anchor').height($('#sidebar').outerHeight());
        $('#world').addClass('small');
        $('#sphere').height("100");
        $('#sphere').width("100");
    } else {
        $('#sidebar').removeClass('stick');
        $('#sticky-anchor').height(0);
        $('#world').removeClass('small');
        $('#sphere').height("300");
        $('#sphere').width("300");
    }
}