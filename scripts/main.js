var html_dog = document.getElementById('HTMLDog');
var mdn_mozilla = document.getElementById('MDN');
var top = document.getElementById("TOP");
var html_dog_image = document.getElementById("HTMLDog_Image");
var mdn_image = document.getElementById("MDN_Image");
var top_image = document.getElementById("TOP_Image");
var last_selected = ''

html_dog.onclick = function() {
	html_dog.setAttribute('class', 'Selected');
	top.removeAttribute("class");
	last_selected = 'html_dog';
}

mdn_mozilla.onclick = function() {
	mdn_mozilla.setAttribute('class', 'Selected');
	last_selected.removeAttribute("class");
}
