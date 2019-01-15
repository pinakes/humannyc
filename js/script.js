function StepOver(d) {
	switch (d) {
  	case 0:
    	document.getElementById("quote").innerHTML="";
    	break;
  	case 1:
    	document.getElementById("quote").innerHTML="<p>&ldquo;You&apos;re better off in the streets than the shelter.&rdquo;</p>";
        break;
    case 2:
        document.getElementById("quote").innerHTML="<p>&ldquo;Why I gotta stay here three more times before you see me and figure out I&apos;m homeless before you help me?&rdquo;</p>";
        break;
    case 3:
        document.getElementById("quote").innerHTML="<p>&ldquo;If the city wants people off the street, why make us wait a whole year?&rdquo;</p>";
        break;
    case 4:
        document.getElementById("quote").innerHTML="<p>&ldquo;It&apos;s not a shelter system that I&apos;m in; it&apos;s a Safe Haven, which is 10 times better--let me tell you--than the shelter system.&rdquo;</p>";
        break;
    case 5:
        document.getElementById("quote").innerHTML="<p>&ldquo;I can&apos;t get my birth certificate, so I can&apos;t really move forward with a lot of the programs. So I&apos;m kind of stuck right now&rdquo;<br><small>Ufemia, Picture The Homeless</small></p>";
        break;
    case 6:
        document.getElementById("quote").innerHTML="<p>&ldquo;He (case manager) basically explained to me that I do not fit any criteria for any voucher or any housing programs that are available.&rdquo;<br><small>Jose, Picture The Homeless</small></p>";
        break;
    case 7:
        document.getElementById("quote").innerHTML="<p>&ldquo;I would make a lot of more supportive housing for people just to get housed. It makes people feel human again.&rdquo;<br><small>Jazmin, Picture The Homeless</small></p>";
        break;
    case 8:
        document.getElementById("quote").innerHTML="<p>&ldquo;You gotta wait for your housing, which takes a year, year and a half again.&rdquo;<br></p>";
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