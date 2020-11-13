import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDiRTaArReq69UV4Kj0S-d608U9DJf47Ak",
    authDomain: "sundaysvibe-1caca.firebaseapp.com",
    databaseURL: "https://sundaysvibe-1caca.firebaseio.com",
    projectId: "sundaysvibe-1caca",
    storageBucket: "sundaysvibe-1caca.appspot.com",
    messagingSenderId: "1032952584575",
    appId: "1:1032952584575:web:45aef7afe974d138c0624a",
    measurementId: "G-4W4D6MS1DC"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;
