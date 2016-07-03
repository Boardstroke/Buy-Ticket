'use strict';
var $window = window;
var $scroll = window.scrollTop;
var $menu = $('#mainNav');

//funcoes
//Retorna a posicao do top da pagina de qualquer elemento
function posicao(obj){
    return $(obj).offset().top;
};
//Quando o usuario dá o scroll dependendo da posicao a pagina interage
function scrollEfeito(obj, efeito) {
  var lugar = posicao(obj);
  $(window).scroll(() => {
    if($window.scrollY >= lugar -300)
      $(obj).show().addClass('animated ' + efeito);
  });
};

scrollEfeito('.sobre i', 'bounceIn');
scrollEfeito('.servico i', 'slideInLeft');

$($menu).css('background-color', 'rgba(255,255,255, 0)');

$(window).scroll(() =>{
  if (posicao($menu)) {
    $($menu).css('background-color', '#FDFFFC');
  }else{
    $($menu).css('background-color', 'rgba(255,255,255, 0)');
  }
});

// API Google maps

function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    scrollwheel: false,
    zoom: 8
  });
}
