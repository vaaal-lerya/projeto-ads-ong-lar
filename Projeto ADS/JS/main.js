const botaoMenu = document.querySelector(".menu-hamburguer");
const menu = document.querySelector("nav");
const itemDropdown = document.querySelector(".menu-dropdown");
const linkDropdown = document.querySelector(".menu-dropdown > a");


if (botaoMenu && menu) {

    botaoMenu.addEventListener("click", function() {

        const menuAberto = menu.classList.toggle("menu-aberto");

        botaoMenu.setAttribute("aria-expanded", menuAberto);

    });

}


if (linkDropdown && itemDropdown) {

    linkDropdown.addEventListener("click", function(evento) {

        if (window.innerWidth <= 768) {

            evento.preventDefault();

            itemDropdown.classList.toggle("menu-aberto");

        }

    });

}

/* =========================================================
   MENU HAMBÚRGUER
   ========================================================= */

const botaoMenu = document.querySelector(".menu-hamburguer");
const menu = document.querySelector("nav");
const itemDropdown = document.querySelector(".menu-dropdown");
const linkDropdown = document.querySelector(".menu-dropdown > a");


if (botaoMenu && menu) {

    botaoMenu.addEventListener("click", function() {

        const menuAberto = menu.classList.toggle("menu-aberto");

        botaoMenu.setAttribute("aria-expanded", menuAberto);

    });

}


if (linkDropdown && itemDropdown) {

    linkDropdown.addEventListener("click", function(evento) {

        if (window.innerWidth <= 768) {

            evento.preventDefault();

            itemDropdown.classList.toggle("menu-aberto");

        }

    });

}


/* =========================================================
   CARROSSEL DA PÁGINA INICIAL
   ========================================================= */

const slides = document.querySelectorAll(".slide");
const indicadores = document.querySelectorAll(".indicador");
const botaoAnterior = document.querySelector("#anterior");
const botaoProximo = document.querySelector("#proximo");

let slideAtual = 0;


function mostrarSlide(numero) {

    if (!slides.length || !indicadores.length) {
        return;
    }


    slides.forEach(function(slide) {

        slide.classList.remove("ativo");

    });


    indicadores.forEach(function(indicador) {

        indicador.classList.remove("ativo");

    });


    slides[numero].classList.add("ativo");

    indicadores[numero].classList.add("ativo");


    slideAtual = numero;

}


if (botaoProximo && slides.length) {

    botaoProximo.addEventListener("click", function() {

        let proximoSlide = slideAtual + 1;


        if (proximoSlide >= slides.length) {

            proximoSlide = 0;

        }


        mostrarSlide(proximoSlide);

    });

}


if (botaoAnterior && slides.length) {

    botaoAnterior.addEventListener("click", function() {

        let slideAnterior = slideAtual - 1;


        if (slideAnterior < 0) {

            slideAnterior = slides.length - 1;

        }


        mostrarSlide(slideAnterior);

    });

}


indicadores.forEach(function(indicador, indice) {

    indicador.addEventListener("click", function() {

        mostrarSlide(indice);

    });

});