/* TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries */


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDQ6iQZxWnAOpGPgNxeZFb4JmAVEDYuAd0",
    authDomain: "tutorial-vuejs-ec1db.firebaseapp.com",
    projectId: "tutorial-vuejs-ec1db",
    storageBucket: "tutorial-vuejs-ec1db.appspot.com",
    messagingSenderId: "771599811699",
    appId: "1:771599811699:web:d31e7ac26fee10e5cd1606"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();

  const kelasRef = db.ref('kelas');
