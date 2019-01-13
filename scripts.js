$(function () {

	var classes = $('#classes');
	//classes.append('<li>1dsfsdfsd</li>');

	$.ajax({
		url: 'http://api.asg.northwestern.edu/courses/?key=TwewRiLaO2UQkhVw&id=178620/',
		type: 'GET',
		dataType: 'json',

		error: function(xhr, status, error){
         var errorMessage = xhr.status + ': ' + xhr.statusText
         alert('Error - ' + errorMessage);
     	},

		success: function(data) {
			alert('dank meme');
			//classes.append('<li>no error</li>');
			//$.each(data, function(index, item) {
			//	classes.append('<li>title: ' + item.title + '</li>');
			//});	
		}
	});
});