/*-------------------------------------------------------------------------------------------------
Customize
-------------------------------------------------------------------------------------------------*/

/* 
For validation purposes, we don't want both these forms in the page at the same time
So on page load, save them in a variable, then default to the ship form 
(i.e. replace the entire contents of type_container with ship)
*/

// Save

// MINE: ship - individual and instant - group 
$('textarea[name=message').html("Hi Friend!&#10;&#10;Enjoy a class at the Women's Coding Collective - on me! They've got all sorts of courses on web development, from HTML and CSS to JavaScript and WordPress. I think you'll learn a lot! &#10;&#10;Love, Your Pal");
var individual    = $('#customize_individual');
var group = $('#customize_group');

// Put in individual
$('#type_container').html(individual);

// Listener for type change
$('input[name=type').change(function() {

	var type = $(this).val();

	if(type == 'individual') {
		$('#type_container').html(individual);
	}
	else {
		$('#type_container').html(group);
		$('#customize_group').show();
	}

});

/*
$('#payment-form input, #payment-form select').each(function() {

	var key   = 'gift_certificates_index_' + $(this).attr('name');
	var value = localStorage.getItem(key);
	$(this).val();

});

$('#payment-form input, #payment-form select').change(function() {
	var key   = 'gift_certificates_index_' + $(this).attr('name');
	var value = $(this).val();
	localStorage.setItem(key,value);
});
*/
