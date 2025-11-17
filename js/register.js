// ============================
// Firebase Initialization
// ============================
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyASF0HE72TIo-2ji0bp9ljL5ooUrY1_wKU",
  authDomain: "georgiannotesfund.firebaseapp.com",
  projectId: "georgiannotesfund",
  storageBucket: "georgiannotesfund.firebasestorage.app",
  messagingSenderId: "703695876308",
  appId: "1:703695876308:web:f0ca85fe4b137f0c150b41",
  measurementId: "G-FEN7RMKYNN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// ============================
// Password Live Validation
// ============================
const passwordInput = document.getElementById("password");

passwordInput.addEventListener("input", () => {
  const value = passwordInput.value;

  const lengthRule = document.getElementById("rule-length");
  const upperRule = document.getElementById("rule-upper");
  const lowerRule = document.getElementById("rule-lower");
  const numberRule = document.getElementById("rule-number");

  updateRule(lengthRule, value.length >= 6);
  updateRule(upperRule, /[A-Z]/.test(value));
  updateRule(lowerRule, /[a-z]/.test(value));
  updateRule(numberRule, /[0-9]/.test(value));
});

function updateRule(element, condition) {
  const text = element.textContent.slice(2); // Remove checkmark prefix

  if (condition) {
    element.classList.add("valid");
    element.classList.remove("invalid");
    element.textContent = "✓ " + text;
  } else {
    element.classList.add("invalid");
    element.classList.remove("valid");
    element.textContent = "✗ " + text;
  }
}


// ============================
// Form Submit (Create Account)
// ============================
document.getElementById("submit").addEventListener("click", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Local password validation before Firebase
  const validPassword =
    password.length >= 6 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password);

  if (!validPassword) {
    alert("პაროლი არ აკმაყოფილებს ყველა მოთხოვნას");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("ანგარიში წარმატებით შეიქმნა");
    })
    .catch((error) => {
      alert("შეცდომა: " + error.message);
    });
});

sendRegistrationEmail(userEmail, username);
