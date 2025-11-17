import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

// Firebase config
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

// Show/hide password
const toggleLoginPassword = document.getElementById("toggleLoginPassword");
const loginPasswordInput = document.getElementById("loginPassword");

toggleLoginPassword.addEventListener("click", () => {
  const type = loginPasswordInput.getAttribute("type") === "password" ? "text" : "password";
  loginPasswordInput.setAttribute("type", type);
  toggleLoginPassword.textContent = type === "password" ? "აჩვენე პაროლი" : "დამალე პაროლი";
});

// Form submit
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page refresh

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("წარმატებით შესვლა!");
      // Redirect to profile page without page refresh:
      window.location.href = "profile.html";
    })
    .catch((error) => {
      alert("შეცდომა: " + error.message);
    });
});
