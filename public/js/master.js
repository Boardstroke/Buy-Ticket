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
    if($window.scrollY >= lugar -450 && window.scrollY <= lugar + 500)
      $(obj).show().addClass('animated ' + efeito);
      else
        $(obj).hide().removeClass('animated ' + efeito);
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
