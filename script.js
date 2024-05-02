document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    // Function to close all dropdowns
    const closeDropdowns = () => {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('show');
        });
    };

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Close all dropdowns if clicking the same link
            if (targetSection.classList.contains('active')) {
                closeDropdowns(); // Close all dropdowns
                targetSection.classList.remove('active'); // Remove active class from the section
            } else {
                closeDropdowns(); // Close all dropdowns

                sections.forEach(section => {
                    section.classList.remove('active');
                });

                targetSection.classList.add('active');

                const dropdowns = targetSection.querySelectorAll('.dropdown');
                dropdowns.forEach(dropdown => {
                    dropdown.classList.add('show');
                });
            }
        });
    });

    // Event listener to close dropdowns when clicking outside or clicking the same dropdown
    document.addEventListener('click', function(e) {
        const clickedDropdown = e.target.closest('.dropdown-btn');
        const dropdowns = document.querySelectorAll('.dropdown');

        if (!clickedDropdown) {
            closeDropdowns();
        } else {
            dropdowns.forEach(dropdown => {
                if (dropdown !== clickedDropdown.nextElementSibling) {
                    dropdown.classList.remove('show');
                }
            });
        }
    });
});

function toggleNamePhoto() {
    const name = document.getElementById('name');
    const photo = document.getElementById('photo');

    if (name.style.display === 'none') {
        name.style.display = 'block';
        photo.style.display = 'none';
    } else {
        name.style.display = 'none';
        photo.style.display = 'block';
    }
}