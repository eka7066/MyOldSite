function Popup(options){

    this.modal = document.querySelector(options.modal); //модальное окно(попап)
    this.overlay = document.querySelector(options.overlay);; //фон
    
    let popup = this;
    
    this.open = function(content){
        popup.modal.innerHTML = content;
        popup.overlay.classList.add('open');
        popup.modal.classList.add('open');
    }

    this.close = function(){
        popup.overlay.classList.remove('open');
        popup.modal.classList.remove('open');
    }

    this.overlay.onclick = popup.close;
}


window.onload = function() {
    var p = new Popup({
        modal: '.modal',
        overlay: '.overlay'
    });



    // setTimeout(function() {
    //      p.open('Valera pusya');}, 1000);
   
    document.querySelector('.write').onclick = function () {
        p.open('форма отправки сообщения');//просто пишем что хотим воткнуть в попап
    };

    document.querySelector('.callme').onclick = function () {
        let form = document.querySelector('.for-callme-popup'); //берем форму из заранее прописанного в хтмл коде
        p.open(form.innerHTML); //запихиваем в хтмл
    };
};