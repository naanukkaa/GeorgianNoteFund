const showBtn = document.getElementById('show-pass-btn');
const hiddenPass = document.getElementById('hidden-pass');
const forgotBtn = document.getElementById('forgot-pass-btn');

// Show password
showBtn.addEventListener('click', () => {
    const enteredPass = prompt("პაროლის სანახავად, შეიყვანეთ თქვენი პაროლი:");
    if (enteredPass === "userpassword") { // replace with real password check in backend
        hiddenPass.textContent = "userpassword";
        showBtn.style.display = "none";
    } else {
        alert("პაროლი არასწორია!");
    }
});

// Forgot password
forgotBtn.addEventListener('click', () => {
    const email = "user@example.com"; // replace with real email dynamically
    const subject = "Password Reset";
    const body = "Hi, I forgot my password.";

    // Open mailto link in a new tab for testing
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
});


// Optional alternative show/hide toggle
const showPasswordBtn = document.getElementById('show-password-btn');
const passwordDisplay = document.getElementById('password-display');

showPasswordBtn.addEventListener('click', () => {
    if(passwordDisplay.textContent === '••••••••') {
        const userPass = prompt("Enter your password to view it:");
        if(userPass) {
            passwordDisplay.textContent = userPass;
        }
    } else {
        passwordDisplay.textContent = '••••••••';
    }
});
