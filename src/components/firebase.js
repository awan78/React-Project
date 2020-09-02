import * as firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyDHh46sQbYgrIFw3u9DrhBnNaQCo7Svk0M",
    authDomain: "testproject-56b1c.firebaseapp.com",
    databaseURL: "https://testproject-56b1c.firebaseio.com",
    projectId: "testproject-56b1c",
    storageBucket: "testproject-56b1c.appspot.com",
    messagingSenderId: "43363885925",
    appId: "1:43363885925:web:714a9500ac3f548ee0b78c"
  };
  // Initialize Firebase
 var fireDb=firebase.initializeApp(firebaseConfig);
 export default fireDb.database().ref("testproject-56b1c");