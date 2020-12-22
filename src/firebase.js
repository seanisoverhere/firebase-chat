import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyAIJ_c4RMZjKkE3qWSakATlPUCBnkUt_UI",
    authDomain: "chat-application-b6ac8.firebaseapp.com",
    databaseURL: "https://chat-application-b6ac8-default-rtdb.firebaseio.com",
    projectId: "chat-application-b6ac8",
    storageBucket: "chat-application-b6ac8.appspot.com",
    messagingSenderId: "56386342336",
    appId: "1:56386342336:web:72f2c1cf8174cf59d4cc25",
    measurementId: "G-VMX66KNE61"
  };

firebase.initializeApp(firebaseConfig)

const db = firebase.database()
const auth = firebase.auth()
const firestore = firebase.firestore()

export { db, auth, firestore }