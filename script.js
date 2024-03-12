$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: true,
        arrows: false
    });
});

// Função para exibir a caixa com sombra
function showBox() {
    var box = document.getElementById('box-shadow');
    box.style.display = 'block';
}

// Função para ocultar a caixa com sombra
function hideBox() {
    var box = document.getElementById('box-shadow');
    box.style.display = 'none';
}

// Adiciona eventos de clique aos botões para mostrar e ocultar a caixa com sombra
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            showBox();
        });
    });

    // Adiciona evento de clique na caixa para ocultá-la
    var box = document.getElementById('box-shadow');
    box.addEventListener('click', function(event) {
        event.stopPropagation(); // Impede que o evento de clique na caixa seja propagado para o documento
        hideBox();
    });
});

