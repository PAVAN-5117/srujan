document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('ti-menu-2');
            icon.classList.add('ti-x');
        } else {
            icon.classList.remove('ti-x');
            icon.classList.add('ti-menu-2');
        }
    });

    // Close mobile menu when a link is clicked
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('ti-x');
            icon.classList.add('ti-menu-2');
        });
    });

    // Contact Form Validation and Submit
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            
            // Basic validation
            const name = document.getElementById('contact-name');
            const email = document.getElementById('contact-email');
            const subject = document.getElementById('contact-subject');
            const message = document.getElementById('contact-message');
            
            if (!name.value.trim()) {
                document.getElementById('name-error').classList.add('show');
                isValid = false;
            } else {
                document.getElementById('name-error').classList.remove('show');
            }
            
            if (!email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) {
                document.getElementById('email-error').classList.add('show');
                isValid = false;
            } else {
                document.getElementById('email-error').classList.remove('show');
            }
            
            if (!subject.value.trim()) {
                document.getElementById('subject-error').classList.add('show');
                isValid = false;
            } else {
                document.getElementById('subject-error').classList.remove('show');
            }
            
            if (!message.value.trim()) {
                document.getElementById('message-error').classList.add('show');
                isValid = false;
            } else {
                document.getElementById('message-error').classList.remove('show');
            }
            
            if (isValid) {
                // Show success message
                const successMsg = document.getElementById('form-success');
                successMsg.classList.add('show');
                
                // Reset form
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMsg.classList.remove('show');
                }, 5000);
            }
        });
    }

    // Set minimum date for appointment booking to today
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        dateInput.min = `${yyyy}-${mm}-${dd}`;
    }
});
