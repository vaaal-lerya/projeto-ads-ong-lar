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