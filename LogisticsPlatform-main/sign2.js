// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDEjR-MixzmMSYhJryErl1CUlo_FVIKzA",
    authDomain: "demodb-8c0ae.firebaseapp.com",
    databaseURL: "https://demodb-8c0ae-default-rtdb.firebaseio.com",
    projectId: "demodb-8c0ae",
    storageBucket: "demodb-8c0ae.appspot.com",
    messagingSenderId: "223857191426",
    appId: "1:223857191426:web:f19f39cdb5df4e8ed3951b",
    measurementId: "G-SMEW5RM5VL"
  };

firebase.initializeApp(firebaseConfig);
const transportdata = firebase.database().ref('transportdb');

document.getElementById('transportdb').addEventListener('submit', submitLoginForm);

function submitLoginForm(e) {
    e.preventDefault(); // Prevent the default form submission

    const name = getElementVal('name');
    const password = getElementVal('password');

    // Call function to verify user
    verifyUser(name, password);
}

const verifyUser = (name, password) => {
    transportdata.once('value', (snapshot) => {
        let userFound = false;

        snapshot.forEach(childSnapshot => {
            const userData = childSnapshot.val();
            if (userData.name === name && userData.password === password) {
                userFound = true;
                return; // Exit the loop early on success
            }
        });

        const alertBox = document.getElementById('alert-box');
        if (userFound) {
            alertBox.style.display = "block";
            alertBox.style.color = "green";
            alertBox.innerHTML = "Login successful! Redirecting...";
            setTimeout(() => {
                window.location.href = "index.html"; // Redirect to home page
            }, 2000); // Redirect after 2 seconds
        } else {
            alertBox.style.display = "block";
            alertBox.style.color = "red";
            alertBox.innerHTML = "Invalid username or password. Please try again.";
        }
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}
