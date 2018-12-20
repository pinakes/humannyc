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

function StepOnOver(d) {
	switch (d) {
  	case 0:
    	document.getElementById("quote").innerHTML="<p>&ldquo;This is the quote for the first step.&rdquo;<br><small>Jean Rice, Picture the Homeless</small></p>";
    	break;
  	case 1:
    	document.getElementById("quote").innerHTML="<p>&ldquo;This instead is the quote for the step 2.&rdquo;<br><small>James Bond, Picture the Homeless</small></p>";
    }
}