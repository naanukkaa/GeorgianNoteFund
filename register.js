
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);