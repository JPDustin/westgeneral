document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navBar = document.querySelector('nav');

    // Sticky header
    window.addEventListener('scroll', () => {
        navBar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Open / close off-canvas menu
    toggleBtn.addEventListener('click', () => {
        toggleBtn.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    // Close when a link is clicked
    navLinks.querySelectorAll('a').forEach(link =>
        link.addEventListener('click', () => {
            toggleBtn.classList.remove('open');
            navLinks.classList.remove('open');
        })
    );
});
