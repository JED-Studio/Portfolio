
/*const btnLOK = document.querySelector('log');
const portfOLiO = document.querySelectorAll('portfolio__col');

btnLOK.addEventListener('click', function(){

    for(let portfolio__col of portfOLiO ){
        portfOLiO.style.display = 'flex'
    }

    btnLOK.style.display='none';
});*/ 








/*window.onload = function () {
    var box=document.getElementsByClassName('portfolio__col');
    var btn=document.getElementById('Baton');
    for (let i=3;i<box.length;i++) {
        box[i].style.display = "none";
    }

    var countD = 3;
    btn.addEventListener("click", function() {
        var box=document.getElementsByClassName('portfolio__col');
        countD += 3;
        if (countD <= box.length){
            for(let i=0;i<countD;i++){
                box[i].style.display = "#";
            }
        }

    })
}*/









/*const btn = document.querySelector('log');
const cards = Array.from(document.querySelectorAll('portfolio__col'));


function openCatalog(){
    btn.addEventListener('click', ()=>{
        cards.forEach(item=> item.classList.remove('hidden'));
        btn.classList.add('hidden')
    })
}






function responsel() {
    if (window.innerWidth>900){
        btn.classList.add('hidden');

        cards.forEach((item,index)=>{
            item.classList.add('hidden')
            if (index <= 8) {
                item.classList.remove('hidden')
            } else if (index > 8) {
                btn.classList.remove('hidden');
            }
            openCatalog()
        })
    }
}*/






/*var more = document.querySelectorAll('.more');

for (var i = 0; i < more.length; i++) {
  more[i].addEventListener('click', function() {
    var showPerClick = 3;
    
    var hidden = this.parentNode.querySelectorAll('div.hidden');
    for (var i = 0; i < showPerClick; i++) {
      if (!hidden[i]) return this.outerHTML = "";

      hidden[i].classList.add('box');
      hidden[i].classList.remove('hidden');
    }
  });
}*/





/*
jQuery(document).ready(function($){
    $(".Baton").click(function(e){
      $(".portfolio__col:hidden").slice(0,3).fadeIn();
      if ($(".portfolio__col:hidden").length < 1) $(this).fadeOut();
    })
  }) */


   /* $(window).on('load', function() {
    initTwenty();
  });

  // Фото, до и после
 /* function initTwenty() {
    $(".twentytwenty").twentytwenty({
      no_overlay: false, // Не показывать наложение было, стало, true скрыть
      // Перемещать ползунок при наведении курсора мыши
      move_slider_on_hover: false, 
      // Разрешить пользователю проводить пальцем в любом месте
      // изображения для управления движением ползунка.
      move_with_handle_only: true, 
      before_label: 'До',
      after_label: 'После'
    });
  }*/

  /*$(document).ready(function() {
    var list = $(".log .portfolio__col");
    var numToShow = 6; //сколько показывать элементов
    var button = $("Baton");
    var numInList = list.length;
    list.hide();
    if (numInList > numToShow) {
      button.show();
    }
    list.slice(0, numToShow).show();
    button.click(function() {
      var showing = list.filter(':visible').length;
      list.slice(showing - 1, showing + numToShow).fadeIn();
      var nowShowing = list.filter(':visible').length;
      if (nowShowing >= numInList) {
        button.hide();
      }
      initTwenty();
    });
  });*/









/*const showMore = document.querySelector('.show-more');
const productsLength = document.querySelectorAll('prod');
let items = 6;

showMore.addEventListener('click', () => {
    items += 3;
    const array = Array.from(document.querySelector('prod').children);
    const visItems = array.slice(0, items);

    visItems.forEach(eL => eL.classList.add('is-visible'));
});*/







/*const showMore = document.querySelector('Baton');
const productsLength = document.querySelectorAll('.portfolio__col').length;
let items = 6;

showMore.addEventListener('click', () => {
	items += 3;
	const array = Array.from(document.querySelector('.portfolio__col').children);
	const visItems = array.slice(0, items);

	visItems.forEach(el => el.classList.add('is-visible'));

	if (visItems.length === productsLength) {
		showMore.style.display = 'none';
	}
});*/