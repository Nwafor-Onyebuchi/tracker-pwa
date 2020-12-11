import firebase from "firebase/";
import "firebase/database";

const config = {
  apiKey: "AIzaSyAvXOcrcyUqXJGOWHIic0WdJd5vQwRQvVU",
  authDomain: "tracker-26545.firebaseapp.com",
  projectId: "tracker-26545",
  storageBucket: "tracker-26545.appspot.com",
  messagingSenderId: "488551533884",
};

const firebaseApp = firebase.initializeApp(config);
export const auth = firebaseApp.auth();

export const firestore = firebaseApp.firestore();
// export const firestore = firebase.firestore();
