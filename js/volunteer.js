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
$('textarea[name=message').html("You can put a message here.");
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

// If you want a <button/> with an id of myButton that when clicked will cause you to scroll to a <div/> with and id of myDiv over the course of half a second:

// $('#individual').click(function(){
//     $('html, body').animate({
//         scrollTop: $( $.attr(this, '#customize') ).offset().top
//     }, 500);
//     return false;
// });

// $('#individual').click(function() {
//    //optionally remove the 500 (which is time in milliseconds) of the
//    //scrolling animation to remove the animation and make it instant
//    $.scrollTo($('#customize'), 500);
// });

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#individual").click(function() {
   scrollToAnchor('#customize');
});

