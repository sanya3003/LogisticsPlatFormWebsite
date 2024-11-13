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
var transportdata = firebase.database().ref('transportdb1');
document.getElementById('transportdb1').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    var discrip = getElementVal('discrip');
    var ss = getElementVal('ss');
    var sc = getElementVal('sc');
    var ds = getElementVal('ds');
    var dc = getElementVal('dc');
    var st = getElementVal('st');
    // console.log(name,email, password,password2);
    saveMessages(ss, sc, ds, dc,st);
    document.querySelector('.alert').style.display = "block";

}
const saveMessages = (ss, sc, ds, dc,st) => {
    var newtransport = transportdata.push();

    newtransport.set({
        ss: ss,
        sc: sc,
        ds: ds,
        dc: dc,
        st: st,
    });
};


const getElementVal = (id) => {
    return document.getElementById(id).value;
}
