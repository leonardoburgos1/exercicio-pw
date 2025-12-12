// Botão do menu mobile
const menuBtn = document.getElementById('menu-btn');
const navList = document.querySelector('.nav-list');

menuBtn.addEventListener('click', () => {
    navList.classList.toggle('active'); // mostra/esconde menu
});

// Dropdown mobile
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('active'); // mostra/esconde dropdown
    });
});


/*================================================
CARROSEL
==================================================*/

const carrosel = document.querySelector('.carrosel');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let contagemCard = 0;
const cardWidth = 380; // 350 + gap de 20

function atualizarLimite() {
    return -(carrosel.scrollWidth - carrosel.clientWidth);
}

next.addEventListener('click', () => {
    let maximoNegativo = atualizarLimite();

    if (contagemCard <= maximoNegativo) {
        contagemCard = 0; // loop
    } else {
        contagemCard -= cardWidth;
    }

    carrosel.style.transform = `translateX(${contagemCard}px)`;
});

prev.addEventListener('click', () => {
    let maximoNegativo = atualizarLimite();

    if (contagemCard >= 0) {
        contagemCard = maximoNegativo; // loop pra o final
    } else {
        contagemCard += cardWidth;
    }

    carrosel.style.transform = `translateX(${contagemCard}px)`;
});
