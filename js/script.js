let open_menu = document.querySelector('.toggleMenuOpen');

let menu = document.querySelector('.navbar-list');



open_menu.onclick = (e) => {
  e.stopPropagation()
  menu.classList.add('open');
}
document.body.onclick = () => {
  menu.classList.remove('open');
}



function scrollValue() {
  var navbar = document.getElementsByClassName("header");
  var scroll = window.scrollY;
  if (scroll < 200) {
    navbar[0].classList.remove("BgColour");
  } else {
    navbar[0].classList.add("BgColour");
  }
}

window.addEventListener("scroll", scrollValue);

const swiperQuiz = new Swiper(".animeslide", {
  // Optional parameters
  effect: "fade",
  loop: true,
  speed: 900,
  centeredSlides: true,
  pagination: {
    el: ".animeslide-pagination",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      let indT = total >= 5 ? total : `${total}`;
      let indC = current >= 5 ? current : `${current}`;
      return `<b>${indC}</b><span>/</span>${indT}`;
    }
  },
  navigation: {
    nextEl: ".animeslide-button-next",
    prevEl: ".animeslide-button-prev"
  },
  scrollbar: {
    el: ".animeslide-scrollbar",
    draggable: true
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false
  },
  runCallbacksOnInit: true
});

function asd() {
	"use strict";
	var i=1;

	if(i==1){
	function count($this){
	var current = parseInt($this.html(), 10);
	current = current + 10; /* Where 50 is increment */	
	$this.html(++current);
		if(current > $this.data('count')){
			$this.html($this.data('count'));
		} else {    
			setTimeout(function(){count($this)}, 50);
		}
	}        	
	$(".stat-count").each(function() {
	  $(this).data('count', parseInt($(this).html(), 10));
	  $(this).html('0');
	  count($(this));
	});}
  };

$(document).ready(function(){
	var tester = document.getElementById('counter');
	
	var p;
	var n = 0;

	window.onscroll = function() {
		p = checkVisible(tester);

		if(p == true && n == 0){

			asd();
			n = 1;
		}
	};
});

function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
};





