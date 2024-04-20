document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    // Code to save email to MongoDB or any other database
    console.log('Name:', name);
    console.log('Email:', email);

    // Show notification
    const notification = document.getElementById('notification');
    notification.textContent = 'Thanks for your interest! Please follow us on Socials';
    notification.style.display = 'block';

    // Reset form
    e.target.reset();

    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
});
