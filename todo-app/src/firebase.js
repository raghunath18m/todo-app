import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAt-IzBKZHmwQukZPdKPWBmgffrbWgiSDA",
    authDomain: "todo-app-b6a8b.firebaseapp.com",
    projectId: "todo-app-b6a8b",
    storageBucket: "todo-app-b6a8b.appspot.com",
    messagingSenderId: "199809752852",
    appId: "1:199809752852:web:b36b93401b745505c2ec01",
    measurementId: "G-3NC57WN77T"
});

const db= firebaseApp.firestore();
const auth = firebase.auth();

export default db;