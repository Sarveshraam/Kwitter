
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA3vQnNitO4QxuiGCI2OuF6NHcW2VooTIc",
  authDomain: "kwitter-web-app-c54ac.firebaseapp.com",
  projectId: "kwitter-web-app-c54ac",
  storageBucket: "kwitter-web-app-c54ac.appspot.com",
  messagingSenderId: "915631966438",
  appId: "1:915631966438:web:74d8a2d7a3ef02cc635327",
  measurementId: "G-GFK124K056"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
