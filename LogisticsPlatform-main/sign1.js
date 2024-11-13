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
var transportdata = firebase.database().ref('transportdb');
document.getElementById('transportdb').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    var name = getElementVal('name');
    var email = getElementVal('email');
    var password = getElementVal('password');
    var password2 = getElementVal('password2');
    // console.log(name,email, password,password2);
    saveMessages(name, email, password, password2);
    document.querySelector('.alert').style.display = "block";

}
const saveMessages = (name, email, password, password2) => {
    var newtransport = transportdata.push();

    newtransport.set({
        name: name,
        email: email,
        password: password,
        password2: password2,
    });
};


const getElementVal = (id) => {
    return document.getElementById(id).value;
}
