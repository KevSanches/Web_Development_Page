var html_dog = document.getElementById('html_dog');
var mdn_mozilla = document.getElementById('mdn');
var top_selection = document.getElementById("the_odin_project");
var html_dog_image_selection = document.getElementById("html_dog_image");
var mdn_image = document.getElementById("mdn_image");
var top_image = document.getElementById("the_odin_project_image");
var last_selected = ''

function wipe_selections() {
	html_dog.setAttribute('class', 'none');
	html_dog_image_selection.setAttribute('class', 'none');
	top_selection.setAttribute('class', 'none');
	top_image.setAttribute('class', 'none');
	mdn_mozilla.setAttribute('class', 'none');
	mdn_image.setAttribute('class', 'none');
}

html_dog.onclick = function() {
	wipe_selections();
	html_dog.setAttribute('class', 'selected');
	html_dog_image_selection.setAttribute('class', 'opaque');
}

mdn_mozilla.onclick = function() {
	wipe_selections();
	mdn_mozilla.setAttribute('class', 'selected');
	mdn_image.setAttribute('class', 'opaque');
}

top_selection.onclick = function() {
	wipe_selections();
	top_selection.setAttribute('class', 'selected');
	top_image.setAttribute('class', 'opaque');
}
