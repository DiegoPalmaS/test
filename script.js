const container = document.querySelector('.developers-container');
const developers = document.querySelectorAll('.developer-person');

developers.forEach(developer => {
    developer.addEventListener('mouseenter', () => {
        container.classList.add('developers-hover');
        developer.classList.add('hovered');
    });

    developer.addEventListener('mouseleave', () => {
        container.classList.remove('developers-hover');
        developer.classList.remove('hovered');
    });
});