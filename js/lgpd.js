$(document).ready(function () {

    function verificarTermos() {

        var cache_lgpd = window.localStorage.getItem('termos-lgpd');

        if (!cache_lgpd) {
            // console.log('mostrar barra');
            $('#bar-lgpd').addClass('exibir');
        } else if (cache_lgpd) {
            // console.log('não mostrar barra');
        }
    }

    verificarTermos();
});


function aceitarTermos() {

    window.localStorage.setItem('termos-lgpd', true);
    $('#bar-lgpd').removeClass('exibir');

}

function loadPopupLateral() {

    var cache_lgpd = window.localStorage.getItem('popup-lateral');

    if (!cache_lgpd) {
        // console.log('mostrar barra');
        setTimeout(() => {
            $('#popup-lateral').addClass('exibir');
        }, 3000);
    } else if (cache_lgpd) {
        // console.log('não mostrar barra');
    }
}

function fecharPopupLateral() {

    // window.localStorage.setItem('popup-lateral', true);
    $('#popup-lateral').removeClass('exibir');

}

loadPopupLateral();