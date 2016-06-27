var $cadastro = $('#cadastro');
var $login = $('#login');

$cadastro.hide();
$login.hide();

$('#btn-cadastrar').click( () => {$cadastro.slideToggle();} );
$('#btn-login').click( () => {$login.slideToggle();} );
