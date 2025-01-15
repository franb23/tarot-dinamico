$(document).ready(function(){
    $('.tarot-slider').slick({
        slidesToShow: 3,  // Número de cartas visibles a la vez
        slidesToScroll: 1,  // Número de cartas que se desplazan por cada "click"
        autoplay: true,  // Para que se deslice automáticamente
        autoplaySpeed: 2000,  // Velocidad de transición en milisegundos
        arrows: true,  // Muestra las flechas para navegar
        dots: true,  // Muestra los puntos de navegación
        infinite: true,  // Se vuelve a iniciar cuando llega al final
        centerMode: true  // Centra la carta visible
    });
});
