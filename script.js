
    function toggleNavbar() {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('active'); // Toggle the 'active' class to show/hide
    }


// Function to calculate the donated amount
function fetchTotalDonations() {
    return new Promise((resolve) => {
        const total = Math.floor(Math.random() * 100000) ; // calculating the amount donated 
        resolve(total);
    });
}

// Function to update the donation tracker
async function updateDonationTracker() {
    const updateTotalDonations = document.getElementById('total-donations'); 
    try {
        const total = await fetchTotalDonations();  //waiting for the promise to be fulfilled either with an amount or an error
        updateTotalDonations.innerText = `R${total.toLocaleString()}`; // Update the displayed amount
    } catch (error) {
        console.error("Error fetching donations:", error);
    }
}

// Call updateDonationTracker initially and set interval for updates
updateDonationTracker();
setInterval(updateDonationTracker, 30000); // Update every 30 seconds

function validateForm() {
    // Clear previous error messages
    document.getElementById('name-error').innerText = '';
    document.getElementById('email-error').innerText = '';
    document.getElementById('message-error').innerText = '';

    // Get field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;

    // Validate name
    if (name === '') {
        document.getElementById('name-error').innerText = 'Please enter your name.';
        isValid = false;
    }

    // Validate email
    if (email === '') {
        document.getElementById('email-error').innerText = 'Please enter your email.';
        isValid = false;

    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('email-error').innerText = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate message
    if (message === '') {
        document.getElementById('message-error').innerText = 'Please enter a message.';
        isValid = false;
    }

    // If all fields are valid, proceed with sending the email
    if (isValid) {
        sendMail();
    }
}

function sendMail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const subject = `Message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    window.location.href = `mailto:st10438214@rcconnect.edu.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Clear initial placeholder text on focus
document.getElementById('name').addEventListener('focus', function() {
    this.value = '';
    document.getElementById('name-error').innerText = '';
});

document.getElementById('email').addEventListener('focus', function() {
    this.value = '';
    document.getElementById('email-error').innerText = '';
});

document.getElementById('message').addEventListener('focus', function() {
    this.value = '';
    document.getElementById('message-error').innerText = '';
});

