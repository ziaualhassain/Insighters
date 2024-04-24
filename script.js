

function showTermsPopup() {
    document.getElementById("termsPopup").style.display = "block";
}

function closeTermsPopup() {
    document.getElementById("termsPopup").style.display = "none";
}

document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Code to save email to MongoDB or any other database
    console.log('Name:', name);
    console.log('Email:', email);

    // Show notification
    const notification = document.getElementById('notification');
    notification.textContent = `Thanks ${name} for your interest! Please follow us on Socials`;
    notification.style.display = 'block';

    // Reset form
    e.target.reset();

    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
});

