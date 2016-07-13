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
