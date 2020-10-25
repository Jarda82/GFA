let color = "purple";
let number = 10;
let word = "cool";

if (color === "purple") {
	$('.red').css('background', color);
}
let text = "";
if (number >= 100) {
	text = `whoah, that's a big number.`;
} else {
	text = `just a regular number, please.`;
}
$('.yellow').text(text);

text = "Power of DOM";
if (word === "cool") {
	$('.azur').text(text);
} else {
	$('.lightblue').text(text);
}

$('#hover').hover(function () {
	$('.yellow').toggleClass('east');
	$('.azur').toggleClass('south');
	$('.lightblue').toggleClass('west');
});
