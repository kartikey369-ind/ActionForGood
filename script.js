document.addEventListener('DOMContentLoaded', () => {
    // Contact form submission handling
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = contactForm.querySelector('#name').value;
        const email = contactForm.querySelector('#email').value;
        const message = contactForm.querySelector('#message').value;

        // Simple form validation
        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});
