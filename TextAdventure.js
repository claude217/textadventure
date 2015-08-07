$(document).ready(function() {
    $('button').click(function() {
    	var toAdd = $("input[name=message]").val();
		if (toAdd === "get up"){
			$('#messages').append("<p>"+"You get off of the couch"+"</p>");
		}
		if (toAdd === "look around"){
			$('#messages').append("<p>"+"You search the room. The couch you were laying on is tattered and worn. The only light source is a candle on a desk on the other side of the room"+"</p>");
		}
    });
});