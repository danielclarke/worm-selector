function myToggle()
{
	if (myToggle.toggle == 1) {
		$('#main-container').animate({top:230});
		myToggle.toggle = 0;
	} else {
		$('#main-container').animate({top: 30});
		myToggle.toggle = 1;
	}
	
}