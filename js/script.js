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
    $('#step1ReadMore').show().load(contentToRead);
}
function readMore2(d) {
    var contentToRead = d + ".html";
    $('#step2ReadMore').show().load(contentToRead);
}
function readMore3(d) {
    var contentToRead = d + ".html";
    $('#step3ReadMore').show().load(contentToRead);
}
function readMore4(d) {
    var contentToRead = d + ".html";
    $('#step4ReadMore').show().load(contentToRead);
}
function readMore5(d) {
    var contentToRead = d + ".html";
    $('#step5ReadMore').show().load(contentToRead);
}
function readMore6(d) {
    var contentToRead = d + ".html";
    $('#step6ReadMore').show().load(contentToRead);
}
function readMore7(d) {
    var contentToRead = d + ".html";
    $('#step7ReadMore').show().load(contentToRead);
}
function readMore8(d) {
    var contentToRead = d + ".html";
    $('#step8ReadMore').show().load(contentToRead);
}

function closeReadMore() {
    $('.readMore').hide();
}