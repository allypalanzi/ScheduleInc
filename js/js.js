window.onload = function()
{
    var	shownav = document.getElementById('shownav');
    var button = document.getElementById('button');
	var showcalendar = document.getElementById('showcalendar');
    var month = document.getElementById('month');
    var timeslots = document.getElementById('timeslots');
    var today = document.getElementById('today');
	var addavailability = document.getElementById('addavailability');
	var add = document.getElementById('add'); 

	button.onclick = function() //NAV PULLDOWN
    {
        if (shownav.className === 'hide')
            shownav.className = 'show';
        else
            shownav.className = 'hide';
    }

    month.onclick = function() //SHOWS CALENDAR
    {
    	if (showcalendar.className === 'hide')
    		showcalendar.className = 'show';
    		timeslots.className = 'hide';
    		addavailability.className = 'hide';
    }
    today.onclick = function()  //SHOWS TODAY
    {
    	if (showcalendar.className ==='show')
    		showcalendar.className = 'hide';
    		timeslots.className = 'show';
    		addavailability.className = 'hide';
    }

    add.onclick = function() //SHOWS ADD AVAILABILITY
    {
    	if(addavailability.className === 'hide')
    		addavailability.className = 'show';
    		showcalendar.className = 'hide';

    }


};
    