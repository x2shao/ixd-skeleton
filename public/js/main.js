'use strict';

$(document).ready(() => {
    console.log("javascript loaded");
})


$(".btn btn-lg active").click(turnToHomePage);

function turnToHomePage(e){
	e.preventDefault();
	var name = anagrammedName( $(this).text() );
	$(this).text('name');
}

$(".btn-home-search).click();

$('#input_starttime').pickatime({
    twelvehour: true
});
