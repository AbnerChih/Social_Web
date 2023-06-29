export const db = firebase.firestore();
export const firebaseAuth = firebase.auth();

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDYKXkD9ankzQ0W6lkLdlw9RRzNqOXJA7E",
    authDomain: "webfirebase-5f03e.firebaseapp.com",
    projectId: "webfirebase-5f03e",
    storageBucket: "webfirebase-5f03e.appspot.com",
    messagingSenderId: "952827957937",
    appId: "1:952827957937:web:d96f21e1c05d55aa6f0890",
    measurementId: "G-C6921365WP"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);