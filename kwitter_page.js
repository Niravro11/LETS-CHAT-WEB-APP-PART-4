var firebaseConfig = {
    apiKey: "AIzaSyB8KaE6mmVVDVjHYLV_Vpb9BugMg92_1XA",
    authDomain: "practise-d17ee.firebaseapp.com",
    databaseURL: "https://practise-d17ee-default-rtdb.firebaseio.com",
    projectId: "practise-d17ee",
    storageBucket: "practise-d17ee.appspot.com",
    messagingSenderId: "579148984265",
    appId: "1:579148984265:web:3214048c41657c7fb88218",
    measurementId: "G-G9NQ5JJTMM"
  };
firebase.initializeApp(firebaseConfig);
user_name= localStorage.getItem ("user_name");
room_name= localStorage.getItem ("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
} });  }); }
getData();
function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push ({
          name: user_name,
          message: msg,
          like:0
    });
    document.getElementById("msg").value = "";
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location= "index.html";
}                                               