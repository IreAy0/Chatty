import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB-6iXIgN0wMgvG7cM2R3CI1hFZOf2l_EA",
    authDomain: "chat-app-7dc46.firebaseapp.com",
    databaseURL: "https://chat-app-7dc46.firebaseio.com",
    projectId: "chat-app-7dc46",
    storageBucket: "chat-app-7dc46.appspot.com",
    messagingSenderId: "970053040101",
    appId: "1:970053040101:web:d58c73c869962c6667210c",
    measurementId: "G-KYXKQYPJB5"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;