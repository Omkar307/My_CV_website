document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            sections.forEach(section => {
                section.classList.remove('active');
            });

            targetSection.classList.add('active');

            const dropdowns = targetSection.querySelectorAll('.dropdown');
            dropdowns.forEach(dropdown => {
                dropdown.classList.toggle('show');
            });
        });
    });

    document.addEventListener('click', function(e) {
        if (!e.target.matches('.dropdown-btn')) {
            const dropdowns = document.querySelectorAll('.dropdown');
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('show');
            });
        }
    });
});

