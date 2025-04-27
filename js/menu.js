document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    toggleBtn.addEventListener('click', () => {
        toggleBtn.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            toggleBtn.classList.remove('open');
            navLinks.classList.remove('open');
        });
    });

    // Sticky header on scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });
});
