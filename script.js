document.addEventListener('DOMContentLoaded', () => {
    const showMoreButtons = document.querySelectorAll('.show-more-button');
    
    showMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const moreApps = button.previousElementSibling;
            if (moreApps.classList.contains('hidden')) {
                moreApps.classList.remove('hidden');
                button.textContent = '접기';
            } else {
                moreApps.classList.add('hidden');
                button.textContent = '더보기';
            }
        });
    });

    const appBoxes = document.querySelectorAll('.app-box');
    const popup = document.getElementById('app-popup');
    const popupContent = document.getElementById('popup-app-info');
    const closePopup = document.querySelector('.close-popup');
    
    appBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const appName = box.querySelector('.app-name').textContent;
            const appDescription = box.querySelector('.app-description').textContent;
            popupContent.innerHTML = `<h2>${appName}</h2><p>${appDescription}</p>`;
            popup.classList.remove('hidden');
        });
    });

    closePopup.addEventListener('click', () => {
        popup.classList.add('hidden');
    });

    window.addEventListener('click', (event) => {
        if (event.target == popup) {
            popup.classList.add('hidden');
        }
    });
});
