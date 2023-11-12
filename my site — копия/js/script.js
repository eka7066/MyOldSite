/*все документы*/
window.addEventListener('scroll', function(){
	var scroll = document.querySelector('.button');
	scroll.classList.toggle("active", window.scrollY>400)
})
function scrollTopTop(){
	window.scrollTo({
		top:0,
		behavior: 'smooth'
	})
}

/*vis.html*/

var btn_prev = document.querySelector ('#gallery .buttons .prev');
var btn_next = document.querySelector ('#gallery .buttons .next');
var images = document.querySelectorAll ('#gallery .photos img'); 
var i = 0;

btn_prev.onclick = function() {
	images[i].className = '';
	i--;
	if (i < 0) {
		i = images.length - 1;
	}
	images[i].className = 'showed';
}
btn_next.onclick = function() {	
	images[i].className = '';
	i++;
	
	if(i >= images.length) {
		i = 0;
	}
	
	images[i].className = 'showed';
}

var btn_pred = document.querySelector ('#galleryWedding .battons .pred');
var btn_sled = document.querySelector ('#galleryWedding .battons .sled');
var pictures = document.querySelectorAll ('#galleryWedding .pictures img'); 
var i = 0;

btn_pred.onclick = function() {
	pictures[i].className = '';
	i--;
	if (i < 0) {
		i = pictures.length - 1;
	}
	pictures[i].className = 'show';
}
btn_sled.onclick = function() {	
	pictures[i].className = '';
	i++;
	
	if(i >= pictures.length) {
		i = 0;
	}
	
	pictures[i].className = 'show';
}
