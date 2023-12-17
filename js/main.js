'use strict';
window.addEventListener("load", ajouterClasseAuClickInterro);


function ajouterClasseAuClickInterro() {
    const interro = document.querySelector('.interro');
    interro.addEventListener('click', () => {
        const popup = document.querySelector('.popup');
        const sections = document.querySelectorAll('section');
        popup.classList.toggle('open');


        if (popup.classList.contains('open')) {
            interro.src = "./src/cross.svg";
            popup.style.opacity = '1';
            popup.style.transition = '1s';
                sections.forEach(section => {
                    section.style.display = 'none';
            })

        } else {
            interro.src = "./src/info.svg";
            popup.style.opacity = '0';
            popup.style.transition = '1s';

                sections.forEach(section => {
                    section.style.display = 'block';
                })

        }
    })
}