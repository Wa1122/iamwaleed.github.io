// DOMContentLoaded event to ensure the script runs after the HTML content is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth',
                });
            }
        });
    });

    // Your custom JavaScript functionality can be added here as needed.

    // Example: Toggle a dark mode theme
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    const body = document.body;
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
    });
});
