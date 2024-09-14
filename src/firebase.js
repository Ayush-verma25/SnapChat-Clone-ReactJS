import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDovN07B7ztiTMewkI1auvfmVDcyDbZP2o",
  authDomain: "snapchat-clone-636d0.firebaseapp.com",
  projectId: "snapchat-clone-636d0",
  storageBucket: "snapchat-clone-636d0.appspot.com",
  messagingSenderId: "1057616392674",
  appId: "1:1057616392674:web:dc77c009f7867b4a94c9bb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
