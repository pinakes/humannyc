function StepOver(d) {
	switch (d) {
  	case 0:
    	document.getElementById("quote").innerHTML="<p>&ldquo;This is the quote for the first step.&rdquo;<br><small>Jean Rice, Picture the Homeless</small></p>";
    	break;
  	case 1:
    	document.getElementById("quote").innerHTML="<p>&ldquo;This instead is the quote for the step 2.&rdquo;<br><small>James Bond, Picture the Homeless</small></p>";
    }
}

function readMore1(d) {
    var contentToRead = d + ".html";
    //var readMoreStepOne = $(document).ready(function(e) {$('#stepOneReadMore');});

    //console.log(readMoreStepOne)

    $('#step1ReadMore').show().load(contentToRead);
}
function readMore2(d) {
    var contentToRead = d + ".html";
    //var readMoreStepOne = $(document).ready(function(e) {$('#stepOneReadMore');});

    //console.log(readMoreStepOne)

    $('#step2ReadMore').show().load(contentToRead);
}

function closeReadMore() {
    $('.readMore').hide();
}