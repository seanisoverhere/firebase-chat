import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/database"


firebase.initializeApp(firebaseConfig)

const db = firebase.database()
const auth = firebase.auth()
const firestore = firebase.firestore()

export { db, auth, firestore }