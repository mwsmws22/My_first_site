var classes = $('#class_import');
var class_ids = ['179800', '178668', '180670', '178627', '178620'];

$.ajax({
	url: 'http://api.asg.northwestern.edu/courses/details/',
	data: {
		key: 'TwewRiLaO2UQkhVw',
		id: 179800, 
	},
	type: 'GET',
	dataType: 'json',

	error: function(xhr, status, error){
     var errorMessage = xhr.status + ': ' + xhr.statusText;
     alert('Error - ' + errorMessage);
 	},

	success: function(data) {
		//console.log(JSON.stringify(data));
		$.each(data, function(index, item) {
			classes.append('<h3>' + item.title + '</h3><br>');
			classes.append('<p>' + item.meeting_days + ', ' + item.room.building_name + ' ' + item.room.name + '</p><br>');
		});	
	}
});
