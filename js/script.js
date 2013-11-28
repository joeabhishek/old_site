$('#info').hide();
$('#project-info').hide();
var hide = function(){
	$('#info').hide();
	$('#project-info').hide();
	$('#desc').hide();
}
$('#contact').click(function(e){
	e.preventDefault();
	hide();
	$('#info').show();
});

$('#home').click(function(e){
	e.preventDefault();
	hide();
	$('#desc').show();
});

$('#projects').click(function(e){
	e.preventDefault();
	hide();
	$('#project-info').show();
});
	