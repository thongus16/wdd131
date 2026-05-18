const menu = document.querySelector('nav');
const btn = document.querySelector('#menu');

function toggleMenu() {
    menu.classList.toggle('hide');
    btn.classList.toggle('change');
}

btn.addEventListener('click', toggleMenu);

const gallery = document.querySelector('#gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    // Code to show modal  - Use event parameter 'e'   
    const img = e.target;

    const src = img.src;

    modalImage.src = src;

    modal.showModal();
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});