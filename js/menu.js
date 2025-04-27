document.addEventListener('DOMContentLoaded', () => {
    // Sticky header
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav?.classList.add('scrolled');
        } else {
            nav?.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const toggleBtn = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    toggleBtn?.addEventListener('click', () => {
        toggleBtn.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    // Optional: close menu on link click
    navLinks?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(() => {
                toggleBtn.classList.remove('open');
                navLinks.classList.remove('open');
            }, 150);
        });
    });

    // Close menu if clicking outside
    document.addEventListener('click', (event) => {
        const isInsideMenu = navLinks?.contains(event.target);
        const isToggle = toggleBtn?.contains(event.target);
        const isMenuLink = event.target.closest('.nav-links a');

        if (!isInsideMenu && !isToggle && !isMenuLink) {
            toggleBtn?.classList.remove('open');
            navLinks?.classList.remove('open');
        }
    });
});
