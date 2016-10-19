$('document').ready(function(){  // When document is ready
	$('#button').click(function() {  // On the button click
		var url = "https://api.github.com/users/nppat";  // set url to get github info w/ the api
		$.get(url, displayName)  // get api data, send to displayName
	});// end #button.click
	function displayName(data) {  // from api info passed in through data
		var build = ""; // set HTML build variable
		build += "<h1>" + data.name + "</h1>"  // place name info from api into h1 tag
		$('#name').html(build); //  set build to div "name" 
		console.log(data)  // to see what is being sent from api
	} // end displayName
});	//  end document.ready