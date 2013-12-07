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
$('textarea[name=message-skills').html("Experience in a soup kitchen? With web development? Event marketing? Generally great people skills? Really awesome baker?");
$('textarea[name=message-reason').html("Personal experience? Curiosity? Spare time?");
$('textarea[name=message-days').html("Please list the days and times that you are available.");

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

//Scrolling to customize individual

$('html, body').animate({scrollTop:$('#individual-wrapper').offset().top
}, 1000);

$("#individual-wrapper").click(function(){
   $('html, body').animate({scrollTop:$('#customize_individual').offset().top
}, 1000);
});

//Scrolling to customize group

$('html, body').animate({scrollTop:$('#group-wrapper').position().top}, 'slow');

$("#group-wrapper").click(function(){
$('html, body').animate({scrollTop:$('#customize_group').position().top}, 'slow');
});

//Buttons
$(function() {
    $( "input[type=submit], a, button" )
      .button()
      .click(function( event ) {
        event.preventDefault();
      });
  });

//Date picker
$(function() {
    $( "#from" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      onClose: function( selectedDate ) {
        $( "#to" ).datepicker( "option", "minDate", selectedDate );
      }
    });
    $( "#to" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      onClose: function( selectedDate ) {
        $( "#from" ).datepicker( "option", "maxDate", selectedDate );
      }
    });
  });

// Separate attempt
function goto(id, t){
    //animate to the div id.
    $(".contentbox-wrapper").animate({"left": -($(id).position().left)}, 600);
 
    // remove "active" class from all links inside #nav
    $('#nav a').removeClass('active');
 
    // add active class to the current link
    $(t).addClass('active');
}
function goto(id, t){
    //animate to the div id.
    $(".contentbox-wrapper").animate({"left": -($(id).position().left)}, 600);
 
    // remove "active" class from all links inside #nav
    $('#nav a').removeClass('active');
 
    // add active class to the current link
    $(t).addClass('active');
}

//Activity menu selection
 
// $('textarea[name=message').html("You can put a message here.");
// var sk    = $('#customize_sk');
// var ct = $('#customize_ct');

// // Put in individual
// $('#type_act_container').html(sk);

// // Listener for type change
// $('input[name=type').change(function() {

//  	var type = $(this).val();

//  	if(type == 'sk') {
//  		$('#type_container').html(sk);
//  	}
//  	else {
//  		$('#type_container').html(ct);
//  		$('#customize_ct').show();
//  	}

//  });

//Scrolling to the different types of activities 

$('html, body').animate({scrollTop:$('#sk-wrapper').position().top}, 'slow');

$("#sk-wrapper").click(function(){
$('html, body').animate({scrollTop:$('#customize_sk').position().top}, 'slow');
});

//OLD Scrolling horizontally for activity descriptions
// $('html, body').animate({scrollTop:$('#sk-wrapper').position().top}, 'slow');

// $("#sk-wrapper").click(function(){
// $('html, body').animate({"left": -($('#customize_sk').position().left}, 600) ;
// });

// $('html, body').animate({scrollTop:$('#ct-wrapper').position().top}, 'slow');

// $("#ct-wrapper").click(function(){
// $('html, body').animate({"left": -($('#customize_ct').position().left}, 600) ;
// });
