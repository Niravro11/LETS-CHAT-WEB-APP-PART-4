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


user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "WELCOME " + user_name + "!";
function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child (room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location= "kwitter_page.html";
    
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("ROOM NAME - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location= "kwitter_page.html";
} 
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}                                                                                                                                                                                                                                                                                                   