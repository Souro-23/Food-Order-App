import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBjVttR8Tgnd07CJA6Yvd6voA-89B2C0jg",
  authDomain: "fooody-1e9c4.firebaseapp.com",
  databaseURL: "https://fooody-1e9c4.firebaseio.com",
  projectId: "fooody-1e9c4",
  storageBucket: "fooody-1e9c4.appspot.com",
  messagingSenderId: "124327318397",
  appId: "1:124327318397:web:51eaaf5b6198db4e22b214",
  measurementId: "G-461ZRY26R8",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
