// Поиск по странице
var input, search, pr, result, result_arr, locale_HTML, result_store;

function func() {
 	locale_HTML = document.body.innerHTML;   // сохраняем в переменную весь body (Первоначальный)
}
setTimeout(func, 1000);  //ждем подгрузки Jsona и выполняем

function FindOnPage(name, status) {

	input = document.getElementById(name).value; //получаем значение из поля в html
	
	if(input.length < 3&&status == true)
	{
		alert("Для поиска вы должны ввести три или более символов");
		function FindOnPageBack() { document.body.innerHTML = locale_HTML; }
	}
	
	if(input.length>=3)
	{
		function FindOnPageGo() {

			search = '/'+input+'/g';  //делаем из строки регуярное выражение
			pr = document.body.innerHTML;   // сохраняем в переменную весь body
			result = pr.match(/>(.*?)</g);  //отсекаем все теги и получаем только текст
			result_arr = [];   //в этом массиве будем хранить результат работы (подсветку)

			var warning = true;
			for(var i=0;i<result.length;i++) {
				if(result[i].match(eval(search))!=null) {
					warning = false;
				}
			}
			if(warning == true) {
				alert("Не найдено ни одного совпадения");
			}

			for(var i=0; i<result.length;i++) {
				result_arr[i] = result[i].replace(eval(search), '<span style="background-color:#EEBEF8;">'+input+'</span>'); //находим нужные элементы, задаем стиль и сохраняем в новый массив
			}
			for(var i=0; i<result.length;i++) {
				pr=pr.replace(result[i],result_arr[i])  //заменяем в переменной с html текст на новый из новогом ассива
			}
			document.body.innerHTML = pr;  //заменяем html код
		}
	}
	function FindOnPageBack() { document.body.innerHTML = locale_HTML; }
	if(status) { FindOnPageBack(); FindOnPageGo(); } //чистим прошлое и Выделяем найденное
	if(!status) { FindOnPageBack(); } //Снимаем выделение
}

////Слайдер фото
function Slider(images) {
    this.images = images;
    var i = 0;

    this.prev = function () {
        this.images[i].classList.remove('showed');
        i--;

        if (i < 0) {
            i = this.images.length - 1;
        }

        this.images[i].classList.add('showed');
    }

    this.next = function () {
        this.images[i].classList.remove('showed');
        i++;

        if (i >= this.images.length) {
            i = 0;
        }

        this.images[i].classList.add('showed');
    }
}

/*все документы кнопка Вверх*/
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
//Галереи
let images = document.querySelectorAll ('#gallery1 .examp1 img');
let slider = new Slider(images);

document.querySelector('#gallery1 .butt_gal1 .prev').onclick = function(){
	slider.prev();
}

document.querySelector('#gallery1 .butt_gal1 .next').onclick = function(){
	slider.next();
}
var images2 = document.querySelectorAll('#gallery2 .examp2 img');
var slider2 = new Slider(images2);
    
    document.querySelector('#gallery2 .butt_gal2 .prev').onclick = function(){
        slider2.prev();
    }
 
    document.querySelector('#gallery2 .butt_gal2 .next').onclick = function(){
        slider2.next();
    }

var images3 = document.querySelectorAll('#gallery3 .examp3 img');
var slider3 = new Slider(images3);
    
    document.querySelector('#gallery3 .butt_gal3 .prev').onclick = function(){
        slider3.prev();
    }
 
    document.querySelector('#gallery3 .butt_gal3 .next').onclick = function(){
        slider3.next();
    }

///Автоматическое слайд-шоу
	var currentSlide = 0;
	var slideInterval = setInterval(nextSlide,8000);
	var currentSlide2 = 0;
	var slideInterval2 = setInterval(nextSlide2,8000);
	var currentSlide3 = 0;
	var slideInterval3 = setInterval(nextSlide3,8000);

	function nextSlide(){
		images[currentSlide].className = 'noShowed';
		currentSlide = (currentSlide+1)%images.length;
		images[currentSlide].className = 'showed';
	}
	function nextSlide2(){
		images2[currentSlide2].className = 'noShowed';
		currentSlide2 = (currentSlide2+1)%images2.length;
		images2[currentSlide2].className = 'showed';
	}
	function nextSlide3(){
		images3[currentSlide3].className = 'noShowed';
		currentSlide3 = (currentSlide3+1)%images3.length;
		images3[currentSlide3].className = 'showed';
	}