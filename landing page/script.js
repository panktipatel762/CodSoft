// Sticky header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
        header.classList.toggle('scrolled', window.scrollY > 0);
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'mooth'
            });
        }
    });
});

// Lightbox
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox.querySelector('img');
const closeLightbox = document.querySelector('.close-lightbox');

if (lightbox && lightboxImg && closeLightbox) {
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgElement = item.querySelector('img');
            if (imgElement) {
                const imgSrc = imgElement.src;
                lightboxImg.src = imgSrc;
                lightbox.classList.add('active');
            }
        });
    });

    closeLightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
}