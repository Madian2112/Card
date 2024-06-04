document.addEventListener('DOMContentLoaded', () => {
    const valentines = document.querySelector('.valentines');
    const card = document.querySelector('.card');

    valentines.addEventListener('click', () => {
        if (card.style.top === '5px' || card.style.top === '') {
            card.style.top = '-90px'; // Muestra la carta
        } else {
            card.style.top = '5px'; // Vuelve a su posición original
        }
    });
});
