$(window).load(function(){
var secret = "38384040373937396665"; //THIS IS THE KEYSTROKES OF THE KONAMI CODE
var input = "";
var timer;
var mode = false;

$(document).keyup(function(e) {
	input += e.which;    
	clearTimeout(timer);
	timer = setTimeout(function() { input = ""; }, 500);
    	check_input();
});

function check_input() {
	if(input == secret) {
        //THIS IS WHERE YOU PUT WHAT YOU WANT TO HAPPEN
        //FOR EXAMPLE
        //alert("It worked!");
	}
}

$(document).ready(function() {
	setInterval(function() { $('#info').html('Keystroke: ' + input); }, 100);
});
});
