// Import Firebase configuration
// import firebase from './firebase-config.js';

// Function to submit the form and save data to Firebase
function submitForm() {
    // Get form values
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const litres = document.getElementById('litres').value;

    // Create a new entry object
    const newEntry = { date, time, litres };

    // Get a reference to the Firebase Realtime Database
    const database = firebase.database();

    // Get a reference to the 'milkHistoryData' node in the database
    const milkHistoryRef = database.ref('milkHistoryData');

    // Push the new entry to the 'milkHistoryData' node
    milkHistoryRef.push(newEntry);

    // Redirect to milk-history.html
    window.location.href = 'milk-history.html';
}

// Function to toggle the navbar
function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.style.display = (navbar.style.display === 'block') ? 'none' : 'block';
}
